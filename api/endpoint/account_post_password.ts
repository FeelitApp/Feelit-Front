import { isBadRequest } from '~/api/utils'

export interface AccountPostPasswordInput {
    currentPassword: string,
    newPassword: string

    toFormData():Record<string, any>
}

export interface AccountPostPasswordBadRequest {
    currentPassword?: string[],
    newPassword?: string[]
}

export class AccountPostPasswordInputImpl implements AccountPostPasswordInput {
    constructor(
        public readonly currentPassword: string,
        public readonly newPassword: string,
    ) {}
    public toFormData () {
        const formData = new FormData()
        formData.append('currentPassword', this.currentPassword || '')
        formData.append('newPassword', this.newPassword || '')
        return formData
    }
}

export class AccountPostPasswordBadRequestImpl implements AccountPostPasswordBadRequest {
    constructor(
        public readonly currentPassword?: string[],
        public readonly newPassword?: string[]
    ) {}
    public static fromJson (data: AccountPostPasswordBadRequest) {
        return new AccountPostPasswordBadRequestImpl(
            data.currentPassword,
            data.newPassword
        )
    }
}

export async function AccountPostPasswordEndpoint (input: AccountPostPasswordInput) {
    try {
        await $fetch('users/me/password', {
            baseURL: useRuntimeConfig().public.apiBase,
            method: 'POST',
            body: input.toFormData(),
            credentials: 'include'
        })

    } catch (e: any) {
        if (isBadRequest(e)) {
            const errors = e.data.errors
            return AccountPostPasswordBadRequestImpl.fromJson(errors)
        }
        throw e
    }
}