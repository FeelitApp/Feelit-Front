import { useRuntimeConfig } from '#app'
import { isBadRequest } from '~/api/utils'
import { UserDto } from '../dto/user_dto'

export interface AccountPostInfosInput {
  email?: string
  username?: string
  toFormData(): FormData
}

export interface AccountPostInfosBadRequest {
  email?: string[],
  username?: string[]
}

export class AccountPostInfosInputImpl implements AccountPostInfosInput {
  constructor (
    public readonly email?: string,
    public readonly username?: string
  ) {}

  public toFormData () {
    const formData = new FormData()
    formData.append('email', this.email || '')
    formData.append('username', this.username || '')
    return formData
  }
}

export class AccountPostInfosBadRequestImpl implements AccountPostInfosBadRequest {
  constructor (
    public readonly email?: string[],
    public readonly username?: string[]
  ) {}

  public static fromJson (data: AccountPostInfosBadRequest) {
    return new AccountPostInfosBadRequestImpl(
      data.email,
      data.username
    )
  }
}

export async function AccountPatchInfosEndpoint (input: AccountPostInfosInput) {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase

  try {
    const response: any = await $fetch('users/me', {
      baseURL: apiBase,
      method: 'POST',
      body: input.toFormData(),
      credentials: 'include'
    })

    return UserDto.fromJson(response.data)
  } catch (e: any) {
    if (isBadRequest(e)) {
      const errors = e.data.errors
      return AccountPostInfosBadRequestImpl.fromJson(errors)
    }
    throw e
  }
}
