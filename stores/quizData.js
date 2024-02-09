import {defineStore} from "pinia";

export const useQuizDataStore = defineStore({
    id: 'quiz',
    state: () => ({
        sensationId : undefined,
        emotionId : undefined,
        needId : undefined
    })
})