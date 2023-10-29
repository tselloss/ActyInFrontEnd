<!-- eslint-disable max-len -->
<template>
  <div class="home">
   <div class="left-placeholder"></div>
    <h1 class="title" >ACTYIN</h1>
    <div class="right-placeholder"></div>
    <div class="home">
      <button class="buttonFindPartners">Find Partners</button>
      <button class="buttonJoinNow">Join Now</button>
  </div>
  </div>
  <div class="home">
  <div class="getStarted">
    <h1 class="titleGetStarted">Get Started</h1>
    <p class="GetStartedContext1">Discover countless activities near you<br>and match with compatible partners who share your interests.!
    <br>Don’t just sit there, get active with ActyIn!</p>
    <button class="buttonSignUp">Sign Up Now</button>
  </div>
  </div>
  <div class="home">
  <div class="findBuddies">
    <h1 class="titlefindYourActivityBuddies">Find Your Activity Buddies</h1>
    <p class="findYourActivityBuddiesContext1">No more searching through countless forums and
    <br>groups for the perfect match. Our intelligent
    <br>algorithm helps you find like-minded individuals to
    <br>join you on your next adventure!
    </p>
  </div>
  <div class="right-placeholderFindyourBuddiesPhoto"></div>
  </div>
   <div class="home">
    <h1 class="titleOrganizeActivities">Organize Activities <br> Effortlessly</h1>
    <p class="OrganizeActivitiesContext1">Whether it’s weekend hikes, tennis matches, or
    <br>group yoga sessions, ActyIn makes it easy to
    <br>coordinate activities with your new-found friends.</p>
  <div class="left-placeholderFindyourBuddiesPhoto"></div>
  </div>
   <div class="home">
    <div class="left-placeholderFeePlan">
    <h1 class="titleFreePlan">Free Plan</h1>
    <h1 class="planPrice">$0/mo<p></p></h1>
    <h1 class="planInfo">Basic Matching
<p></p>
Limited Activities
<p></p>
Email Support<p></p></h1>
<button class="buttonPlansGetStarted">Get Started</button>
    </div>
    <div class="right-placeholderPremiumPlan">
    <h1 class="titlePremiumPlan">Premium Plan<p></p></h1>
    <h1 class="planPrice">$9.99/mo<p></p></h1>
    <h1 class="planInfo">Advanced Matching
<p></p>
Unlimited Activities
<p></p>
Priority Support<p></p></h1>
<button class="buttonUpgrade">Upgrade Now</button>
    </div>
    </div>
    <div class="home">
    <h1 class="titleQuestions">Frequently Asked Questions</h1>
    <h1 class="QuestionsContext1">How does the matching process work?</h1>
    <p class="QuestionsContext3">Our intelligent algorithm analyzes your selected
    <br>interests, location, and preferred time to find
    <br>potential activity partners. It then provides you with
    <br>a list of compatible matches to choose from.</p>
    <h1 class="QuestionsContext2">Is my personal information safe?</h1>
    <p class="QuestionsContext4">At ActyIn, we take your privacy very seriously. Your
    <br>personal information is securely stored and never
    <br>shared with any third parties without your consent.</p>
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

/*ok */
.home {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 77vh;
  background-color: #000;
  color: #0077cc;
  font-family: 'Limelight', sans-serif;
  overflow: hidden;
}

/*ok */
.getStarted {
  position: relative;
  display: block;
  align-items: center;
  justify-content: center;
  height: 50vh;
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
  height: 100vh;
  background-color: #000;
  color: #0077cc;
  font-family: 'Limelight', sans-serif;
  overflow: hidden;
  margin-top: 0px;
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

.right-placeholderFindyourBuddiesPhoto {
  width: 600px;
  height: 600px;
  background-color: #333;
  border-radius: 70px 70px 70px 70px;
  z-index: 1;
}

.right-placeholderPremiumPlan {
  width: 300px;
  height: 400px;
  position: absolute;
  background-color: #131313;
  border-radius: 20px 20px 20px 20px;
  right: 12%;
  z-index: 1;
}

.left-placeholderFindyourBuddiesPhoto {
  width: 600px;
  height: 600px;
  background-color: #333;
  border-radius: 300px 70px 70px 70px;
  z-index: 1;
}

.left-placeholderFeePlan {
  width: 300px;
  height: 400px;
  position: absolute;
  background-color: #131313;
  border-radius: 20px 20px 20px 20px;
  left: 12%;
  z-index: 1;
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
  font-size: 100px;
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
  font-size: 3em;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 2;
}

.titleFreePlan {
  font-size: 28px;
  margin: 0;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
}

.titlePremiumPlan {
  font-size: 28px;
  margin: 0;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  z-index: 1;
}

.planPrice {
  font-size: 48px;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 1;
}

.planInfo {
  font-size: 20px;
  margin: 0;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
}

.OrganizeActivitiesContext1 {
  font-size: 20px;
  margin: 0;
  color: #457B9D;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
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
  font-weight: 600;
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
  font-weight: 600;
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
  margin: 10%;
  left: 40%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
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
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
