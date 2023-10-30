<!-- eslint-disable max-len -->
<template>
  <div>
    <WelcomeHomePage />
    <GetStartedHomePage />
    <FindBuddiesHomePage />
    <OrganizeActivitiesHomePage />
    <PlansHomePage />
    <QuestionsHomePage />
    <StayTunedHomePage />
    <div class="home">
      <h1 class="CopyRights">© ActyIn 2023. All rights reserved.</h1>
    </div>
  </div>
</template>

<script>
import GetStartedHomePage from './HomePageComponents/GetStartedHomePage.vue';
import FindBuddiesHomePage from './HomePageComponents/FindBuddiesHomePage.vue';
import OrganizeActivitiesHomePage from './HomePageComponents/OrganizeActivitiesHomePage.vue';
import PlansHomePage from './HomePageComponents/PlansHomePage.vue';
import QuestionsHomePage from './HomePageComponents/QuestionsHomePage.vue';
import StayTunedHomePage from './HomePageComponents/StayTunedHomePage.vue';
import WelcomeHomePage from './HomePageComponents/WelcomeHomePage.vue';

export default {
  name: 'HomePage',
  components: {
    WelcomeHomePage,
    GetStartedHomePage,
    FindBuddiesHomePage,
    OrganizeActivitiesHomePage,
    PlansHomePage,
    QuestionsHomePage,
    StayTunedHomePage,
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>

.CopyRights
{
  font-size: 18px;
  margin: 0;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: left;
  align-items: left;
  justify-content: left;
}
</style>
