<template>
  <div>
    <Container>
      <Hero/>

        <div class="container flex flex-col gap-8 px-10 pt-10 pb-12 mx-auto lg:pt-20 lg:pb-0 lg:px-40">
          <h1 class="text-2xl font-medium font-grotesk sm:text-3xl">Contact 💬</h1>

          <p class="mb-3 whitespace-pre-line font-grotesk">
            Vous avez une question au sujet de Feelit ou besoin d'une information ?
            <br>Vous souhaitez nous partager vos commentaires, idées ou axes d'amélioration ?
            <br>Conctactez-nous via le formulaire ci-dessous, nous tâcherons de vous répondre dès que possible !
          </p>

          <div class="flex flex-col gap-y-6">
            <Input v-model="name" label="Votre nom :"/>
            <Input v-model="email" label="Votre adresse e-mail :"/>
            <Input v-model="object" label="Objet de votre message :"/>
            <div class="flex flex-col">
              <label for="message" class="mb-1 text-sm font-grotesk">Votre message :</label>
              <textarea
                  id="message"
                  v-model="message"
                  class="h-32 p-2 text-sm border border-black rounded-2xl font-grotesk"
              />
            </div>
          </div>

          <Button
              @click="sendMessage"
              color="#93ECEE"
              type="submit"
              content="Envoyer"
              class="mx-auto mt-4">
          </Button>

        </div>
      <Footer />
    </Container>
  </div>
</template>

<script setup>
definePageMeta({
  session: false,
  colorMode: 'light'
})

useHead({
  title: 'Feelit | Contact',
  meta: [
    {
      name: 'description',
      content: 'Une question, une suggestion ? Contactez l’équipe feelit !'
    }
  ]
});

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