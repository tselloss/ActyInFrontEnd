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

<style scoped>
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
  margin-top: auto;
  margin-bottom: auto;
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
  margin-top: auto;
  margin-bottom: auto;
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
  margin-top: 110px;
  z-index: 2;
  margin: 0;
  position: relative;
  margin: 5%;
  left: 45%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

@media (min-width: 1024px) {
  .getStarted {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .getStarted:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .getStarted:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .getStarted:first-of-type:before {
    display: none;
  }

  .getStarted:last-of-type:after {
    display: none;
  }
}
</style>
