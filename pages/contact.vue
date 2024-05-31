<template>
  <div>
    <Container>
      <Hero/>

        <div class="container flex flex-col px-10 pt-10 pb-12 mx-auto gap-8 lg:pt-20 lg:pb-0 lg:px-40">
          <h1 class="font-grotesk font-medium text-2xl sm:text-3xl">Contact 💬</h1>

          <p class="font-grotesk whitespace-pre-line mb-3">
            Vous avez une question au sujet de Feelit ou besoin d'une information ?
            <br>Vous souhaitez nous partager vos commentaires, idées ou axes d'amélioration ?
            <br>Conctactez-nous via le formulaire ci-dessous, nous tâcherons de vous répondre dès que possible !
          </p>





        </div>

      <Footer/>
    </Container>
  </div>
</template>

<script setup>

definePageMeta({colorMode: 'light'})

import { EmailParams, MailerSend, Recipient, Sender } from 'mailersend'
import { useCompiler } from '#vue-email'

const senderEmail = ref('')
const senderName = ref('')

const mailerSend = new MailerSend({
  apiKey: 'mlsn.36bccd326d31bac7654e59273df1ac18c16cb2dd49875a736fd3547cb610baba' || '',
})

const sentFrom = new Sender(senderEmail, senderName)
const recipients = [
  new Recipient('feelit.ada@gmail.com', 'Feelit')
]

export default defineEventHandler(async (event) => {
  const template = await useCompiler('welcome.vue', {
    props: {
      url: 'https://vuemail.net/',
    }
  })

  const options = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject('This is a Subject')
      .setHtml(template.html)

  await mailerSend.email.send(options)
  return { message: 'Email envoyé' }
})

</script>