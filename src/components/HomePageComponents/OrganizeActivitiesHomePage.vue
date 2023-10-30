<!-- eslint-disable max-len -->
<template>
  <div>
    <div class="OrganizeActivitiesHomePage">
      <div class="organizeActivitiesBlock">
        <div class="left-placeholderOrganizeActivitiesPhoto"></div>
        <div class="organizeActivities">
          <h1 class="titleOrganizeActivities">Organize Activities <br /> Effortlessly</h1>
          <p class="OrganizeActivitiesContext1">
            Whether it’s weekend hikes, tennis matches, or <br />
            group yoga sessions, ActyIn makes it easy to <br />
            coordinate activities with your new-found friends.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrganizeActivitiesHomePage',
  props: {
    msg: String,
  },
};
</script>

<style scoped>

@media only screen and (max-width: 768px) {
  .organizeActivitiesBlock
  {
    height: auto;
    flex-direction: column;
  }
}

/*ok */
.organizeActivitiesBlock {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: #000;
  color: #0077cc;
  font-family: 'Limelight', sans-serif;
  overflow: hidden;
  margin-top: -10%;
}

/*ok */
.organizeActivities {
  position: relative;
  display: block;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: #000;
  color: #0077cc;
  font-family: 'Limelight', sans-serif;
  overflow: hidden;
  margin-top: 30px;
}

/*ok */
.left-placeholderOrganizeActivitiesPhoto {
  width: 400px;
  height: 350px;
  background-color: #333;
  border-radius: 150px 70px 70px 70px;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  margin-right: 15%;
  margin-left: 10%;
}

.titleOrganizeActivities {
  font-size: 2.5em;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: left;
  align-items: left;
  justify-content: left;
  margin-top: 50%;
}

/*ok */
.OrganizeActivitiesContext1 {
  font-size: 25px;
  margin: 0;
  color: #457B9D;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: left;
  align-items: left;
  justify-content: left;
  font-weight: 400;
}

</style>
