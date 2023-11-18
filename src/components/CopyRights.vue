<template>
<div class="halfpage">
  <h3>© ActyIn 2023. All rights reserved.</h3>
</div>
</template>

<script>
export default {
  
  name: 'GetStarted',
  props: {
    msg: String
  }
}

</script>

<style scoped>

.halfpage{
  width: 50%;
  height: auto;
  background-color: black;
  align-items: left;
  z-index: 1;
  padding-block-end: 5%;
}

h1 {
  margin: 0 0 0;
  background-color: black;
  font-family: 'Limelight', sans-serif;
  padding-top: 20px;
}
h3 {
  margin: 40px 0 0;
  background-color: black;
  font-family: 'Roboto', sans-serif;
  color: #fff;
}

h5 {
  margin: 40px 0 0;
  background-color: black;
  font-family: 'Roboto', sans-serif;
}
ul {
  list-style-type: none;
  padding: 0;
  margin-left: 15%;
  margin-right: 15%;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
