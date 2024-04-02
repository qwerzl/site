<script setup lang="ts">

</script>

<template>
<Nav />
  <div class="w-screen h-56 border-muted-background border-b-2 flex items-center bg-foreground text-background 2xl:h-72">
    <div class="text-6xl lg:text-7xl xl:text-8xl font-bold ml-6 xl:ml-20 flex items-center">
      About
    </div>
  </div>
  <div class="mt-4 flex justify-center">
    <div class="max-w-6xl px-4">
      <ProseP class="mt-2">
        <b>Hi there! 👋</b>
      </ProseP>
      <ProseP>
        I'm <b>Tom Tang</b>, a high school student from WFLA '25, a fanatical opensourcer and a keen 3D artist. <br />
        I've contributed to <b>a few opensource projects</b> and I've gained <b>300k+ views</b> on Unsplash.<br />
      </ProseP>
      <ProseP>
        You can find me on <NuxtLink to="https://github.com/qwerzl" class="underline hover:font-medium">GitHub</NuxtLink> and <NuxtLink to="https://unsplash/@qwerzl" class="underline hover:font-medium">Unsplash</NuxtLink>. <br />
      </ProseP>
      <hr class="my-8"/>
      <Projects />
    </div>
  </div>
</template>

<style scoped>

</style>
