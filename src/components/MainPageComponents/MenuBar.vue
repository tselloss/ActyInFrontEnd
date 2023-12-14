<template>
<div class="responsive">  
  <div class="topnav">
    <a class="active" href="/main#/">Home</a>
    <a href="/main#/main">Select Date</a>
    <a href="/main#/about">Contact</a>
    <a href="/main#/about" class="split">Help</a>
  </div>
</div>  
</template>

<script>
export default {  
  name: 'MainPage',
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
  color: #acb3af;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #272727;
}

.topnav a {
  float: left;
  color: #457B9D;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 19px;
}

.topnav a:hover {
  background-color: #457B9D;
  color: black;
}

/* Create a right-aligned (split) link inside the navigation bar */
.topnav a.split {
  float: right;
  background-color: #4e5250;
  color: white;
}
</style>
