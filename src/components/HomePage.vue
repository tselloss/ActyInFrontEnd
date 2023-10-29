<template>
  <div class="home">
   <div class="left-placeholder"></div>
    <h1 class="title">ACTYIN</h1>
    <div class="right-placeholder"></div>
    <div class="home">
      <button class="buttonFindPartners">Find Partners</button>
      <button class="buttonJoinNow">Join Now</button>
  </div>
  </div>
  <div class="home">
    <h1 class="titleGetStarted">Get Started</h1>
    <h1 class="GetStartedContext1">Discover countless activities near you
       and match with compatible</h1>
    <h1 class="GetStartedContext3">partners who share your interests.!</h1>
    <h1 class="GetStartedContext3">Don’t just sit there, get active with ActyIn!</h1>
    <button class="buttonSignUp">Sign Up Now</button>
  </div>
  <div class="home">
    <h1 class="titlefindYourActivityBuddies">Find Your Activity Buddies</h1>
    <h1 class="findYourActivityBuddiesContext1">No more searching through countless forums and</h1>
    <h1 class="findYourActivityBuddiesContext2"> groups for the perfect match. Our intelligent</h1>
<h1 class="findYourActivityBuddiesContext2">algorithm helps you find like-minded individuals to</h1>
  <h1 class="findYourActivityBuddiesContext2">join you on your next adventure!</h1>
  <div class="right-placeholderFindyourBuddiesPhoto"></div>
  </div>
   <div class="home">
    <h1 class="titleOrganizeActivities">Organize Activities <br> Effortlessly</h1>
    <h1 class="OrganizeActivitiesContext1">Whether it’s weekend hikes, tennis matches, or</h1>
    <h1 class="OrganizeActivitiesContext2"> group yoga sessions, ActyIn makes it easy to </h1>
  <h1 class="OrganizeActivitiesContext2">coordinate activities with your new-found friends.</h1>
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
    <div>
    <h1 class="titleQuestions">Frequently Asked Questions</h1>
    <h1 class="QuestionsContext1">How does the matching process work?</h1>
    <h1 class="QuestionsContext3">Our intelligent algorithm analyzes your selected</h1>
    <h1 class="QuestionsContext3">interests, location, and preferred time to find</h1>
    <h1 class="QuestionsContext3"> potential activity partners. It then provides you with</h1>
    <h1 class="QuestionsContext3">a list of compatible matches to choose from.</h1>
    <h1 class="QuestionsContext2">Is my personal information safe?</h1>
    <h1 class="QuestionsContext4">At ActyIn, we take your privacy very seriously. Your </h1>
    <h1 class="QuestionsContext4">personal information is securely stored and never</h1>
    <h1 class="QuestionsContext4">shared with any third parties without your consent.</h1>
  </div>
  <div>
    <h1 class="titleStayTuned">Stay Updated</h1>
    <h1 class="StayTunedContext1">Be the first to know about new features,special offers</h1>
    <h1 class="StayTunedContext3">and upcoming events. Subscribe to our newsletter now and </h1>
    <h1 class="StayTunedContext3">never miss out on all the ActyIn fun!</h1>
    <input type="email" placeholder="name@email.com" class="email-input" />
    <button class="buttonSubscribe">Subscribe</button>
  </div>
  <div>
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

.home {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
  color: #0077cc;
  font-family: 'Limelight', sans-serif;
  overflow: hidden;
}

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
  margin-top: -450px;
  margin-left: 900px;
}

.right-placeholderPremiumPlan {
  width: 600px;
  height: 430px;
  background-color: #131010;
  border-radius: 70px 70px 70px 70px;
  z-index: 1;
  margin-top: -430px;
  margin-left: 900px;
}

.left-placeholderFindyourBuddiesPhoto {
  width: 600px;
  height: 600px;
  background-color: #333;
  border-radius: 300px 70px 70px 70px;
  z-index: 1;
  margin-top: -400px;
  margin-left: 200px;
}

