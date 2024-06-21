export default defineNuxtPlugin(() => {
  const sessionStore = useSessionStore()
  const { account } = storeToRefs(sessionStore)

  const session = {
    account,
    async restore () {
      sessionStore.account = await $fetch('me', {
        baseURL: useRuntimeConfig().public.apiBase,
        method: 'GET',
        credentials: 'include'
      })
    },
    async logout() {
      sessionStore.account = await $fetch('logout', {
        baseURL: useRuntimeConfig().public.apiBase,
        method: 'POST',
        credentials: 'include'
      })
    }
  }

  return {
    provide: {
      session
    }
  }
})
