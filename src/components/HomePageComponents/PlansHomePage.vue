<!-- eslint-disable max-len -->
<template>
<div class="PlansHomePage">
    <div class="planContainer">
      <div class="left-placeholderFeePlan">
      <div><h1 class="titleFreePlan">Free Plan</h1></div>
        <h1 class="planPriceFree">$0/mo<p></p></h1>
        <h1 class="planInfo">Basic Matching<br />Activities<br />Email Support</h1>
        <button class="buttonPlansGetStarted">Get Started</button>
      </div>
      <div class="right-placeholderPremiumPlan">
        <h1 class="titlePremiumPlan">Premium Plan<p></p></h1>
        <h1 class="planPrice">$9.99/mo<p></p></h1>
        <h1 class="planInfo">Advanced Matching <br /> Unlimited Activities <br /> Priority Support<br /></h1>
        <button class="buttonUpgrade">Upgrade Now</button>
      </div>
      </div>
      </div>
</template>

<script>
export default {
  name: 'PlansHomePage',
  props: {
    msg: String,
  },
};
</script>

<style scoped>

@media only screen and (max-width: 768px) {
  .planContainer {
    height: auto;
    flex-direction: column;
  }
}

.planContainer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: #000;
  color: #0077cc;
  font-family: 'Limelight', sans-serif;
  overflow: hidden;
  margin-top: -10%;
}

.right-placeholderPremiumPlan {
  width: 300px;
  height: 320px;
  position: absolute;
  background-color: #131313;
  border-radius: 20px 20px 20px 20px;
  right: 12%;
  z-index: 1;
  flex: 1;
  padding: 10px;
  text-align: left;
}

.left-placeholderFeePlan {
  width: 300px;
  height: 320px;
  position: absolute;
  background-color: #131313;
  border-radius: 20px 20px 20px 20px;
  left: 12%;
  z-index: 1;
  flex: 1;
  padding: 10px;
  text-align: left;
}

/*ok */
.titleFreePlan {
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
}
/*ok */
.titlePremiumPlan {
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
}
/*ok */
.planPrice {
  font-size: 40px;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: right;
  align-items: left;
  justify-content: left;
}
/*ok */
.planPriceFree {
  font-size: 40px;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: right;
  align-items: left;
  justify-content: left;
  margin-top: 5%;
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
  margin-top: 7%;
}

/*ok */
.buttonPlansGetStarted,
.buttonUpgrade{
  margin: 0 10px; /* Adjust the spacing between buttons as needed */
  padding: 15px 70px;
  background-color: #E63946;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 10px 10px 10px 10px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15%;
  margin-left: 15%;
}

</style>
