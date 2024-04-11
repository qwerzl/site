<script setup lang="ts">
const {x, y} = useMouse({touch: false})
const cursor = ref<HTMLElement>()
const focused = useWindowFocus()
const isLeft = usePageLeave()

watch([x, y], () => {
  if (cursor.value) {
    cursor.value.style.left = String(x.value)+"px"
    cursor.value.style.top = String(y.value)+"px"
  }
})
</script>

<template>
  <Transition>
    <div
        v-if="focused && !isLeft"
        ref="cursor"
        class='follower'>
    </div>
  </Transition>
</template>

<style scoped>
.follower {
  z-index: 100;
  width: 50px;
  height: 50px;
  background-color: #FFF;
  mix-blend-mode: difference;
  border-radius: 50px;
  transition-duration: 2000ms;
  transition-timing-function: ease-out;
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
