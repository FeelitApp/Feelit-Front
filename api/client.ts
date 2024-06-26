import { AccountPatchInfosEndpoint, AccountPostInfosInputImpl } from './endpoint/account_post_infos'
import { AuthPostLoginEndpoint, AuthPostLoginInputImpl } from './endpoint/auth_post_login'
import { AuthPostRegisterEndpoint, AuthPostRegisterInputImpl } from './endpoint/auth_post_register'
import { DataGetEmotionEndpoint } from './endpoint/data_get_emotion'
import { DataGetFeelingEndpoint } from './endpoint/data_get_feeling'
import { DataGetNeedEndpoint } from './endpoint/data_get_need'
import { DataGetSensationEndpoint } from './endpoint/data_get_sensation'


import { proxifyEndpointInput } from './utils'

export const api = {
  auth: {
    login: proxifyEndpointInput(AuthPostLoginEndpoint, AuthPostLoginInputImpl),
    register: proxifyEndpointInput(AuthPostRegisterEndpoint, AuthPostRegisterInputImpl)
  },
  account: {
    update: proxifyEndpointInput(AccountPatchInfosEndpoint, AccountPostInfosInputImpl)
  },
  data: {
    getFeeling: DataGetFeelingEndpoint,
    getEmotion: DataGetEmotionEndpoint,
    getSensation: DataGetSensationEndpoint,
    getNeed: DataGetNeedEndpoint
  }
}