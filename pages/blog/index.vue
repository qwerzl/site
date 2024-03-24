<script setup lang="ts">

</script>

<template>
  <Nav route="blog" />
  <div class="w-screen h-56 border-muted-background border-b-2 flex items-center bg-foreground text-background 2xl:h-72">
    <div class="text-6xl lg:text-7xl xl:text-8xl font-bold ml-6 xl:ml-20 flex items-center">
      Blog
    </div>
  </div>
  <div class="max-w-7xl px-6 mx-auto mt-6 items-start grid grid-cols-1 gap-4">
    <ContentList path="/blog" v-slot="{ list }">
      <div class="outline outline-muted rounded p-4" v-for="article in list">
        <NuxtLink :to="article._path">
          <header class="post-card-header">
            <div class="post-card-primary-tag text-muted-foreground text-sm" v-if="article.tags">{{ article.tags[0] }}</div>
            <h2 class="post-card-title text-xl font-bold hover:text-main">{{ article.title }}</h2>
          </header>
          <section class="post-card-excerpt my-2 text-muted-foreground">
            <p class="line-clamp-4">{{ article.description}}</p>
          </section>
        </NuxtLink>
      </div>
    </ContentList>
  </div>
</template>

<style scoped>

</style>
