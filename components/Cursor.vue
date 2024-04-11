<script setup lang="ts">
const {x, y} = useMouse({touch: false})
const cursor = ref<HTMLElement>()

watch([x, y], () => {
  if (cursor.value) {
    cursor.value.style.left = String(x.value)+"px"
    cursor.value.style.top = String(y.value)+"px"
  }
})
</script>

<template>
  <div
      ref="cursor"
      class='follower'>
  </div>
</template>

<style scoped>
.follower {
  z-index: 100;
  width: 50px;
  height: 50px;
  background-color: #FFF;
  mix-blend-mode: difference;
  border-radius: 50px;
  transition-duration: 1000ms;
  transition-timing-function: ease-out;
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
</style>
