<template>
  <div class="event_details_container">
    <div class="column">
      <h3>Volunteer</h3>
      <div class="event_image">
        <img src="../assets/dogPark.jpg" alt="" />
      </div>
      <ul class="event_image_bar">
        <li class="event_image_preview">
          <img src="../assets/dogPark.jpg" alt="" />
        </li>
        <li class="event_image_preview">
          <img src="../assets/dogPark.jpg" alt="" />
        </li>
        <li class="event_image_preview">
          <img src="../assets/dogPark.jpg" alt="" />
        </li>
        <li class="event_image_preview">
          <img src="../assets/dogPark.jpg" alt="" />
        </li>
      </ul>
      <div class="event_details">
        <div class="event_time">2:00 PM - 4:00 PM</div>
        <div class="event_location">Dog Park, Full Address</div>
        <div class="event_date">Saturday, April 2</div>
      </div>
    </div>
    <div class="column">
      <div class="user_info_brief">
        <div class="user_profile_picture">
          <img src="../assets/placeholder.jpg" alt="temporary" />
        </div>
        <h4 class="user_name">user1123</h4>
      </div>
      <div class="organization_info">
        <div class="organization_name organization_detail">
          <h5>Organization:</h5>
          <p>abc animals</p>
        </div>
        <div class="organization_contact organization_detail">
          <h5>Contact Information</h5>
          <p>example@email.com</p>
          <p>111-111-1111</p>
        </div>
        <div class="organization_address organization_detail">
          <h5>Organization Address</h5>
          <p>99 place, new york, ny</p>
        </div>
      </div>
      <div class="interested_bar">
        <img class="interested_svg" src="../assets/placeholder.jpg" alt="" />
        <!-- it will be an svg latrer -->
        <h5>3 Interested</h5>
        <button class="interested_btn">
          <h5>I'm Interested</h5>
        </button>
      </div>
      <div class="event_desc">
        <h5>Event Description:</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          assumenda, rem fugiat ratione recusandae deleniti eveniet quae dolor
          non quo quam aspernatur mollitia sapiente molestias eaque qui magni.
          Qui, expedita.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventDetails",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@700&display=swap");
body {
  background-color: var(--background);
}

.event_details_container {
  font-family: "Merriweather Sans", sans-serif;
  background-color: aliceblue;
  width: 90vw;
  height: 90vh;
  padding: 5rem;
  margin: 5rem auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.column {
  display: flex;
  flex-direction: column;
  width: 45%;
  background-color: antiquewhite;
  padding: 2rem;
}
.event_image {
  font-size: 3rem;
}
.event_image img {
  margin: 2rem auto;
  width: 90%;
  display: flex;
  justify-content: center;
  border-radius: 1.5rem;
}
.event_image_bar {
  width: 80%;
  margin: 0.25rem auto;
  display: flex;
  justify-content: center;
  background-color: cadetblue;
}
.event_image_preview img {
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  margin: 1rem auto;
  border-radius: 0.5rem;
}
.event_details {
  padding: 2rem;
  height: 20%;
  width: 90%;
  font-size: 2.5rem;
  background-color: lightgray;
  border-radius: 1.5rem;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
}

.event_image_preview img:hover {
  outline: white solid 0.35rem;
}
.user_info_brief {
  display: flex;
  flex-direction: row;
  width: 50%;
  margin: 0 auto;
  align-items: center;
}
.user_profile_picture img {
  width: 90%;
  height: 90%;
  border-radius: 50%;
  clip-path: circle(40% at 50% 50%);
}

.organization_info {
  font-size: 2rem;
  padding: 2rem;
  height: 70%;
  width: 80%;
  font-size: 2.5rem;
  background-color: lightgray;
  border-radius: 1.5rem;
  margin: 2rem auto;
}
.organization_detail {
  padding: 1rem;
  border-bottom: 0.1rem solid gray;
}
.event_desc {
  font-size: 2rem;
  background-color: lightgray;
  padding: 2rem;
  margin: 3rem auto;
}
.interested_bar {
  height: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
}
.interested_svg {
  height: 100%;
}
.interested_btn {
  border: 0.25rem solid gray;
  border-radius: 2rem;
  padding: 0.5rem;
  margin-left: 3rem;
}
.interested_btn:hover {
  background-color: lightgray;
}
</style>
