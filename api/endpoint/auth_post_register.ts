import { useRuntimeConfig } from '#app'
import { UserDto } from '../dto/user_dto'
import { isBadRequest } from '~/api/utils'

export interface AuthPostRegisterInput {
  email: string,
  username: string,
  password: string,

  toFormData(): FormData
}

export interface AuthPostRegisterBadRequest {
  email?: string[],
  username?: string[],
  password?: string[],
}

export class AuthPostRegisterInputImpl implements AuthPostRegisterInput {
  constructor (
    public readonly email: string,
    public readonly username: string,
    public readonly password: string,
  ) {}

  public toFormData () {
    const formData = new FormData()
    formData.append('email', this.email)
    formData.append('username', this.username)
    formData.append('password', this.password)
    return formData
  }
}

export class AuthPostRegisterBadRequestImpl implements AuthPostRegisterBadRequest {
  constructor (
    public readonly email?: string[],
    public readonly fullName?: string[],
    public readonly password?: string[],
  ) {}

  public static fromJson (data: AuthPostRegisterBadRequest) {
    return new AuthPostRegisterBadRequestImpl(
      data.email,
      data.username,
      data.password,
    )
  }
}

export async function AuthPostRegisterEndpoint (input: AuthPostRegisterInput) {
  try {
    await $fetch('register', {
      baseURL: useRuntimeConfig().public.apiBase,
      method: 'POST',
      body: input.toFormData(),
      credentials: 'include'
    })
  } catch (e: any) {
    if (isBadRequest(e)) {
      const errors = e.data.errors
      console.log(errors)
      return AuthPostRegisterBadRequestImpl.fromJson(errors)
    }
    throw e
  }
}
