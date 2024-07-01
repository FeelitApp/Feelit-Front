import { useRuntimeConfig } from '#app'
import { UserDto } from '../dto/user_dto'
import { isBadRequest } from '~/api/utils'

export interface AuthPostLoginInput {
  email: string
  password: string
  toFormData(): FormData
}

export interface AuthPostLoginBadRequest {
  code: string
}

export class AuthPostLoginInputImpl implements AuthPostLoginInput {
  constructor (
    public readonly email: string,
    public readonly password: string
  ) {}

  public toFormData () {
    const formData = new FormData()
    formData.append('email', this.email)
    formData.append('password', this.password)
    return formData
  }
}

export class AuthPostLoginBadRequestImpl implements AuthPostLoginBadRequest {
  constructor (
        public readonly code: string
  ) {}

  public static fromJson (data: AuthPostLoginBadRequest): AuthPostLoginBadRequestImpl {
    return new AuthPostLoginBadRequestImpl(
      data.code
    )
  }
}

export async function AuthPostLoginEndpoint (input: AuthPostLoginInput) {
  try {
    const response: any = await $fetch('login', {
      baseURL: useRuntimeConfig().public.apiBase,
      method: 'POST',
      body: input.toFormData(),
      credentials: 'include'
    })

    return UserDto.fromJson(response.data)
  } catch (e: any) {
    if (isBadRequest(e)) {
      const errors = e.data
      return AuthPostLoginBadRequestImpl.fromJson(errors)
    }
    throw e
  }
}
