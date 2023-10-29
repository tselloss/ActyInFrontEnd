<template>
  <div class="loginPage">
   <div class="left-placeholder"></div>
  <h1 class="title">Weclome to ActyIn</h1>
  <div class="right-placeholder"></div>
    <input type="username" placeholder="Username" class="username-input" />
    <input type="email" placeholder="name@email.com" class="email-input" />
    <input type="password" placeholder="Enter your Pass" class="password-input" />
    <button class="buttonSignIn">SignIn</button>
    <button class="buttonCancel">Cancel</button>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  props: {
    msg: String,
  },
};
</script>

<style scoped>

.loginPage {
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
  width: 200px;
  height: 300px;
  position: absolute;
  background-color: #333;
  border-radius: 20px 20px 20px 20px;
  transform: rotate(18deg);
  right: 25%;
  z-index: 1;
}

.left-placeholder {
  width: 200px;
  position: absolute;
  height: 300px;
  background-color: #333;
  border-radius: 20px 20px 20px 20px;
  transform: rotate(-18deg);
  left: 25%;
  z-index: 1;
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
  margin-top: -150px;
  z-index: 2;
}

.buttons {
  display: flex;
  margin-top: 300px;
  vertical-align:bottom;
  z-index: 2;
}

.buttonSignIn {
  position: absolute;
  margin: 0 10px; /* Adjust the spacing between buttons as needed */
  padding: 15px 50px;
  background-color: #0ab3dd;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 50px 50px 50px 50px;
  vertical-align:top;
  margin-top: 350px;
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
  margin-top: 450px;
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
  margin-top: 50px;
  margin-bottom: 50px;
  vertical-align:bottom;
  margin-top: 50px;
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
  margin-top: 0px;
  margin-bottom: 50px;
  vertical-align:top;
  margin-top: 150px;
  z-index: 2;
}

.password-input {
  position: absolute;
  margin: 10 10px; /* Adjust the spacing between buttons as needed */
  padding: 15px 50px;
  background-color: #f7eff0;
  color: #000000;
  border: none;
  cursor: pointer;
  border-radius: 10px 10px 10px 10px;
  margin-top: 50px;
  margin-bottom: 50px;
  vertical-align:bottom;
  margin-top: 250px;
  z-index: 2;
}

</style>
