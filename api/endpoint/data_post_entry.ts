import { useRuntimeConfig } from '#app'
import { isBadRequest } from '~/api/utils'

export interface DataPostEntryInput {
    sensation: number,
    feeling: number,
    emotion: number,
    need: number,
    comment: string,

    toFormData(): FormData
}

export interface DataPostEntryBadRequest {
    sensation?: number[],
    feeling?: number[],
    emotion?: number[],
    need?: number[],
    comment?: string[],
}

export class DataPostEntryInputImpl implements DataPostEntryInput {
    constructor (
        public readonly sensation: number,
        public readonly feeling: number,
        public readonly emotion: number,
        public readonly need: number,
        public readonly comment: string,
    ) {}

    public toFormData () {
        const formData = new FormData();
        formData.append('sensation', this.sensation);
        formData.append('feeling', this.feeling);
        formData.append('emotion', this.emotion);
        formData.append('need', this.need);
        formData.append('comment', this.comment);
        return formData
    }
}

export class DataPostEntryInputBadRequestImpl implements DataPostEntryBadRequest {
    constructor (
        public readonly sensation?: number[],
        public readonly feeling?: number[],
        public readonly emotion?: number[],
        public readonly need?: number[],
        public readonly comment?: string[],
    ) {}

    public static fromJson (data: DataPostEntryBadRequest) {
        return new DataPostEntryInputBadRequestImpl(
            data.sensation,
            data.feeling,
            data.emotion,
            data.need,
            data.comment,
        )
    }
}

export async function DataPostEntryEndpoint (input: DataPostEntryInputImpl) {
    try {
        await $fetch('entry', {
            baseURL: useRuntimeConfig().public.apiBase,
            method: 'POST',
            body: input.toFormData(),
            credentials: 'include'
        })
    } catch (e: any) {
        if (isBadRequest(e)) {
            const errors = e.data.errors
            console.log(errors)
            return DataPostEntryInputBadRequestImpl.fromJson(errors)
        }
        throw e
    }
}
