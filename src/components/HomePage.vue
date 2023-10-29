<!-- eslint-disable max-len -->
<template>
  <div>
    <div class="home">
      <div class="left-placeholder"></div>
      <h1 class="title">ACTYIN</h1>
      <div class="right-placeholder"></div>
      <div class="home">
        <button class="buttonFindPartners">Find Partners</button>
        <button class="buttonJoinNow">Join Now</button>
      </div>
    </div>

      <div class="getStarted">
        <h1 class="titleGetStarted">Get Started</h1>
        <p class="GetStartedContext1">
          Discover countless activities near you<br />
          and match with compatible partners who share your interests.! <br />
          Don’t just sit there, get active with ActyIn!
        </p>
        <button class="buttonSignUp">Sign Up Now</button>
      </div>

    <div class="findbuddiesBlock">
      <div class="findBuddies">
        <h1 class="titlefindYourActivityBuddies">Find Your Activity Buddies</h1>
        <p class="findYourActivityBuddiesContext1">
          No more searching through countless<br /> forums and groups for the<br />
          perfect match. Our intelligent<br />algorithm helps you find like-minded<br />
          individuals to join you on<br /> your next adventure!
        </p>
      </div>
      <div class="right-placeholderFindyourBuddiesPhoto"></div>
    </div>

    <div class="organizeActivitiesBlock">
      <div class="left-placeholderFindyourBuddiesPhoto"></div>
      <div class="organizeActivities">
        <h1 class="titleOrganizeActivities">Organize Activities <br /> Effortlessly</h1>
        <p class="OrganizeActivitiesContext1">
          Whether it’s weekend hikes, tennis matches, or <br />
          group yoga sessions, ActyIn makes it easy to <br />
          coordinate activities with your new-found friends.
        </p>
      </div>
    </div>

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

    <div class="home">
      <h1 class="titleQuestions">Frequently Asked Questions</h1>
      <h1 class="QuestionsContext1">How does the matching process work?</h1>
      <p class="QuestionsContext3">
        Our intelligent algorithm analyzes your selected<br />
        interests, location, and preferred time to find<br />
        potential activity partners. It then provides you with<br />
        a list of compatible matches to choose from.
      </p>
      <h1 class="QuestionsContext2">Is my personal information safe?</h1>
      <p class="QuestionsContext4">
        At ActyIn, we take your privacy very seriously. Your<br />
        personal information is securely stored and never<br />
        shared with any third parties without your consent.
      </p>
    </div>

    <div class="home">
      <h1 class="titleStayTuned">Stay Updated</h1>
      <h1 class="StayTunedContext1">Be the first to know about new features,special offers</h1>
      <h1 class="StayTunedContext3">and upcoming events. Subscribe to our newsletter now and </h1>
      <h1 class="StayTunedContext3">never miss out on all the ActyIn fun!</h1>
      <input type="email" placeholder="name@email.com" class="email-input" />
      <button class="buttonSubscribe">Subscribe</button>
    </div>

    <div class="home">
      <h1 class="CopyRights">© ActyIn 2023. All rights reserved.</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<style scoped>

@media only screen and (max-width: 768px) {
  .home,
  .findbuddiesBlock,
  .organizeActivitiesBlock {
    height: auto;
  }
}

@media only screen and (max-width: 768px) {
  .right-placeholderPremiumPlan,
  .left-placeholderFeePlan {
    height: auto;
    flex-direction: column;
  }
}

/*ok */
.home {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
  background-color: #000;
  color: #0077cc;
  font-family: 'Limelight', sans-serif;
  overflow: hidden;
}

.planContainer {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 80vh;
  background-color: #000;
  color: #0077cc;
  font-family: 'Limelight', sans-serif;
  overflow: hidden;
  padding: 20px;
}

