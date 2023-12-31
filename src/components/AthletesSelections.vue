<template>
  <div class="responsive">
    <MenuBar />
    <StepsBarChooseActivity />
    <FindActComponent v-if="currentStep === 2"/>
    <SuccessPersonActBook
      v-if="currentStep === 3"
    />
  </div>
</template>

<script>
import MenuBar from '@/components/MainPageComponents/MenuBar.vue';
import StepsBarChooseActivity from './MainPageComponents/StepsBarChooseActivity.vue';
import FindActComponent from './FindActComponent.vue';
import SuccessPersonActBook from './SuccessPersonActBook.vue';

export default {
  name: 'AthletesSelections',
  components: {
    MenuBar,
    StepsBarChooseActivity,
    FindActComponent,
    SuccessPersonActBook
  },
  data() {
    return {
      currentStep: 1
    };
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
</style>
