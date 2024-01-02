<template>
  <div class="responsive">
    <h1>Thank You for Your Selection</h1>
    <p>We appreciate your choice! Once we find a person ready to take action with you, we will notify you via email.</p>
    {{ saveChoosenActivity() }}
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'SuccessPersonActBook',
  props: {
    msg: String
  },
  methods: {
    saveChoosenActivity() {
      const Username = localStorage.getItem('Username');
      const Date = localStorage.getItem('Date');
      const Activity = localStorage.getItem('Activity');
      
      const dataToSave = {
        username: Username,
        dateTime: Date,
        activity: Activity
      };

      axios.post('https://localhost:7254/actyin/ChooseActivity/actyin/createNewActivity', dataToSave)
  .then(response => {
    console.log('Data saved to the database:', response.data);
    // You can update the local component state if needed
    this.dataToSave = dataToSave;
    console.log('Data to save:', this.dataToSave);
  })
  .catch(error => {
    console.error('Error saving data to the database:', error);
  });
    }
  }
}
</script>


<style scoped>
.responsive {
  width: 100%;
  height: 60vh;
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
  padding-top: 25%;
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
