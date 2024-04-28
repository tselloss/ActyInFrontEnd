<template>
  <div class="container">
    <h1>Potential ActioNist</h1>

    <div v-if="this.activities.length > 0 && !emptyArray">
      <div class="user-block">
        <img :src="getPhotoUrl()" class="user-photo" width="350" height="400">
      </div>
      <div class="action-buttons">
        <button type="submit" class="registerbtn3" @click="saveBookingActivity">
          <img src="../assets/tick.png" class="boximg">
        </button>
        <button type="submit" class="registerbtn3" @click="nextActivity">
          <img src="../assets/next.png" class="boximg">
        </button>
      </div>
    </div>

    <div v-else>
      <div class="no-records" v-if="emptyArray">
        <h2>We have no records for this activity or this date.<br> We will inform you by email.</h2>
        <h2><br> Press the button to save your choice.</h2>
        <router-link to="/"><button type="submit" class="registerbtn" @click="goToMainPage">Go to Home Page</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MatchForm',
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
      },
      activities: [],
      currentIndex: 0,
      retrievedUser : {
        username: '',
        date: '',
        activity: ''
      },
      bookingData:
      {
        UsernamePicker: '',
        UsernameSelected: '',
        selectedDate: '',
        activityName: '',
        isCanceled: ''
      },
      emptyArray: false
    };
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      try {
        const chosenDate = localStorage.getItem('Date');
        const chosenActivity = localStorage.getItem('Activity');

        if (chosenDate && chosenActivity) {
          const chooseByDate = await axios.get(`https://localhost:7254/actyin/ChooseActivity/actyin/getChosenActivitiesByDate?date=${chosenDate}&activity=${chosenActivity}`);
          this.activities = chooseByDate.data;
          console.log('Retrive data', this.activities);
        } else {
          console.error('Invalid date or activity in local storage.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    getPhotoUrl() {      
      const currentActivity = this.activities[this.currentIndex];
      localStorage.setItem('SelectedBuddy', currentActivity.username);
      //const loggedUsername = localStorage.getItem('Username');
      // if (currentActivity && currentActivity.username === loggedUsername) {
      //   this.currentIndex++;
      //   return '';
      // }
      return currentActivity
        ? `https://localhost:7254/actyin/File/getPhotoByUsername?username=${currentActivity.username}`
        : '';         
    },
    saveChoosenActivity() {
      if (!this.saveChoosenActivityCalled) {
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
          })
          .catch(error => {
            console.error('Error saving data to the database:', error);
          });

        this.saveChoosenActivityCalled = true;
      }
    },
    saveBookingActivity() {
        const UsernamePicker = localStorage.getItem('Username');
        const Date = localStorage.getItem('Date');
        const Activity = localStorage.getItem('Activity');
        const UsernameSelected = localStorage.getItem('SelectedBuddy');

        this.bookingData = {
          UsernamePicker : UsernamePicker,
          UsernameSelected: UsernameSelected,
          selectedDate: Date,
          activityName: Activity,
          isCanceled: false 
        };

        axios.post('https://localhost:7254/actyin/Booking/actyin/saveBooking', this.bookingData)
          .then(response => {
            console.log('Your booking is saved to our database:', response.data);
            this.$router.push('/user');
          })
          .catch(error => {
            console.error('Error saving data to the database:', error);
          });          
    },
    goToMainPage() {
      this.saveChoosenActivity();
      this.$router.push('/main');
    },
    nextActivity() {
  this.currentIndex++;
  if (this.currentIndex >= this.activities.length) {
    this.emptyArray = true;    
  }
},
    previousActivity() {
      this.currentIndex--;
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
.registerbtn3 {
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

.registerbtn3:hover {
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

.user-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.user-photo {
  border-radius: 10px;
  margin-bottom: 10px;
}

.action-buttons {
  display: flex;
  justify-content: center;
}

.no-records {
  text-align: center;
}
</style>

