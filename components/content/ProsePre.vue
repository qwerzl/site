<template>
  <pre :class="cn('mb-4 mt-6 overflow-x-auto border bg-black p-4 rounded', $props.class)"><slot /></pre>
</template>

<script setup lang="ts">
import { cn } from "~/lib/utils";

defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  }
})
</script>

<style>

</style>
