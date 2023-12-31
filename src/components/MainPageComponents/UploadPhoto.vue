<template>
  <div>    
    <h1>User Profile</h1>
    <li><img :src="`https://localhost:7254/actyin/File/getPhotoByUsername?username=${this.username}`" class="img" width="300" height="300"></li>
    <hr>
  </div>
  <div class="container">
    <h2 for="profilePhoto">Change your Photo Profile<br></h2>
    <input type="file" @change="onFileSelected">
    <br>
    <button type="submit" class="registerbtn" @click="uploadProfilePhoto">Upload Photo</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UploadPhoto',
  data() {
    return {
      selectedFile: null,
      username: '', 
      userPhotoUrl: '',
    };
  },
  created() {
    // Fetch the username from wherever you store it (localStorage, Vuex, etc.)
    this.username = localStorage.getItem('Username');
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
    },
    uploadProfilePhoto() {
      // Check if there's a file selected
      if (!this.selectedFile) {
        console.error('No photo selected for upload.');
        return;
      }

      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      formData.append('username', this.username); // Append the username

      // Make a post request to your server endpoint for photo upload
      axios.post('https://localhost:7254/actyin/File/UploadProfilePhoto', formData)
        .then(response => {
          console.log('Photo uploaded successfully:', response.data);
        })
        .catch(error => {
          console.error('Error uploading photo:', error);
          // Handle errors here
        });
    }
  }
};
</script>

<style scoped>
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
h1 {
  margin: 0 0 0;
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
