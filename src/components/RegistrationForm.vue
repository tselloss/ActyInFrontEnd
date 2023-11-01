<template>
  <div class="registerPage">
    <h1 class="title">Make Your Registration Now</h1>
    <input type="username" placeholder="Username" class="username-input" />
    <input type="email" placeholder="name@email.com" class="email-input" />
    <input type="password" placeholder="Enter your Pass" class="password-input" />
    <input type="address" placeholder="Enter your Address" class="address-input" />
    <input type="City" placeholder="Enter your City" class="city-input" />
    <input type="FavoriteActivity" placeholder="Enter your Fav Act" class="favAct-input" />
    <button class="buttonSignUp">SignUp</button>
    <button class="buttonCancel">Cancel</button>
  </div>
</template>

<script>

export default {
  name: 'RegistrationForm',
  props: {
    msg: String,
  },
};
</script>

<style scoped>

.registerPage {
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

.title {
  position: absolute;
  font-size: 48px;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 2;
  top: 50%;
  width: 100%;
  text-align: center;
  vertical-align:top;
  margin-top: -300px;
  z-index: 2;
}

.email-input {
  position: absolute;
  margin: 0 10px;
  padding: 15px 50px;
  background-color: #f7eff0;
  color: #000000;
  border: none;
  cursor: pointer;
  border-radius: 10px 10px 10px 10px;
  margin-top: -100px;
  text-align: left;
  z-index: 2;
}

.username-input {
  position: absolute;
  margin: 10 10px;
  padding: 15px 50px;
  background-color: #f7eff0;
  color: #000000;
  border: none;
  cursor: pointer;
  border-radius: 10px 10px 10px 10px;
  margin-top: -200px;
  vertical-align:top;
  z-index: 2;
}

.password-input {
  position: absolute;
  margin: 10 10px;
  padding: 15px 50px;
  background-color: #f7eff0;
  color: #000000;
  border: none;
  cursor: pointer;
  border-radius: 10px 10px 10px 10px;
  margin-top: 00px;
  vertical-align:top;
  z-index: 2;
}

.city-input {
  position: absolute;
  margin: 10 10px;
  padding: 15px 50px;
  background-color: #f7eff0;
  color: #000000;
  border: none;
  cursor: pointer;
  border-radius: 10px 10px 10px 10px;
  margin-top: 100px;
  vertical-align:top;
  z-index: 2;
}

.address-input {
  position: absolute;
  margin: 10 10px;
  padding: 15px 50px;
  background-color: #f7eff0;
  color: #000000;
  border: none;
  cursor: pointer;
  border-radius: 10px 10px 10px 10px;
  margin-top: 200px;
  vertical-align:top;
  z-index: 2;
}

.favAct-input {
  position: absolute;
  margin: 10 10px;
  padding: 15px 50px;
  background-color: #f7eff0;
  color: #000000;
  border: none;
  cursor: pointer;
  border-radius: 10px 10px 10px 10px;
  margin-top: 300px;
  vertical-align:top;
  z-index: 2;
}

.buttons {
  display: flex;
  margin-top: 300px;
  vertical-align:bottom;
  z-index: 2;
}

.buttonSignUp {
  position: absolute;
  margin: 0 10px; /* Adjust the spacing between buttons as needed */
  padding: 15px 50px;
  background-color: #0ab3dd;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 50px 50px 50px 50px;
  vertical-align:top;
  margin-top: 450px;
  z-index: 2;
}

.buttonCancel {
  margin: 0 10px; /* Adjust the spacing between buttons as needed */
  padding: 15px 50px;
  background-color: #1D3557;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 50px 50px 50px 50px;
  margin-top: 30px;
  vertical-align:bottom;
  margin-top: 550px;
  z-index: 2;
}

@media (min-width: 1024px) {
  .registerPage {
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

  .registerPage:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: flex;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .registerPage:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: flex;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .registerPage:first-of-type:before {
    display: none;
  }

  .registerPage:last-of-type:after {
    display: none;
  }
}
</style>
