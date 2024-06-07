<template>
  <div>
    <Container>
      <Hero />
      <div class="container flex flex-col px-10 pt-10 pb-12 mx-auto gap-8 lg:pt-20 lg:pb-0 lg:px-40">
        <h1 class="font-grotesk font-medium text-2xl sm:text-3xl">Contact 💬</h1>

        <p class="font-grotesk whitespace-pre-line mb-3">
          Vous avez une question au sujet de Feelit ou besoin d'une information ?
          <br>Vous souhaitez nous partager vos commentaires, idées ou axes d'amélioration ?
          <br>Conctactez-nous via le formulaire ci-dessous, nous tâcherons de vous répondre dès que possible !
        </p>

        <UFormGroup label="message">
          <Input v-model="name"></Input>
          <Input v-model="email"></Input>
          <Input v-model="object"></Input>
          <Input v-model="message"></Input>
        </UFormGroup>
        <Button
            @click="sendMessage"
            color="#93ECEE"
            type="submit"
            content="Envoyer"
            class="mt-4">
        </Button>

      </div>

      <Footer />
    </Container>
  </div>
</template>

<script setup>
definePageMeta({ colorMode: 'light' })

const name = ref('');
const email = ref('');
const object = ref('');
const message = ref('');

const sendMessage = async () => {
  await $fetch('/api/contact/send-email', {
    method: 'POST',
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      object: object.value,
      message: message.value })
  })
  alert('Message envoyé')
}
</script>
