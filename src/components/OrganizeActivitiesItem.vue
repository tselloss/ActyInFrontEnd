<template>
  <div class="organizeActivitiesBlock">
    <!-- Left Column -->
    <div class="left-column">
      <div class="left-placeholderOrganizeActivitiesPhoto"></div>
    </div>

    <!-- Right Column -->
    <div class="right-column">
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
</template>

<style scoped>
.organizeActivitiesBlock {
  display: flex;
  align-items: stretch; /* Align items with the same height */
  justify-content: center;
  height: 80vh;
  background-color: #000;
  color: #0077cc;
  font-family: 'Limelight', sans-serif;
  overflow: hidden;
}

.left-column,
.right-column {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.left-placeholderOrganizeActivitiesPhoto {
  width: 40vh; /* Make left column width 100% */
  height: 40vh;
  background-color: #333;
  border-radius: 150px 70px 70px 70px;
  z-index: 1;
  margin-left: -10%;
}

.titleOrganizeActivities {
  font-size: 2.5em;
  margin: 0;
  color: #457B9D;
  font-family: 'Limelight', sans-serif;
  margin-right: 10%;
}

.organizeActivities {
  display: block;
  align-items: center;
  justify-content: center;
  height: 50vh; 
  background-color: #000;
  color: #0077cc;
  font-family: 'Limelight', sans-serif;
  overflow: hidden;
  margin-left: 10%;
}

.OrganizeActivitiesContext1 {
  font-size: 25px;
  margin: 0;
  color: #457B9D;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  margin-right: 10%;
}

/* Media query for screens larger than 1024px */
@media (min-width: 1024px) {
  .organizeActivitiesBlock {
    margin-top: 0;
    flex-direction: block;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  .organizeActivitiesBlock:before,
  .organizeActivitiesBlock:after {
    content: '';
    border-left: 1px solid var(--color-border);
    position: absolute;
  }

  .organizeActivitiesBlock:before {
    left: 0;
  }

  .organizeActivitiesBlock:after {
    left: 100%;
  }
}

@media (max-width: 1024px) {
  .organizeActivitiesBlock {
    flex-direction: column;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  .organizeActivities {
    order: 2;
  }

  .left-placeholderOrganizeActivitiesPhoto {
    order: 1;
    width: 100%;
    height: 100%;    
  }
}
</style>
