<template>
  <div>
    <Container>
      <Hero />
      <UFormGroup label="message">
        <UInput v-model="message"></UInput>
      </UFormGroup>
      <UButton @click="sendMessage">Envoyer</UButton>
      <Footer />
    </Container>
  </div>
</template>

<script setup>
definePageMeta({ colorMode: 'light' })

const message = ref('')

const sendMessage = async () => {
  await $fetch('/api/contact/send-email', {
    method: 'POST',
    body: JSON.stringify({ message: message.value })
  })
  alert('Message envoyé')
}
</script>
