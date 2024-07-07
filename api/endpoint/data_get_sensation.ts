import { useRuntimeConfig } from '#app'
import { SensationDto } from '../dto/sensation_dto'

export async function DataGetSensationEndpoint () {
    const response: any = await $fetch('sensation', {
      baseURL: useRuntimeConfig().public.apiBase,
      method: 'GET',
      credentials: 'include'
    })
    return SensationDto.fromJsonArray(response)
}