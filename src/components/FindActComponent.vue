<template>
  <div>
    <h2>Choose an Activity</h2>
    <div class="activity-block" v-for="activity in activities" :key="activity.id" @click="selectActivity(activity)">
      <img :src="activity.image" class="activity-image">
      <p>{{ activity.name }}</p>
    </div>

    <div v-if="selectedActivity">
      <p>You selected: {{ selectedActivity.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [
        { id: 1, name: 'Running', image: '../assets/pooltable.jpg' },
        { id: 2, name: 'Cycling', image: '/src/assets/bike.jpg' },
        { id: 3, name: 'Chess', image: '/src/assets/chess.jpg' },
        { id: 4, name: 'Hiking', image: '/src/assets/hiking.jpg' },
        { id: 5, name: 'Pool', image: '../assets/pooltable.jpg' },
        { id: 5, name: 'Boxing', image: '/src/assets/gymnastics.jpg' },
        { id: 5, name: 'Wallking', image: '../assets/City.jpg' },
        { id: 5, name: 'Trip', image: '../assets/roadtrip.jpg '},
        { id: 5, name: 'Tennis', image: '../assets/tennis.jpg' },
        // Add more activities as needed
      ],
      selectedActivity: { id: 1, name: 'Running', image: '/src/assets/basketball.jpg' }, // Default selected activity
    };
  },
  methods: {
    selectActivity(activity) {
      this.selectedActivity = activity;
    },
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
