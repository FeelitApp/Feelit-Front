import { useRuntimeConfig } from '#app'
import { FeelingDto } from '../dto/feeling_dto'

export async function DataGetFeelingEndpoint () {
    const response: any = await $fetch('feeling', {
      baseURL: useRuntimeConfig().public.apiBase,
      method: 'GET',
      credentials: 'include'
    })
    return FeelingDto.fromJsonArray(response)
}