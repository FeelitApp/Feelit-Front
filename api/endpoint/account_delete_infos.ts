export async function AccountDeleteInfosEndpoint () {
  await $fetch('me/delete', {
    baseURL: useRuntimeConfig().public.apiBase,
    method: 'DELETE',
    credentials: 'include'
  })
}
