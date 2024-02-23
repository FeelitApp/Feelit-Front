import {defineStore} from "pinia";

export const useQuizDataStore = defineStore({
    id: 'quiz',
    state: () => ({
        sensationData : undefined,
        emotionData : undefined,
        needData : undefined,
        note : undefined,
    })
})