<template>
  <div class="container">
    <h1>Potential ActioNist</h1>
    <li><img src="../assets/img_avatar.png" class="img" width="350" height="400"></li>
   
    <ul>
      <li>
        <button type="submit" class="registerbtn">
          <img src="../assets/thumbs_up.png" class="boximg">
          </button>
      </li>
      <li>
        <button type="submit" class="registerbtn">
          <img src="../assets/thumbs_down.png" class="boximg">
          </button>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  props: {
    msg: String
  },
  data() {
    return {
      userData: {
        username: '',
        email: '',
        password: '',
        address: '',
        city: '',
        favoriteActivity: ''
      }
    };
  },
  created() {
    // Fetch data from your API and set it to userData
    // Example:
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      // Simulating API request with a setTimeout
      setTimeout(() => {
        // Replace this with your actual API call to fetch user data
        const apiResponse = {
          username: 'John Doe',
          email: 'john@example.com',
          password: '********',
          address: '123 Main St',
          city: 'Cityville',
          favoriteActivity: 'Hiking'
        };

        // Set the retrieved data to userData
        this.userData = apiResponse;
      }, 0);
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

img {
  margin-top: 20%;
  border-radius: 20%;
  width: 80%;
}

.boximg{
  border-radius: 20%;
  height: 100%;
  width: 100%;
}
/* Add padding to containers */
.container {
  padding: 16px;
  background-color: #000;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit button */
.registerbtn {
  height: 80px;
  line-height: 80px;  
  width: 80px;  
  font-size: 2em;
  font-weight: bold;
  border-radius: 50%;
  color: white;
  text-align: center;
  cursor: pointer;
  background-color: black;
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

