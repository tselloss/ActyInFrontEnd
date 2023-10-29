<template>
  <main>
  <HomePage />
  <LoginForm />
  </main>
</template>

<script>
import HomePage from './components/HomePage.vue';
import LoginForm from './components/LoginForm.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    LoginForm,
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
