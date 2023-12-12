<template>
  <div class="progress-container">
    <div class="progress-bar" :style="{ width: progressBarWidth }"></div>
 <hr>
    <div class="steps">
      <div v-for="(step, index) in steps" :key="index" :class="{ active: index + 1 === currentStep }">
        {{ step }}
      </div>
    </div>

    <div class="navigation-buttons">
      <button @click="goToStep(currentStep - 1)" :disabled="currentStep === 1">Previous Step</button>
      <button @click="goToStep(currentStep + 1)" :disabled="currentStep === steps.length">Next Step</button>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
      progressBarWidth: '0%',
      steps: ['1', '2', '3']
    };
  },
  methods: {
    goToStep(step) {
      if (step >= 1 && step <= this.steps.length) {
        this.currentStep = step;
        this.progressBarWidth = `${((this.currentStep - 1) / (this.steps.length - 1)) * 100}%`;
      }
    }
  }
};
</script>

<style scoped>
.progress-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.progress-bar {
  height: 20px;
  background-color: #457B9D;
  transition: width 0.3s ease;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin-bottom: 10px;
}

.steps {
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-top: 10px;
}

.steps div {
  width: 60px;
  height: 60px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #457B9D;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.steps div.active {
  background-color: #4CAF50;
  color: #fff;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-top: 10px;
}

button {
  padding: 10px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
