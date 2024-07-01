import { AuthPostRegisterEndpoint, AuthPostRegisterInputImpl } from './endpoint/auth_post_register'
import { AuthPostLoginEndpoint, AuthPostLoginInputImpl } from './endpoint/auth_post_login'
import { DataGetFeelingEndpoint } from './endpoint/data_get_feeling'
import { DataGetEmotionEndpoint } from './endpoint/data_get_emotion'
import { DataGetSensationEndpoint } from './endpoint/data_get_sensation'
import { DataGetNeedEndpoint } from './endpoint/data_get_need'


import { proxifyEndpointInput } from './utils'

export const api = {
  auth: {
    login: proxifyEndpointInput(AuthPostLoginEndpoint, AuthPostLoginInputImpl),
    register: proxifyEndpointInput(AuthPostRegisterEndpoint, AuthPostRegisterInputImpl)
  },
  data: {
    getFeeling: DataGetFeelingEndpoint,
    getEmotion: DataGetEmotionEndpoint,
    getSensation: DataGetSensationEndpoint,
    getNeed: DataGetNeedEndpoint
  }
}