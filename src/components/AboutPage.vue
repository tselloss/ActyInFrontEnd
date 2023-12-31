<template>
  <div>
    <div class="responsive">
      <h1>About Us</h1>
      <div class="halfpage">
        <h3>Discover and Book Activities</h3>
        <ul>
          <li>
            Find countless activities near you and match with compatible partners who share your interests.
          </li>
          <li>
            Don’t just sit there, get active with ActyIn!
          </li>
        </ul>
      </div>
    </div>

    <div class="responsive">
      <h1>Choose Your Activity Buddy</h1>
      <div class="halfpage">
        <h3>Connect with Like-minded Users</h3>
        <ul>
          <li>
            Browse through profiles of other users with similar interests.
          </li>
          <li>
            Choose your activity buddy for a fun and engaging experience.
          </li>
        </ul>
      </div>
    </div>

    <div class="responsive">
      <h1>Our Company</h1>
      <div class="halfpage">
        <h3>ActyIn - Making Activities Accessible</h3>
        <p>
          ActyIn is dedicated to making recreational activities easily accessible to everyone.
        </p>
        <p>
          Our mission is to connect individuals with shared interests, fostering a community of active and healthy lifestyles.
        </p>
      </div>
    </div>

    <div class="responsive">
      <h1>Location</h1>
      <div class="halfpage">
        <h3>Visit Our Office</h3>
        <p>
          ActyIn Headquarters
        </p>
        <p>
          [Your Address]
        </p>
      </div>
    </div>

    <div class="responsive">
      <h1>Contact Us</h1>
      <div class="halfpage">
        <h3>Get in Touch</h3>
        <p>
          Have questions or suggestions? Contact us!
        </p>
        <p>
          Email: info@actyin.com
        </p>
        <p>
          Phone: [Your Phone Number]
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  props: {
    msg: String
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
