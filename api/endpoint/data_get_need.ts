import { useRuntimeConfig } from '#app'
import { NeedDto } from '../dto/need_dto'

export async function DataGetNeedEndpoint () {
    const response: any = await $fetch('api/need', {
      baseURL: useRuntimeConfig().public.apiBase,
      method: 'GET',
      credentials: 'include'
    })
    return NeedDto.fromJsonArray(response)
}