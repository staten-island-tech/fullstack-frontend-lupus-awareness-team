<template>
  <div class="event_details_container">
    <h3>Volunteer</h3>
    <div class="column">
      <div class="event_image">
        <img src="../assets/dogPark.jpg" alt="">
      </div>
      <ul class="event_image_bar">
        <li class="event_image_preview" :style="{backgroundImage:'url('+require('../assets/dogPark.jpg')+')'}">
        </li>
        <li class="event_image_preview">
          <img src="../assets/dogPark.jpg" alt="">
        </li>
        <li class="event_image_preview">
          <img src="../assets/dogPark.jpg" alt="">
        </li>
        <li class="event_image_preview">
          <img src="../assets/dogPark.jpg" alt="">
        </li>
      </ul>
      <div class="event_details">
        <div class="event_time">2:00 PM - 4:00 PM</div>
        <div class="event_location">Dog Park, Full Address</div>
        <div class="event_date">Saturday, April 2</div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'EventDetails',
}
</script>

<style>
.event_details_container {
  background-color: aliceblue;
  width: 90vw;
  padding: 5rem;
  margin: 5rem auto;
}
.column {
  display: flex;
  flex-direction: column;
  width: 40%;
  background-color: antiquewhite;
}

.event_image img{
  margin: 2rem auto;
  width: 90%;
  display: flex;
  justify-content: center;
  border-radius: 1.5rem;
}
.event_image_bar {
  width: 80%;
  height: 20%;
  margin: .25rem auto;
  display: flex;
  justify-content: center;
  background-color: cadetblue;
}
.event_image_preview img {
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  margin: 1rem auto;
}
.event_details {
  padding: 2rem;
  height: 40%;
  width: 90%;
  font-size: 2.5rem;
  background-color: aquamarine;
  border-radius: 1.5rem;
  margin: 2rem auto;
}

</style>