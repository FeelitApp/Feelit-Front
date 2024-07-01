<template>
    <div class="flex flex-wrap justify-center gap-5 px-8 py-8 sm:justify-between lg:px-40 lg:pt-20 lg:pb-16 bg-light-pink wrap lg:bg-white lg:flex-row">
        <NuxtLink to="/glossaire">
          <Button
              :color="'#FFF'"
              :content="'Glossaire'"
          />
        </NuxtLink>
      <NuxtLink to="/contact">
        <Button
            :color="'#FFF'"
            :content="'Nous contacter'"
        />
      </NuxtLink>
      <NuxtLink to="/mentions-legales">
        <Button
            :color="'#FFF'"
            :content="'Mentions légales'"
        />
      </NuxtLink>
      <NuxtLink to="/">
        <img src="/logo_feelit_green.svg" class="object-contain w-20"/>
      </NuxtLink>
    </div>
</template>