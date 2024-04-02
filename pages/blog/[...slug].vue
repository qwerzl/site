<script setup lang="ts">
import { ScrollArea } from '@/components/ui/scroll-area'
</script>

<template>
  <ScrollArea class="h-screen">
  <Nav route="blog" class="bg-background z-40 w-screen" />
  <ContentDoc v-slot="{ doc }">
    <div class="w-screen h-56 border-muted-background border-b-2 flex items-center bg-foreground text-background 2xl:h-72">
      <div class="text-6xl lg:text-7xl xl:text-8xl font-bold ml-6 xl:ml-20 flex-col">
        <div v-if="doc.tags" class="text-muted-foreground text-5xl lg:text-6xl xl:text-7xl font-normal">
          {{ doc.tags.join(", ") }}
        </div>
        <div>
          {{ doc.title }}
        </div>
      </div>
    </div>
    <div v-if=doc.date class="w-screen h-10 flex justify-center items-center" style="background-image: repeating-linear-gradient(135deg, rgba(0,0,0,0.05),rgba(0,0,0,0.08),rgba(0,0,0,0.03),rgba(0,0,0,0.03),rgba(0,0,0,0.08),rgba(0,0,0,0.05),rgba(0,0,0,0.09),rgba(0,0,0,0.1),rgba(0,0,0,0.03),transparent,rgba(0,0,0,0.07),rgba(0,0,0,0.03),rgba(0,0,0,0.01) 4px),linear-gradient(135deg, rgb(239, 145, 97),rgb(153, 53, 18)); overflow: hidden;">
      <div class="text-xl flex items-center text-muted-background font-mono justify-center" style="white-space: nowrap; overflow: hidden;">
        <div class="wrapper">
          <div class="marquee">
            <p>
              - {{ Array(20).fill((new Date(doc.date)).toLocaleDateString()).join(' - ') }}
            </p>
            <p>
              - {{ Array(20).fill((new Date(doc.date)).toLocaleDateString()).join(' - ') }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-4 w-screen">
      <div class="max-w-6xl px-4">
        <ContentRenderer :value="doc"/>
      </div>
    </div>
  </ContentDoc>

  <div class="w-screen mt-10">
    <footer class="rounded-lg shadow border-t">
      <div class="w-full mx-auto max-w-screen-xl py-8 px-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-muted-foreground sm:text-center">© 2024 Tom Tang. All Rights Reserved.
    </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-muted-foreground md:mt-0">
          <li>
            <NuxtLink to="https://github.com/qwerzl/site" class="hover:underline me-4 md:me-6">GitHub</NuxtLink>
          </li>
          <li>
            <a href="mailto:me@qwerzl.me" class="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
  </ScrollArea>

</template>

<style>
.wrapper {
  max-width: 100%;
  overflow: hidden;
}

.marquee {
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  animation: marquee 80s linear infinite;
}

.marquee p {
  display: inline-block;
}

@keyframes marquee {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}
</style>
