<template>
<div class="responsive">



  <h1>Welcome to ACTYIN</h1>
  <div class="responsive">    
  <div class="halfpage">    
  <img src="../assets/basketball.jpg" class="responsivePhoto" width="200" height="200">
</div> 
<ul><button type="submit" class="registerbtn">Join Now</button></ul>
<ul><button type="submit" class="registerbtn">Register</button> </ul>
</div>
<div class="responsive">
  <h1>Get Started</h1>
  <ul>
    <h3>Discover countless activities near you
      and match with compatible partners who share your interests.!
      Don’t just sit there, get active with ActyIn!
    </h3>
  </ul>
</div>

<div class="responsive">
  <h1>Find Your Activity Buddies</h1>
  <ul>
    <h3>No more searching through countless forums and groups for the
      perfect match. Our intelligent algorithm helps you find like-minded
      individuals to join you on your next adventure!
    </h3>
  </ul>
  <div class="halfpage">
    <img src="../assets/pooltable.jpg" class="responsivePhoto" width="200" height="200">
  </div>
</div>


<div class="responsive">
  <h1>Organize Activities Effortlessly</h1>
  <ul>
    <h3>Whether it’s weekend hikes, tennis matches, or 
      group yoga sessions, ActyIn makes it easy to 
      coordinate activities with your new-found friends.
    </h3>
  </ul>
  <div class="halfpage">
    <img src="../assets/hiking.jpg" class="responsivePhoto" width="200" height="200">
  </div>
</div>

































</div>
</template>

<script>
export default {
  
  name: 'HomePage',
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
