<template>
  <h4 :id="id" class="scroll-m-20 text-xl font-semibold tracking-tight mt-10">
    <a
        v-if="id && generate"
        :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h4>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h4)
</script>
