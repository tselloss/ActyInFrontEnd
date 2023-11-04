<template>
  <div>
    <div class="findbuddiesBlock">
      <!-- Left Column -->
      <div class="findBuddies">
        <h1 class="titlefindYourActivityBuddies">Find Your Activity Buddies</h1>
        <p class="findYourActivityBuddiesContext1">
          No more searching through countless<br /> forums and groups for the<br />
          perfect match. Our intelligent<br />algorithm helps you find like-minded<br />
          individuals to join you on<br /> your next adventure!
        </p>
      </div>
  
      <!-- Right Column -->
      <div class="right-placeholderFindyourBuddiesPhoto"></div>
    </div>
  </div>
  
</template>

<style scoped>
/*ok */
.findbuddiesBlock {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
  color: #0077cc;
  font-family: 'Limelight', sans-serif;
  overflow: hidden;
  margin-top: auto;
}

/*ok */
.findbuddies {
  position: relative;
  display: block;
  align-items: center;
  justify-content: center;
  height: 50vh;
  background-color: #000;
  color: #0077cc;
  font-family: 'Limelight', sans-serif;
  overflow: hidden;
  margin-top: auto;
  flex: 1;
}

/*ok */
.right-placeholderFindyourBuddiesPhoto {
  width: 40%;
  height: 30%;
  background-color: #333;
  border-radius: 70px 70px 70px 70px;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: right;
  margin-left: auto;
}

.titlefindYourActivityBuddies {
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
  margin-top: auto;
}

.findYourActivityBuddiesContext1 {
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
  margin-top: auto;
}

@media (max-width: 1024px) {
  .findbuddiesBlock {
    flex-direction: column;
    margin-top: -10%;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  .findBuddies {
    order: 2;
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

  .findbuddiesBlock:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .findbuddiesBlock:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .findbuddiesBlock:first-of-type:before {
    display: none;
  }

  .findbuddiesBlock:last-of-type:after {
    display: none;
  }
  .right-placeholderFindyourBuddiesPhoto {
    order: 1;
    width: 100%;
    height: 30%;
    margin-top: 1rem; /* Add margin as needed */
  }
}
</style>
