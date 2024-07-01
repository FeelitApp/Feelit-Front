import { AuthPostRegisterEndpoint, AuthPostRegisterInputImpl } from './endpoint/auth_post_register'
import { AuthPostLoginEndpoint, AuthPostLoginInputImpl } from './endpoint/auth_post_login'
import { proxifyEndpointInput } from './utils'

export const api = {
  auth: {
    login: proxifyEndpointInput(AuthPostLoginEndpoint, AuthPostLoginInputImpl),
    register: proxifyEndpointInput(AuthPostRegisterEndpoint, AuthPostRegisterInputImpl)
  }
}