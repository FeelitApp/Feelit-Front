import {defineStore} from "pinia";

export const useQuizDataStore = defineStore({
    id: 'quiz',
    state: () => ({
        sensationData : undefined,
        feelingData : undefined,
        emotionData : undefined,
        needData : undefined,
        comment : undefined,
    })
})