<template>
    <div>
      <h1 class="CopyRights">© ActyIn 2023. All rights reserved.</h1>
    </div>
</template>

<style scoped>
.CopyRights
{
  font-size: 18px;
  margin: 0;
  background-color: black;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: left;
  align-items: left;
  justify-content: left;
}
  
  @media (max-width: 1024px) {
    .CopyRights {
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
  
    .CopyRights:before {
      content: ' ';
      border-left: 1px solid var(--color-border);
      position: flex;
      left: 0;
      bottom: calc(50% + 25px);
      height: calc(50% - 25px);
    }
  
    .CopyRights:after {
      content: ' ';
      border-left: 1px solid var(--color-border);
      position: flex;
      left: 0;
      top: calc(50% + 25px);
      height: calc(50% - 25px);
    }
  
    .CopyRights:first-of-type:before {
      display: none;
    }
  
    .CopyRights:last-of-type:after {
      display: none;
    }
  }
</style>
