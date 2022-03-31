<template>
  <div class="home">
    <EventDetails />
  
    <!-- <Test /> -->
  </div>
</template>
<script>
import EventDetails from "../components/EventDetails.vue";
//import Login from '@/components/LoginPage.vue'
//import Event from '@/components/Event.vue'

// import Test from "@/components/Testing.vue";

export default {
  name: "Home",
  components: {
    EventDetails,
   // Event,
   // Login,
    // Test,
  },
};
  
</script>

<style>
.home {
  margin-top: 1rem;
}
</style>
