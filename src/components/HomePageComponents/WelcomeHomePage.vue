<template>
<div class="WelcomeHomePage">
 <div class="home">
      <div class="left-placeholder"></div>
      <h1 class="title">ACTYIN</h1>
      <div class="right-placeholder"></div>
      <div class="home">
        <button class="buttonFindPartners">Find Partners</button>
        <button class="buttonJoinNow">Join Now</button>
      </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'WelcomeHomePage',
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
  align-items: center;
  justify-content: center;
  height: 75vh;
  background-color: #000;
  color: #0077cc;
  font-family: 'Limelight', sans-serif;
  overflow: hidden;
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

</style>
