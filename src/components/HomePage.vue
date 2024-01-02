<template>
<div class="responsive">
  <h1>Welcome to ACTYIN</h1>
  <div class="responsive">    
  <div class="halfpage">    
  <img src="../assets/basketball.jpg" class="responsivePhoto" width="200" height="200">
</div> 
<router-link to="/login"><ul><button type="submit" class="joinButton">Join Now</button></ul></router-link>
<router-link to="/register"><ul><button type="submit" class="registerbtn">Register</button> </ul></router-link>
</div>
<GetStarted/>
<FindActBuddies/>
<OrganizeAct/>
<Plans/>
<PlansUpgrade/>
<Questions/>
<StayTuned/>
<CopyRights/>
</div>
</template>

<script>
import Plans from '@/components/Plans.vue'
import OrganizeAct from '@/components/OrganizeAct.vue'
import GetStarted from '@/components/GetStarted.vue'
import FindActBuddies from '@/components/FindActBuddies.vue'
import PlansUpgrade from '@/components/PlansUpgrade.vue'
import Questions from '@/components/Questions.vue'
import StayTuned from '@/components/StayTuned.vue'
import CopyRights from '@/components/CopyRights.vue'

export default {  
  name: 'HomePage',
  props: {
    msg: String
  },
  components: {
    OrganizeAct,
    Plans,
    GetStarted,
    FindActBuddies,
    PlansUpgrade,
    Questions,
    StayTuned,
    CopyRights
  }
}
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
</style>
