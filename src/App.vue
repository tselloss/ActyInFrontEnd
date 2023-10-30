<template>
  <main>
  <HomePage />
  <LoginForm />
  <RegistrationForm />
  </main>
</template>

<script>
import HomePage from './components/HomePage.vue';
import LoginForm from './components/LoginForm.vue';
import RegistrationForm from './components/RegistrationForm.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    LoginForm,
    RegistrationForm,
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
