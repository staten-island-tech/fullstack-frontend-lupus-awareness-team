<template>
  <div class="event_details_container">
    <div class="column">
      <h2 class="event_name">Volunteer</h2>
      <EventImageView/>
      
      <div class="event_details">
        <h4 class="event_time">2:00 PM - 4:00 PM</h4>
        <h4 class="event_location">Dog Park, Full Address</h4>
        <h5 class="event_date">Saturday, April 2</h5>
      </div>
      <div class="event_desc">
        <h4>Event Description:</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          assumenda, rem fugiat ratione recusandae deleniti eveniet quae dolor
          non quo quam aspernatur mollitia sapiente molestias eaque qui magni.
          Qui, expedita.
        </p>
      </div>
    </div>
    <div class="column">
      <div class="user_info_brief">
        <div class="user_profile_picture">
          <img src="../assets/placeholder.jpg" alt="temporary" />
        </div>
        <h3 class="user_name">user1123</h3>
      </div>
      <div class="organization_info">
        <div class="organization_name organization_detail">
          <h4>Organization:</h4>
          <p>abc animals</p>
        </div>
        <div class="organization_contact organization_detail">
          <h4>Contact Information</h4>
          <p>example@email.com</p>
          <p>111-111-1111</p>
        </div>
        <div class="organization_address organization_detail">
          <h4>Organization Address</h4>
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
      
    </div>
  </div>
</template>

<script>
import EventImageView from '../components/EventImageView.vue'
export default {
  name: "EventDetails",
  components: {
    EventImageView,
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Merriweather+Sans:wght@700&display=swap');
body {
  background-color: var(--background);
  box-sizing: border-box;

}
.event_name {
  margin: 3rem;
}
.event_details_container {
  font-family: "Merriweather Sans", sans-serif;
  width: 100%;
  height: 100%;
  padding: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.column {
  display: flex;
  flex-direction: column;
  width: 45%;
  background-color: var(--pink);
  padding: 3rem;
}
.event_image img {
  margin: 2rem auto;
  width: 90%;
  display: flex;
  justify-content: center;
  border-radius: 1.5rem;
}
.event_image_bar {
  width: 85%;
  height: 10%;
  margin: 0.25rem auto;
  display: flex;
  justify-content: center;
}
.event_image_preview img {
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  margin: 1rem auto;
  border-radius: 0.5rem;
}
.event_details {
  font-family: 'Inter', sans-serif;
  padding: 2rem;
  height: 20%;
  width: 80%;
  font-size: 2.5rem;
  background-color: var(--accent);
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
}

.event_image_preview img:hover {
  border: .25rem solid white;
  outline: var(--dark) solid 0.35rem;
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
  background-color: var(--accent);
  border-radius: 1.5rem;
  margin: 2rem auto;
}
.organization_detail {
  padding: 1rem;
  border-bottom: 0.1rem solid var(--dark);
}
.event_desc {
  font-size: 2rem;
  background-color: var(--accent);
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
.event_time , .event_date {
  font-style: italic;
}
.event_desc , .event_details {
  margin: 2rem;
}
</style>
