<script setup lang="ts">
const props = defineProps({
  route: String,
})
</script>

<template>
<div class="h-24 sm:h-28 border-b-2 border-secondary-background flex items-center lg:h-40">
  <div class="flex-row items-center grow">
    <NuxtLink to="/" class="h-full text-5xl font-bold text-center ml-0 lg:text-left lg:ml-20 flex items-center font-mono italic">
      <div class="ml-2 underline hidden lg:block">qwerzl's website.</div>
      <div class="ml-2 underline block lg:hidden w-full text-center">Q.</div>
    </NuxtLink>
  </div>
  <div class="grow flex h-full items-center text-xl">
    <NuxtLink to="/" class="pl-0 lg:pl-5 border-l-2 h-full border-muted-background flex items-center w-1/3" :class="{'bg-foreground text-background': route === 'index'}">
      <div class="hidden sm:block w-full text-center lg:text-left">
        Home
      </div>
      <div class="block sm:hidden w-full text-center lg:text-left">
        H
      </div>
    </NuxtLink>
    <NuxtLink to="/blog" class="pl-0 lg:pl-5 border-l-2 h-full border-muted-background flex items-center w-1/3" :class="{'bg-foreground text-background': route === 'blog'}">
      <div class="hidden sm:block w-full text-center lg:text-left">
        Blog
      </div>
      <div class="block sm:hidden w-full text-center lg:text-left">
        B
      </div>
    </NuxtLink>
    <NuxtLink to="/portfolio" class="pl-0 lg:pl-5 border-l-2 h-full border-muted-background flex items-center w-1/3" :class="{'bg-foreground text-background': route === 'portfolio'}" >
      <div class="hidden sm:block w-full text-center lg:text-left">
        Portfolio
      </div>
      <div class="block sm:hidden w-full text-center lg:text-left">
        P
      </div>
    </NuxtLink>
  </div>
</div>
</template>

<style scoped>

</style>