/*ok */
.findbuddiesBlock {
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

/*ok */
.organizeActivitiesBlock {
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

/*ok */
.organizeActivities {
  position: relative;
  display: block;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: #000;
  color: #0077cc;
  font-family: 'Limelight', sans-serif;
  overflow: hidden;
  margin-top: 0px;
}

/*ok */
.getStarted {
  position: relative;
  display: block;
  align-items: center;
  justify-content: center;
  height: 60vh;
  background-color: #000;
  color: #0077cc;
  font-family: 'Limelight', sans-serif;
  overflow: hidden;
  margin-top: 0px;
}

/*ok */
.findbuddies {
  position: relative;
  display: block;
  align-items: center;
  justify-content: center;
  height: 50vh;
  background-color: #000;
  color: #0077cc;
  font-family: 'Limelight', sans-serif;
  overflow: hidden;
  margin-top: 50px;
}

/*ok */
.right-placeholder {
  width: 300px;
  height: 500px;
  position: absolute;
  background-color: #333;
  border-radius: 20px 20px 20px 20px;
  transform: rotate(18deg);
  right: 12%;
  z-index: 1;
}

/*ok */
.right-placeholderFindyourBuddiesPhoto {
  width: 400px;
  height: 400px;
  background-color: #333;
  border-radius: 70px 70px 70px 70px;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: right;
  margin-left: 10%;
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

/*ok */
.left-placeholderFindyourBuddiesPhoto {
  width: 400px;
  height: 350px;
  background-color: #333;
  border-radius: 150px 70px 70px 70px;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  margin-right: 15%;
  margin-left: 10%;
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
.left-placeholder {
  width: 300px;
  height: 500px;
  position: absolute;
  background-color: #333;
  border-radius: 20px 20px 20px 20px;
  transform: rotate(-18deg);
  left: 12%;
  z-index: 1;
}

/*ok */
.title {
  position: absolute;
  font-size: 94px;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 2;
  top: 50%;
  width: 100%;
  text-align: center;
  vertical-align:top;
  margin-top: -150px;
  z-index: 2;
}

.titleQuestions
{
  font-size: 3em;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 2;
  margin-top: 200px;
}

.titleStayTuned{
  font-size: 3em;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 2;
  margin-top: 200px;
}

/*ok */
.titleGetStarted {
  font-size: 3em;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.titlefindYourActivityBuddies {
  font-size: 2.5em;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: left;
  align-items: left;
  justify-content: left;
}

.titleOrganizeActivities {
  font-size: 2.5em;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: left;
  align-items: left;
  justify-content: left;
  margin-top: 50%;
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
.OrganizeActivitiesContext1 {
  font-size: 25px;
  margin: 0;
  color: #457B9D;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: left;
  align-items: left;
  justify-content: left;
  font-weight: 400;
}

.OrganizeActivitiesContext2 {
  font-size: 18px;
  margin: 0;
  color: #457B9D;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
}

.StayTunedContext1 {
  font-size: 18px;
  margin: 0;
  color: #457B9D;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
}

/*ok */
.findYourActivityBuddiesContext1 {
  font-size: 25px;
  margin: 0;
  color: #457B9D;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: left;
  align-items: left;
  justify-content: left;
  font-weight: 400;
}

/*ok */
.GetStartedContext1 {
  font-size: 30px;
  margin: 0;
  color: #457B9D;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 400;
}

.QuestionsContext1
{
  font-size: 22px;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
}

.QuestionsContext2
{
  font-size: 22px;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 2;
}

.QuestionsContext3 {
  font-size: 22px;
  margin: 0;
  color: #457B9D;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
}

.QuestionsContext4 {
  font-size: 22px;
  margin: 0;
  color: #457B9D;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
}

.CopyRights
{
  font-size: 18px;
  margin: 0;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: left;
  align-items: left;
  justify-content: left;
}

.buttons {
  display: flex;
  margin-top: 300px;
  margin-left: -800px;
}

/*ok */
.buttonFindPartners {
  margin: 0 10px; /* Adjust the spacing between buttons as needed */
  padding: 15px 50px;
  background-color: #1D3557;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 50px 50px 50px 50px;
  margin-top: 30%;
  z-index: 2;
}

/*ok */
.buttonJoinNow {
  margin: 0 10px; /* Adjust the spacing between buttons as needed */
  padding: 15px 50px;
  background-color: #0ab3dd;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 50px 50px 50px 50px;
  margin-top: 30%;
  z-index: 2;
}

/*ok */
.buttonSignUp {
  margin: 0 10px; /* Adjust the spacing between buttons as needed */
  padding: 15px 50px;
  background-color: #1D3557;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 50px 50px 50px 50px;
  margin-top: 40px;
  z-index: 2;
  margin: 0;
  position: relative;
  margin: 5%;
  left: 45%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
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

.buttonSubscribe{
  margin: 0 10px; /* Adjust the spacing between buttons as needed */
  padding: 15px 50px;
  background-color: #f7eff0;
  color: #000000;
  border: none;
  cursor: pointer;
  border-radius: 10px 10px 10px 10px;
  z-index: 2;
}

.email-input {
  margin: 0 10px; /* Adjust the spacing between buttons as needed */
  padding: 15px 50px;
  background-color: #f7eff0;
  color: #000000;
  border: none;
  cursor: pointer;
  border-radius: 10px 10px 10px 10px;
  margin-top: 50px;
  margin-left: 200px;
  z-index: 2;
}

</style>
