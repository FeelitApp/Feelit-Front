import { api } from '@/api/client'

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
    },
    async update(email, username) {
      return await api.account.update(email, username)
    },
    async updatePassword(currentPassword, newPassword) {
      return await api.account.updatePassword(currentPassword, newPassword)
    },
    async delete() {
      sessionStore.account =  await api.account.delete()
    },
    async updatePassword(currentPassword, newPassword) {
      return await api.account.updatePassword(currentPassword, newPassword)
    }
  }

  return {
    provide: {
      session
    }
  }
})
