<script setup>
import LoginItem from '../components/LoginItem.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <LoginItem />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
