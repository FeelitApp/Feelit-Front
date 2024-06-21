import { defineStore } from "pinia";

export const useSessionStore = defineStore({
  id: 'session',
  state: () => ({
      account: undefined,
  })
})