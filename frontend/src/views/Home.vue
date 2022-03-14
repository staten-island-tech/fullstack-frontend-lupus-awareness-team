<template>
  <div class="home">
    <h4>This is the Home/Splash Page</h4>
    <EventDetails />
    <!-- <Test /> -->
  </div>
</template>
<script>
import EventDetails from "../components/EventDetails.vue";
// import Test from "@/components/Testing.vue";

// @ is an alias to /src
    <Event />
    <Login />
  </div>
</template>
<script>
// @ is an alias to /src
import Event from '@/components/Event.vue'
import Login from '@/components/LoginPage.vue'


export default {
  name: "Home",
  components: {
    EventDetails,
    // Test,
  },
};
    Event,
    Login
  }
}
</script>

<style>
.home {
  margin-top: 1rem;
}
</style>
