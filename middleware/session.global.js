export default defineNuxtRouteMiddleware(async (to) => {
  if (!process.client) { return }

  const guardDisabled = to.meta.session === false
  const { $session } = useNuxtApp()

  try {
    await $session.restore()
  } catch (e) {
    // probably unable to restore
  }

  const account = unref($session.account)
  const routeName = to.name?.toString() ?? 'undefined_route'

  if (guardDisabled && account) {
    console.log(`[middleware.session] ${routeName}: an account is already logged in`)
  }

  if (guardDisabled) {
    return
  }

  if (!account && !guardDisabled) {
    console.debug(`[middleware.session] ${routeName}: an account is required`)
    return onNuxtReady(() => navigateTo({ name: 'index' }))
  }
})
