import { useRuntimeConfig } from '#app'
import { EntryDto } from '../dto/entry_dto'

export async function DataGetEntriesEndpoint () {
    const response: any = await $fetch('entry', {
        baseURL: useRuntimeConfig().public.apiBase,
        method: 'GET',
        credentials: 'include'
    })
    return EntryDto.fromJsonArray(response.data)
}