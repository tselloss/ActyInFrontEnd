<template>
  <div class="container">    
    <UploadPhoto></UploadPhoto>       
    <hr>
    <BookingFields></BookingFields>
    <hr>


    <!-- User Credentials -->
    <div>
      <label for="username"><b>Username</b></label>
      <input type="text" placeholder="Username" name="username-repeat" id="username" v-model="userData.username" required>

      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email-repeat" id="email" v-model="userData.email" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw-repeat" id="psw" v-model="userData.password" required>

      <label for="Address"><b>Address</b></label>
      <input type="text" placeholder="Enter your Address" name="address-repeat" id="address" v-model="userData.address" required>

      <label for="City"><b>City</b></label>
      <input type="text" placeholder="Enter your City" name="city" id="city-repeat" v-model="userData.city" required>

      <label for="Favorite Activity"><b>Favorite Activity</b></label>
      <input type="text" placeholder="Enter your Favorite Activity" name="favorityActivity-repeat" id="favorityActivity" v-model="userData.favoriteActivity" required>
    </div>
    <hr>

    <!-- Update Profile Button -->
    <button type="submit" class="registerbtn" @click="uploadProfilePhoto">Update</button>
  </div>

  <!-- Sign-in Container -->
  <div class="container signin">
    <p>Would you like to find some new Activities to do? <a href="/#/main">Activities</a>.</p>
  </div>
</template>

<script>
import axios from 'axios';
import UploadPhoto from '@/components/MainPageComponents/UploadPhoto.vue';
import BookingFields from './MainPageComponents/BookingFields.vue';

export default {
  name: 'UserProfile',
  props: {
    msg: String,
  },
  components:
  {
    UploadPhoto,
    BookingFields
  },
  data() {
    return {
      userData: {
        username: '',
        email: '',
        password: '',
        address: '',
        city: '',
        favoriteActivity: '',
      }
    };}}
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

img {
  border-radius: 50%;
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

.responsive {
  width: 100%;
  height: auto;
  background-color: black;
}


.responsivePhoto {
  width: 80%;
  height: auto;
  background-color: black;
  border-radius: 70px 70px 70px 70px;
}

.halfpage{
  width: 50%;
  height: auto;
  background-color: black;
  align-items: center;
  margin-left: 25%;
  z-index: 1;
  padding-block-end: 5%;
}

.joinButton {
  background-color: #fff;
  color: #0ab3dd;
  padding: 16px 20px;
  border-radius: 50px 50px 50px 50px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
  opacity: 0.9;
}

.joinButton:hover {
  opacity: 1;
}

img {
  border-radius: 50%;
  margin-top: 10px; 
}

h1 {
  margin: 0 0 0;
  font-size: 48px;
  background-color: black;
  font-family: 'Limelight', sans-serif;
  padding-top: 20px;
}
h3 {
  margin: 40px 0 0;
  background-color: black;
  font-family: 'Roboto', sans-serif;
}

h5 {
  margin: 40px 0 0;
  background-color: black;
  font-family: 'Roboto', sans-serif;
}
ul {
  list-style-type: none;
  padding: 0;
  margin-left: 15%;
  margin-right: 15%;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>

