<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #457B9D;
}

nav {
  background-color: #000;
  color: #0077cc;
  font-style: italic;
  padding: 15px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #457B9D;
  text-decoration: none;
  margin: 0 15px;
}

nav a:hover {
  color: white;
}

nav a.router-link-exact-active {
  color: white;
}
</style>
