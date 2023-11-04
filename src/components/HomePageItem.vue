<template>
    <div class="WelcomeHomePage">
        <div class="home">
             <div class="left-placeholder"></div>
             <h1 class="title">ACTYIN</h1>
             <div class="right-placeholder"></div>
             <div class="home">
               <button class="buttonFindPartners">Find Partners</button>
               <button class="buttonJoinNow">Join Now</button>
             </div>
           </div>
       </div>
</template>

<style scoped>

.WelcomeHomePage {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75vh;
    background-color: #000;
    color: #0077cc;
    font-family: 'Limelight', sans-serif;
    overflow: hidden;
  }
.home {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75vh;
    background-color: #000;
    color: #0077cc;
    font-family: 'Limelight', sans-serif;
    overflow: hidden;
  }
  
  /*ok */
  .right-placeholder {
    width: 300px;
    height: 500px;
    position: absolute;
    background-color: #333;
    border-radius: 20px 20px 20px 20px;
    transform: rotate(18deg);
    right: 12%;
    z-index: 1;
  }
  
  /*ok */
  .left-placeholder {
    width: 300px;
    height: 500px;
    position: absolute;
    background-color: #333;
    border-radius: 20px 20px 20px 20px;
    transform: rotate(-18deg);
    left: 12%;
    z-index: 1;
  }
  
  /*ok */
  .title {
    position: absolute;
    font-size: 94px;
    margin: 0;
    color: #457B9D;
    font-family: 'Limelight', sans-serif;
    z-index: 2;
    top: 50%;
    width: 100%;
    text-align: center;
    vertical-align:top;
    margin-top: -150px;
    z-index: 2;
  }
  
  .buttonFindPartners {
    margin: 0 10px; /* Adjust the spacing between buttons as needed */
    padding: 15px 50px;
    background-color: #1D3557;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 50px 50px 50px 50px;
    margin-top: 30%;
    z-index: 2;
  }
  
  .buttonJoinNow {
    margin: 0 10px; /* Adjust the spacing between buttons as needed */
    padding: 15px 50px;
    background-color: #0ab3dd;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 50px 50px 50px 50px;
    margin-top: 30%;
    z-index: 2;
  }
  
  @media (min-width: 1024px) {
    .home {
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
  
    .home:before {
      content: ' ';
      border-left: 1px solid var(--color-border);
      position: flex;
      left: 0;
      bottom: calc(50% + 25px);
      height: calc(50% - 25px);
    }
  
    .home:after {
      content: ' ';
      border-left: 1px solid var(--color-border);
      position: flex;
      left: 0;
      top: calc(50% + 25px);
      height: calc(50% - 25px);
    }
  
    .home:first-of-type:before {
      display: none;
    }
  
    .home:last-of-type:after {
      display: none;
    }
  }
</style>
