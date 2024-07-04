import { AccountPatchPasswordEndpoint, AccountPatchPasswordInputImpl } from "~/api/endpoint/account_patch_password";
import { AccountPatchInfosEndpoint, AccountPostInfosInputImpl } from './endpoint/account_post_infos'
import { AuthPostLoginEndpoint, AuthPostLoginInputImpl } from './endpoint/auth_post_login'
import { AuthPostRegisterEndpoint, AuthPostRegisterInputImpl } from './endpoint/auth_post_register'
import { DataGetEmotionEndpoint } from './endpoint/data_get_emotion'
import { DataGetFeelingEndpoint } from './endpoint/data_get_feeling'
import { DataGetNeedEndpoint } from './endpoint/data_get_need'
import { DataGetSensationEndpoint } from './endpoint/data_get_sensation'
import {DataPostEntryEndpoint, DataPostEntryInputImpl} from './endpoint/data_post_entry'


import { proxifyEndpointInput } from './utils'

export const api = {
  auth: {
    login: proxifyEndpointInput(AuthPostLoginEndpoint, AuthPostLoginInputImpl),
    register: proxifyEndpointInput(AuthPostRegisterEndpoint, AuthPostRegisterInputImpl)
  },
  account: {
    update: proxifyEndpointInput(AccountPatchInfosEndpoint, AccountPostInfosInputImpl),
    updatePassword: proxifyEndpointInput(AccountPatchPasswordEndpoint, AccountPatchPasswordInputImpl)
  },
  data: {
    getFeeling: DataGetFeelingEndpoint,
    getEmotion: DataGetEmotionEndpoint,
    getSensation: DataGetSensationEndpoint,
    getNeed: DataGetNeedEndpoint,
    postEntry: proxifyEndpointInput(DataPostEntryEndpoint, DataPostEntryInputImpl),
  }
}