import { isBadRequest } from '~/api/utils'
import {useRuntimeConfig} from "#app";

export interface AccountPatchPasswordInput {
    currentPassword: string,
    newPassword: string

    toFormData():Record<string, any>
}

export interface AccountPatchPasswordBadRequest {
    currentPassword?: string[],
    newPassword?: string[],
    code?: string
}

export class AccountPatchPasswordInputImpl implements AccountPatchPasswordInput {
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

export class AccountPatchPasswordBadRequestImpl implements AccountPatchPasswordBadRequest {
    constructor(
        public readonly currentPassword?: string[],
        public readonly newPassword?: string[],
        public readonly code?: string
    ) {}
    public static fromJson (data: AccountPatchPasswordBadRequest) {
        return new AccountPatchPasswordBadRequestImpl(
            data.currentPassword,
            data.newPassword,
            data.code
        )
    }
}

export async function AccountPatchPasswordEndpoint (input: AccountPatchPasswordInput) {
    try {
        await $fetch('users/me/password', {
            baseURL: useRuntimeConfig().public.apiBase,
            method: 'POST',
            body: input.toFormData(),
            credentials: 'include'
        })

    } catch (e: any) {
        if (isBadRequest(e)) {
            console.log(e.data)
            const errors = e.data
            return AccountPatchPasswordBadRequestImpl.fromJson(errors)
        }
        throw e
    }
}