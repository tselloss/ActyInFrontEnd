<template>
  <main>
  <HomePage />
  </main>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
  },
};
</script>

<style>
body {
  background: #000;
}

main {
  background-color: #000;
}
</style>
