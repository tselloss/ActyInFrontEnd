<template>
  <div>
    <h2>Reservations</h2>
    <div v-if="reservations.length > 0" class="reservations-block">
      <ul class="reservation-list">
        <li v-for="reservation in reservations" :key="reservation.bookingId" class="reservation-item">
          <div class="reservation-info">
            <span class="info-label">Activity:</span> <span class="activity-name">{{ reservation.activityName }}</span><br>
            <span class="info-label">Action Date:</span> <span class="selected-date">{{ reservation.selectedDate }}</span><br>
            <span class="info-label">Status:</span> <span class="canceled-status">{{ reservation.isCanceled ? 'Canceled' : 'Active' }}</span><br>
            <span class="info-label">Buddy:</span> <span class="username">{{ reservation.usernameSelected }}</span>
          </div>
        </li>
      </ul>
    </div>
    
    <div v-else>
      <p>No reservations available at this moment! Make a choice now!</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BookingFields',
  data() {
    return {
      reservations: [],
      username: '',
    };
  },
  mounted() {    
    this.fetchReservations();
  },
  methods: {
    async fetchReservations() {      
  try {
    this.username = localStorage.getItem('Username'); 
    const response = await axios.get('https://localhost:7254/actyin/Booking/actyin/getBookingsByUsername', { params: { username: this.username } });
      this.reservations = response.data;
  } catch (error) {
    console.error('Error fetching reservations:', error);
  }
},
  },
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
img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-block-end: 10%;
}

#fileInput {
  display: none; /* Hide the actual file input */
}

#fileInput.custom-file-upload {
  display: inline-block;
  padding: 5px;
  cursor: pointer;
  border: 1px solid #000000;
  border-radius: 5px;
  background-color: #363636;
  color: #474747;
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
}

.reservations-block {
  border: 1px solid #3b3b3b;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.reservation-item {
  list-style-type: none;
  margin-bottom: 5px;
}

.activity-name {
  font-weight: bold;
}

.canceled-status {
  color: rgb(255, 255, 255); /* You can use different styles for canceled reservations */
}

.reservation-info {
  background-color: #535252; /* Light gray background for each reservation */
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.info-label {
  font-weight: bold;
}
</style>
