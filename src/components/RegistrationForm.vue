<template>
  <div class="container">
    <h1>Make Your Registration Now</h1>
    <hr>

    <label for="username"><b>Username</b></label>
    <input type="text" v-model="input.username" placeholder="Username" name="username-repeat" id="username" required>

    <label for="email"><b>Email</b></label>
    <input type="text" v-model="input.email" placeholder="Enter Email" name="email-repeat" id="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" v-model="input.password" placeholder="Enter Password" name="psw-repeat" id="psw" required>

    <label for="address"><b>Address</b></label>
    <input type="text" v-model="input.address" placeholder="Enter your Address" name="address-repeat" id="address" required>

    <label for="city"><b>City</b></label>
    <input type="text" v-model="input.city" placeholder="Enter your City" name="city" id="city-repeat" required>

    <label for="favoriteActivity"><b>Favorite Activity</b></label>
    <input type="text" v-model="input.favoriteActivity" placeholder="Enter your Favorite Activity" name="favorityActivity-repeat" id="favorityActivity" required>
    <hr>

    <button type="submit" class="registerbtn" @click="register">Register</button>
  </div>
  
  <div class="container signin">
    <p>Already have an account? <router-link to="/login">Sign in</router-link>.</p>
    <p>Would you like to return home? <router-link to="/">Home</router-link>.</p>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  data() {
    return {
      input: {
        username: '',
        email: '',
        password: '',
        address: '',
        city: '',
        favoriteActivity: ''
      }
    };
  },
  methods: {
    async register() {
      try {
        const response = await this.$axios.post('https://localhost:7254/actyin/AthletesComesIn/actyin/registerUser', this.input);

        // Handle the response as needed
        console.log(response.data);

        // Optionally, you can navigate to the login page after successful registration
        // this.$router.push('/login');
      } catch (error) {
        // Handle errors
        console.error('Registration failed:', error);
      }
    }
  }
};
</script>

<style>

.registrationPage {
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

* {
  box-sizing: border-box;
}

/* Add padding to containers */
.container {
  padding: 16px;
  background-color: #000;
}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px 15px 15px 15px;
  border-radius: 10px 10px 10px 10px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
  border-radius: 10px 10px 10px 10px;
  padding: 15px 15px 15px 15px;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit button */
.registerbtn {
  background-color: #0ab3dd;
  color: #fff;
  padding: 16px 20px;
  border-radius: 50px 50px 50px 50px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

.right-placeholder {
  display: flex;
  width: 200px;
  height: 300px;
  position: absolute;
  background-color: #333;
  border-radius: 20px 20px 20px 20px;
  transform: rotate(18deg);
  right: 25%;
  z-index: 1;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 48px;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 2;
  margin-bottom: 20px;
}

.input-container {
  margin: 10px;
}

.buttons {
  display: flex;
}

.buttonSignIn,
.buttonCancel {
  margin: 0 10px;
  padding: 15px 50px;
  cursor: pointer;
  border-radius: 50px;
}

</style>
