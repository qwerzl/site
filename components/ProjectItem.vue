<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  desc: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  icon: {
    // icon names from https://icones.js.org/
    type: String,
    default: ''
  }
})

const hovered = ref(false)
</script>

<template>
  <div
      class="px-4 py-3 rounded transition-colors border"
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
  >
    <div class="flex h-full items-center justify-center text-white">
      <div class="mr-4 text-4xl">
        <Icon :name="icon" />
      </div>
      <div class="flex-1">
        <div class="font-medium leading-relaxed text-foreground">{{ name }}</div>
        <div class="op-50 text-sm text-secondary-foreground">{{ desc }}</div>
      </div>
      <Icon v-if="hovered" name="system-uicons:arrow-top-right" class="h-4 w-4 transition mr-2 text-secondary-foreground"/>
    </div>
  </div>
</template>

<style scoped>
.transition {
  animation: fadeIn 0.5s;
  -webkit-animation: fadeIn 0.5s;
  -moz-animation: fadeIn 0.5s;
  -o-animation: fadeIn 0.5s;
  -ms-animation: fadeIn 0.5s;
}
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-moz-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-webkit-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-o-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-ms-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
