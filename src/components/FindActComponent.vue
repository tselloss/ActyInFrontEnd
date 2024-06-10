<template>
  <div>
    <h2>Choose an Activity</h2>
    <div class="activity-block" v-for="activity in activities" :key="activity.id" @click="selectActivity(activity)">
      <img :src="`https://localhost:7254/actyin/File/getPhotoForSports?sport=${activity.name.toLowerCase()}`" class="activity-image" alt="">
      <p>{{ activity.name }}</p>
    </div>

    <div v-if="selectedActivity">
      <p>You selected: {{ selectedActivity.name }}</p>
      <img :src="selectedActivity.image" class="selected-activity-image">
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      activities: [
        { id: 1, name: 'Running' },
        { id: 2, name: 'Bicycle' },
        { id: 3, name: 'Chess' },
        { id: 4, name: 'Hiking' },
        { id: 5, name: 'Running' },
        { id: 6, name: 'Basketball'},
        { id: 7, name: 'Billiards' },
        { id: 8, name: 'Roadtrip'},
        { id: 9, name: 'Tennis', },
      ],
      selectedActivity: null,
    };
  },
  methods: {
    selectActivity(activity) {
      this.selectedActivity = activity;
      localStorage.setItem('Activity', activity.name)
    },
  },
  async created() {
  // Fetch images dynamically based on the sport names
  for (const activity of this.activities) {
    try {
      const response = await axios.get(`https://localhost:7254/actyin/File/getPhotoForSports?sport=${activity.name.toLowerCase()}`);         
    } catch (error) {
      console.error(`Failed to fetch image for ${activity.name}:`, error);
    }
  }
},
};
</script>


<style scoped>
.activity-block {
  display: inline-block;
  cursor: pointer;
  margin: 10px;
  overflow: hidden; /* To ensure the border radius is applied correctly */
}

.activity-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border: 1px solid #ccc; /* Add border style here */
  border-radius: 20%;
}
</style>
