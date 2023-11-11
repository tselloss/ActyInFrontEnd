<template>
<div class="responsive">
<div class="halfpage">
  <div class="planContainer">
    <div class="planBlock left-placeholderFeePlan">
      <div>
        <h1 class="titleFreePlan">Free Plan</h1>
      </div>
      <h1 class="planPriceFree">$0/mo</h1>
      <h1 class="planInfo">
        Basic Matching<br />
        Activities<br />
        Email Support
      </h1>
     
    </div>
</div>
</div>
<router-link to="/login">
  <ul><button class="buttonPlansGetStarted">Get Started</button></ul> 
</router-link>
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

.planContainer {
  width: 100%;  
  background-color: #313030;
  border-radius: 20px 20px 20px 20px;
}

.planBlock {
  background-color: #313030;
  border-radius: 20px;
  flex: 1;
  text-align: left;
  display: block;
  flex-direction: left;
  align-items: left;
  justify-content: left;
  background-color: #131313;
  border-radius: 20px 20px 20px 20px;
}

.left-placeholderFeePlan {
  background-color: #313030;
  border-radius: 20px 20px 20px 20px;
  z-index: 1;
  flex: 1;
  text-align: left;
  display: block;
  flex-direction: left;
  align-items: left;
  justify-content: left;
}


/*ok */
.titleFreePlan {
  font-size: 18px;
  margin: 0;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: right;
  align-items: left;
  justify-content: left;
  background-color: #313030;
}

/*ok */
.planPriceFree {
  font-size: 36px;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: right;
  align-items: left;
  justify-content: left;
  background-color: #313030;
}

/*ok */
.planInfo {
  font-size: 20px;
  margin: 0;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: right;
  align-items: left;
  justify-content: left;
  background-color: #313030;
}

.buttonPlansGetStarted,
.buttonUpgrade{
  margin: 0 10px; /* Adjust the spacing between buttons as needed */
  padding: 15px 70px;
  background-color: #E63946;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 10px 10px 10px 10px;
  margin-left:15% ;
  margin-right:15% ;
  margin-top: -60px;
  z-index: 2;
}

.halfpage{
  width: 50%;
  height: auto;
  background-color: black;
  align-items: center;
  margin-left: 25%;
  margin-top: 15%;
  border-radius: 30px 30px 30px 30px;
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
