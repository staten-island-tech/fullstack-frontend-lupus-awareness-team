<template>
  <div class="home"> 
    <div class="text-container">
      <h2 id="browse">Browse Events</h2>
    </div> 
    <div class="event-wrapper">
        <Event />
        <Event />
        <Event />
    </div>
  </div>
</template>
<script>
//import EventDetails from "../components/EventDetails.vue";
//import Login from '@/components/LoginPage.vue'
import Event from '@/components/Event.vue'

// import Test from "@/components/Testing.vue";

export default {
  name: "Home",
  components: {
    //EventDetails,
    Event,
    //Login,
    // Test,
  },
};
  
</script>

<style>
.home {
    background-image: url("../assets/dogPark.jpg");
  background-color: var(--background);
    background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  padding-top: 3rem;
}

.text-container{
  display: flex;
  align-items: center;
  justify-content: center;
  
}

#browse {
    background-color: var(--white);
    padding: 1rem 2rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

}



.event-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
