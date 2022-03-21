<template>
  <div class="home">
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
}


.event-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