.left-placeholderFeePlan {
  width: 600px;
  height: 430px;
  background-color: #131010;
  border-radius: 70px 70px 70px 70px;
  z-index: 1;
  margin-top: 150px;
  margin-left: 200px;
}

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

.title {
  position: absolute;
  font-size: 150px;
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
  margin-left: 0px;
  margin-top: 200px;
}

.titleStayTuned{
  font-size: 3em;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 2;
  margin-left: 0px;
  margin-top: 200px;
}

.titleGetStarted {
  font-size: 3em;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 2;
  margin-left: 800px;
}

.titlefindYourActivityBuddies {
  font-size: 3em;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 2;
  margin-left: 0px;
  margin-top: 400px;
}

.titleOrganizeActivities {
  font-size: 3em;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 2;
  margin-left: 1000px;
  margin-top: 400px;
}

.titleFreePlan {
  font-size: 28px;
  margin: 0;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
  margin-left: 50px;
  margin-top: 200px;
}

.titlePremiumPlan {
  font-size: 28px;
  margin: 0;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  z-index: 1;
  margin-left: 50px;
  margin-top: -100px;
}

.planPrice {
  font-size: 48px;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 1;
  margin-left: 50px;
  margin-top: 30px;
}

.planInfo {
  font-size: 20px;
  margin: 0;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
  margin-left: 100px;
  margin-top: 30px;
}

.OrganizeActivitiesContext1 {
  font-size: 18px;
  margin: 0;
  color: #457B9D;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
  margin-top: 30px;
  margin-left: 1000px;
}

.OrganizeActivitiesContext2 {
  font-size: 18px;
  margin: 0;
  color: #457B9D;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
  margin-left: 1000px;
}

.StayTunedContext1 {
  font-size: 18px;
  margin: 0;
  color: #457B9D;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
  margin-top: 30px;
  margin-left: 500px;
}

.StayTunedContext3{
  font-size: 18px;
  margin: 0;
  color: #457B9D;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
  margin-left: 500px;
}

.findYourActivityBuddiesContext1 {
  font-size: 18px;
  margin: 0;
  color: #457B9D;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
  margin-top: 30px;
}

.findYourActivityBuddiesContext2{
  font-size: 18px;
  margin: 0;
  color: #457B9D;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
}

.GetStartedContext1 {
  font-size: 18px;
  margin: 0;
  color: #457B9D;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
  margin-top: 30px;
  margin-left: 500px;
}

.GetStartedContext2 {
  font-size: 18px;
  margin: 0;
  color: #457B9D;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
  margin-left: 500px;
}

.GetStartedContext3 {
  font-size: 18px;
  margin: 0;
  color: #457B9D;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
  margin-left: 500px;
}

.QuestionsContext1
{
  font-size: 22px;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 2;
  margin-top: 60px;
  margin-left: 300px;
}

.QuestionsContext2
{
  font-size: 22px;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 2;
  margin-top: -140px;
  margin-left: 1000px;
}

.QuestionsContext3 {
  font-size: 22px;
  margin: 0;
  color: #457B9D;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
  margin-left: 300px;
}

.QuestionsContext4 {
  font-size: 22px;
  margin: 0;
  color: #457B9D;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
  margin-left: 1000px;
}

.CopyRights
{
  font-size: 18px;
  margin: 0;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
  margin-top: 100px;
  margin-left: 100px;
}

.buttons {
  display: flex;
  margin-top: 300px;
  margin-left: -800px;
}

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

.buttonSignUp {
  margin: 0 10px; /* Adjust the spacing between buttons as needed */
  padding: 15px 50px;
  background-color: #1D3557;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 50px 50px 50px 50px;
  margin-top: 30px;
  margin-left: 400px;
  z-index: 2;
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
  margin-top: 50px;
  margin-left: 200px;
  z-index: 2;
}

.buttonSubscribe{
  margin: 0 10px; /* Adjust the spacing between buttons as needed */
  padding: 15px 50px;
  background-color: #f7eff0;
  color: #000000;
  border: none;
  cursor: pointer;
  border-radius: 10px 10px 10px 10px;
  margin-top: 50px;
  margin-left: 20px;
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
