<template>
  <div class="appointment-form">
    <label>
      Preferred Date:
      <input type="date" v-model="activityDate" :disabled="flexibleDate">
    </label>

    <label>
      I'm Flexible:
      <input type="checkbox" v-model="flexibleDate" @change="handleFlexibilityChange">
    </label>

    <button :disabled="!canBook" @click="book">Book Appointment</button>
    <p>{{ canBook ? '' : 'Appointment date must be in the future.' }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const activityDate = ref(dateToString(new Date()));
const flexibleDate = ref(false);

const canBook = computed(() => flexibleDate.value || isFutureDate(activityDate.value));

function book() {
  if (flexibleDate.value) {
    alert(`You have booked a flexible appointment.`);
  } else {
    alert(`You have booked an appointment on ${activityDate.value}.`);
  }
}

function isFutureDate(date) {
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set current time to midnight for comparison
  return selectedDate > today;
}

function dateToString(date) {
  return date.toISOString().split('T')[0];
}

function handleFlexibilityChange() {
  // Reset the date when flexibility changes
  if (flexibleDate.value) {
    activityDate.value = dateToString(new Date());
  }
}
</script>

<style scoped>
.appointment-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

label {
  margin-bottom: 10px;
}

input {
  margin-bottom: 15px;
  font-size: 15px;
}

button {
  margin-bottom: 15px;
  font-size: 15px;
}

p {
  color: red;
}
</style>
