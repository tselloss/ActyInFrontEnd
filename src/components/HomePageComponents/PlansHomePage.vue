<!-- eslint-disable max-len -->
<template>
  <div class="PlansHomePage">
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
        <button class="buttonPlansGetStarted">Get Started</button>
      </div>

      <!-- Premium Plan -->
      <div class="planBlock right-placeholderPremiumPlan">
        <h1 class="titlePremiumPlan">Premium Plan</h1>
        <h1 class="planPrice">$9.99/mo</h1>
        <h1 class="planInfo">
          Advanced Matching <br />
          Unlimited Activities <br />
          Priority Support<br />
        </h1>
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

@media only screen and (max-width: 770px) {
  .planContainer {
    flex-direction: column; /* Stack items vertically on smaller screens */
  }
}

.planContainer {
  display: flex;
  justify-content: space-around;
  position: relative;
  display: flex;
  flex-direction: center;
  align-items: left;
  justify-content: left;
}

.planBlock {
  width: 250px; /* Adjust the width as needed */
  height: 300px; /* Adjust the height as needed */
  background-color: #131313;
  border-radius: 20px;
  flex: 1;
  padding: 10px;
  text-align: left;
  margin-top: 10%;
  display: block;
  flex-direction: left;
  align-items: left;
  justify-content: left;
  margin-right: 10%;
  margin-left: 10%;
}

.right-placeholderPremiumPlan {
  width: 250px;
  height: 300px;
  background-color: #131313;
  border-radius: 20px 20px 20px 20px;
  right: 12%;
  z-index: 2;
  flex: 1;
  padding: 10px;
  text-align: left;
  margin-top: 10%;
  display: block;
  flex-direction: left;
  align-items: left;
  justify-content: left;
}

.left-placeholderFeePlan {
  width: 250px;
  height: 300px;
  background-color: #131313;
  border-radius: 20px 20px 20px 20px;
  left: 12%;
  z-index: 1;
  flex: 1;
  padding: 10px;
  text-align: left;
  display: block;
  flex-direction: left;
  align-items: left;
  justify-content: left;
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
  margin-top: 5%;
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
  margin-top: 15px;
  margin-left: 15%;
}

</style>
