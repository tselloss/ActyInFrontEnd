<!-- eslint-disable max-len -->
<template>
  <div>
  <div class="GetStartedHomePage">
      <div class="getStarted">
        <h1 class="titleGetStarted">Get Started</h1>
        <p class="GetStartedContext1">
          Discover countless activities near you<br />
          and match with compatible partners who share your interests.! <br />
          Don’t just sit there, get active with ActyIn!
        </p>
        <button class="buttonSignUp">Sign Up Now</button>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'GetStartedHomePage',
  props: {
    msg: String,
  },
};
</script>

<style scoped>

@media only screen and (max-width: 768px) {
  .getStarted {
    height: auto;
    flex-direction: column;
  }
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
  margin-top: 10%;
}

/*ok */
.titleGetStarted {
  font-size: 2.5em;
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

.GetStartedContext1 {
  font-size: 22px;
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

.buttons {
  display: flex;
  margin-top: 300px;
  margin-left: -800px;
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
</style>
