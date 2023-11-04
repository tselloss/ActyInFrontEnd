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

<style scoped>

.OrganizeActivitiesHomePage {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: #000;
  color: #0077cc;
  font-family: 'Limelight', sans-serif;
  overflow: hidden;
}
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
}

/*ok */
.organizeActivitiesBlock1 {
  position: relative;
  display: block;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: #000;
  color: #0077cc;
  font-family: 'Limelight', sans-serif;
  overflow: hidden;
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
  margin-top: 25%;
  margin-left: 10%;
}

/*ok */
.left-placeholderOrganizeActivitiesPhoto {
  width: 40vh;
  height: 40vh;
  background-color: #333;
  border-radius: 150px 70px 70px 70px;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
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
  margin-top: 20%;
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

@media (min-width: 1024px) {
  .OrganizeActivitiesHomePage {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .OrganizeActivitiesHomePage:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: flex;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .OrganizeActivitiesHomePage:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: flex;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .OrganizeActivitiesHomePage:first-of-type:before {
    display: none;
  }

  .OrganizeActivitiesHomePage:last-of-type:after {
    display: none;
  }
}
</style>
