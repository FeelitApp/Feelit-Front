import { useRuntimeConfig } from '#app'
import { EmotionDto } from '../dto/emotion_dto'

export async function DataGetEmotionEndpoint () {
    const response: any = await $fetch('api/emotion', {
      baseURL: useRuntimeConfig().public.apiBase,
      method: 'GET',
      credentials: 'include'
    })
    return EmotionDto.fromJsonArray(response)
}