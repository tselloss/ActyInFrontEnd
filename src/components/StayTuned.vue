<template>
<div class="responsive">
<div class="responsive">
  <h1>StayTuned</h1>
  <ul>
    <h3>Be the first to know about new features,special offers and upcoming events. Subscribe to our newsletter now and never miss out on all the ActyIn fun!
    </h3>
  </ul>
  <ul>
    <li><input type="email" placeholder="name@email.com" class="email-input" /></li>
  </ul>
  <ul>
    <li><button class="buttonSubscribe">Subscribe</button></li>
  </ul>
</div>
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
.responsive {
  width: 100%;
  height: auto;
  background-color: black;
  margin-top: 7%;
}


.responsivePhoto {
  width: 80%;
  height: auto;
  background-color: black;
  border-radius: 70px 70px 70px 70px;
}

.halfpage{
  width: 50%;
  height: auto;
  background-color: black;
  align-items: center;
  margin-left: 25%;
  z-index: 1;
  padding-block-end: 5%;
}

.email-input {
  margin: 10px 0; /* Adjust the spacing between buttons as needed */
  padding: 15px 50px;
  background-color: #f7eff0;
  color: #000000;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  z-index: 2;
}

.buttonSubscribe {
  margin: 10px 0; /* Adjust the spacing between buttons as needed */
  padding: 15px 50px;
  background-color: #f7eff0;
  color: #000000;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  z-index: 2;
  margin-top: -10%;
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
  margin-top: -10px;
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
