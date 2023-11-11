<template>
<div class="responsive">
  <h1>Frequently Asked Questions</h1>
  <h3>How does the matching process work?</h3>
  <ul>
    <h4>Our intelligent algorithm analyzes your selected
      interests, location, and preferred time to find
      potential activity partners. It then provides youwith
      a list of compatible matches to choose from.
    </h4>
  </ul>
  <h3>Is my personal information safe?</h3>
  <ul>
    <h4>At ActyIn, we take your privacy very seriously. Your
      personal information is securely stored and never
      shared with any third parties without your consent.
    </h4>
  </ul>
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
  margin-block-start: 7%;
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

h2 {
  margin: 40px 0 0;
  background-color: black;
  font-weight: bold;
  font-family: 'Limelight', sans-serif;
}
h3 {
  margin: 40px 0 0;
  background-color: black;
  font-family: 'Limelight', sans-serif;
}
h4 {
  margin: 40px 0 0;
  background-color: black;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin-top: -5px;
}
h5 {
  margin: 40px 0 0;
  background-color: black;
  font-weight: bold;
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
