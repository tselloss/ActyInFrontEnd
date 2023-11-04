<template>
    <div>
        <div class="QuestionsHomePage">
        <div class="home">
          <h1 class="titleQuestions">Frequently Asked Questions</h1>
          <div class="questionBlock">
          <div class="leftBlock">
          <h1 class="QuestionsContext1">How does the matching process work?</h1>
          <p class="QuestionsContext3">
            Our intelligent algorithm analyzes your<br /> selected
            interests, location, and <br />preferred time to find
            potential activity partners. <br /> It then provides youwith
            a list of compatible matches to choose from.
          </p>
          </div>
          <div class="rightBlock">
          <h1 class="QuestionsContext2">Is my personal information safe?</h1>
          <p class="QuestionsContext4">
            At ActyIn, we take your privacy very seriously.<br /> Your
            personal information is securely<br /> stored and never
            shared with any third parties<br />  without your consent.
          </p>
          </div>
        </div>
        </div>
        </div>
      </div>
</template>

<style scoped>
@media only screen and (max-width: 768px) {
    .home {
      height: auto;
      flex-direction: column;
    }
  }
  .QuestionsHomePage {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120vh;
    background-color: #000;
    color: #0077cc;
    font-family: 'Limelight', sans-serif;
    overflow: hidden;
  }
  .home {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120vh;
    background-color: #000;
    color: #0077cc;
    font-family: 'Limelight', sans-serif;
    overflow: hidden;
    margin-top: 10%;
  }
  
  .titleQuestions {
    font-size: 2.5em;
    margin: 0;
    color: #457B9D;
    font-family: 'Limelight', sans-serif;
    z-index: 2;
    margin-top: 20px; /* Adjust the spacing as needed */
  }
  
  .questionBlock {
    display: flex;
    flex-direction: row;
    margin-top: 20px; /* Adjust the spacing as needed */
  }
  
  .leftBlock,
  .rightBlock {
    flex: 1; /* Take equal space in the flex container */
    text-align: center; /* Center-align the content */
  }
  
  .QuestionsContext2,
  .QuestionsContext4 {
    font-size: 22px;
    margin: 0;
    color: #457B9D;
    font-family: 'Roboto', sans-serif;
    z-index: 2;
    text-align: left;
    margin-left: 5%;
  }
  
  .QuestionsContext1,
  .QuestionsContext3{
    font-size: 22px;
    margin: 0;
    color: #457B9D;
    font-family: 'Roboto', sans-serif;
    z-index: 2;
    text-align: left;
    margin-right: 12%;
  }
  
  .QuestionsContext1{
    font-size: 23px;
    font-weight: 1000;
    font-family: 'Limelight', sans-serif;
  }
  
  .QuestionsContext2{
    font-size: 23px;
    font-weight: 1000;
    font-family: 'Limelight', sans-serif;
  }
  
  @media (min-width: 1024px) {
    .QuestionsHomePage {
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
  
    .QuestionsHomePage:before {
      content: ' ';
      border-left: 1px solid var(--color-border);
      position: flex;
      left: 0;
      bottom: calc(50% + 25px);
      height: calc(50% - 25px);
    }
  
    .QuestionsHomePage:after {
      content: ' ';
      border-left: 1px solid var(--color-border);
      position: flex;
      left: 0;
      top: calc(50% + 25px);
      height: calc(50% - 25px);
    }
  
    .QuestionsHomePage:first-of-type:before {
      display: none;
    }
  
    .QuestionsHomePage:last-of-type:after {
      display: none;
    }
  }
</style>
