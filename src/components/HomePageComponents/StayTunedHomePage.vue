<!-- eslint-disable max-len -->
<template>
  <div>
    <div class="StayTunedHomePage">
    <div class="home">
      <h1 class="titleStayTuned">Stay Updated</h1>
      <h1 class="StayTunedContext1">Be the first to know about new features,special offers <br>and upcoming events. Subscribe to our newsletter now and <br> never miss out on all the ActyIn fun!
      </h1>
      <input type="email" placeholder="name@email.com" class="email-input" />
      <button class="buttonSubscribe">Subscribe</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StayTunedHomePage',
  props: {
    msg: String,
  },
};
</script>

<style scoped>

@media only screen and (max-width: 768px) {
  .home {
    height: auto;
    flex-direction: column;
  }
}

/*ok */
.home {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  background-color: #000;
  color: #0077cc;
  font-family: 'Limelight', sans-serif;
  overflow: hidden;
  margin-top: 0;
}

.titleStayTuned{
  font-size: 3em;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 2;
  position: relative;
}

.StayTunedContext1 {
  font-size: 18px;
  margin: 0;
  color: #457B9D;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
  position: relative;
}

.buttonSubscribe,
.email-input {
  margin: 10px 0; /* Adjust the spacing between buttons as needed */
  padding: 15px 50px;
  background-color: #f7eff0;
  color: #000000;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  z-index: 2;
}

</style>
