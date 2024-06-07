<template>
  <div>
    <Container>
      <Hero/>

        <div class="container flex flex-col px-10 pt-10 pb-12 mx-auto gap-8 lg:pt-20 lg:pb-0 lg:px-40">
          <h1 class="font-grotesk font-medium text-2xl sm:text-3xl">Contact 💬</h1>

<<<<<<< Updated upstream
          <p class="font-grotesk whitespace-pre-line mb-3">
            Vous avez une question au sujet de Feelit ou besoin d'une information ?
            <br>Vous souhaitez nous partager vos commentaires, idées ou axes d'amélioration ?
            <br>Conctactez-nous via le formulaire ci-dessous, nous tâcherons de vous répondre dès que possible !
          </p>
=======

        <div class="flex flex-col gap-y-6">
          <Input v-model="name" label="Votre nom :"/>
          <Input v-model="email" label="Votre adresse e-mail :"/>
          <Input v-model="object" label="Objet de votre message :"/>
          <div class="flex flex-col">
            <label for="message" class="font-grotesk text-sm mb-1">Votre message :</label>
            <textarea
                id="message"
                v-model="message"
                class="h-32 border border-black p-2 rounded-2xl font-grotesk text-sm"
            />
          </div>
        </div>

        <Button
            @click="sendMessage"
            color="#93ECEE"
            type="submit"
            content="Envoyer"
            class="mt-4 mx-auto">
        </Button>
>>>>>>> Stashed changes





        </div>

      <Footer/>
    </Container>
  </div>
</template>

<script setup>

definePageMeta({colorMode: 'light'})

</script>