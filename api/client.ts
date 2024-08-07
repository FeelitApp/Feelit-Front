import { AccountPostPasswordEndpoint, AccountPostPasswordInputImpl } from "~/api/endpoint/account_post_password"
import { AccountPatchInfosEndpoint, AccountPostInfosInputImpl } from './endpoint/account_post_infos'
import { AuthPostLoginEndpoint, AuthPostLoginInputImpl } from './endpoint/auth_post_login'
import { AuthPostRegisterEndpoint, AuthPostRegisterInputImpl } from './endpoint/auth_post_register'
import { DataGetEmotionEndpoint } from './endpoint/data_get_emotion'
import { DataGetFeelingEndpoint } from './endpoint/data_get_feeling'
import { DataGetNeedEndpoint } from './endpoint/data_get_need'
import { DataGetSensationEndpoint } from './endpoint/data_get_sensation'
import { DataGetEntriesEndpoint } from './endpoint/data_get_entries'
import { DataPostEntryEndpoint, DataPostEntryInputImpl } from './endpoint/data_post_entry'
import { AccountDeleteInfosEndpoint } from './endpoint/account_delete_infos'


import { proxifyEndpointInput } from './utils'

export const api = {
  auth: {
    login: proxifyEndpointInput(AuthPostLoginEndpoint, AuthPostLoginInputImpl),
    register: proxifyEndpointInput(AuthPostRegisterEndpoint, AuthPostRegisterInputImpl),
  },
  account: {
    delete: AccountDeleteInfosEndpoint,
    update: proxifyEndpointInput(AccountPatchInfosEndpoint, AccountPostInfosInputImpl),
    updatePassword: proxifyEndpointInput(AccountPostPasswordEndpoint, AccountPostPasswordInputImpl)
  },
  data: {
    getFeeling: DataGetFeelingEndpoint,
    getEmotion: DataGetEmotionEndpoint,
    getSensation: DataGetSensationEndpoint,
    getNeed: DataGetNeedEndpoint,
    getEntries: DataGetEntriesEndpoint,
    postEntry: proxifyEndpointInput(DataPostEntryEndpoint, DataPostEntryInputImpl),
  }
}