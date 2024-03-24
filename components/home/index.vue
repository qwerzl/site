<script setup lang="ts">
import Background from './Background.vue';

if (process.client) {
  const text = ["你好", "Bonjour", "Hello"];
  let counter = 0;
  const elem = document.getElementById("changeText");
  setInterval(change, 10000);

  function change() {
    elem!.classList.add('hide');
    setTimeout(function () {
      elem!.innerHTML = text[counter];
      elem!.classList.remove('hide');
      counter++;
      if (counter >= text.length) {
        counter = 0;
      }
    }, 1000);
  }
}
</script>

<template>
  <Background />
  <div class="fixed w-full h-full top-0 left-0 right-0 bottom-0 z-2">
    <Nav route="index" />
    <div class="absolute top-1/2 left-1/2 overlay-center">
        <h1 id="changeText">Hello</h1>
    </div>
    <div class="absolute bottom-10 left-10">
      <div class="flex-col">
        <div>
          Tom Tang, WFLA '25.
        </div>
<!--        <div>-->
<!--          CG Enthusiast, CS Fanatic.-->
<!--        </div>-->
        <div>
          See more of me in my <a href="/blog" class="underline font-mono italic">blog</a> and <a href="/portfolio" class="underline font-mono italic">portfolio</a>.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.overlay-center {
  transform: translate3d(-50%, -50%, 0);
  pointer-events: none;
}

h1 {
  margin: 0;
  padding: 0;
  font-size: 15em;
  letter-spacing: -0.05em;
  text-align: center;
}

/* phone */
@media (max-width: 599px) {
  h1 {
    font-size: 6em;
  }
}

/* tablet portrait up */
@media (min-width: 600px) {
  h1 {
    font-size: 10em;
  }
}

/* tablet landscape */
@media (min-width: 900px) {
  h1 {
    font-size: 14em;
  }
}

/* tablet desktop up */
@media (min-width: 1200px) {
  h1 {
    font-size: 18em;
  }
}

/* tablet big desktop up */
@media (min-width: 1800px) {
  h1 {
    font-size: 24em;
  }
}

/* Hello Animation */
#changeText {
  opacity: 1;
  transition: opacity 1s;
}
.hide {
  opacity: 0 !important;
}
</style>
