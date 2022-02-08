<template>
  <div class="home">
    <Event />
    <h4>This is the Home/Splash Page</h4>
    <EventLong/>
  </div>
</template>
<script>

import EventLong from '../components/EventDetails.vue'
// @ is an alias to /src
import Event from "@/components/Event.vue"

export default {
  name: 'Home',
  components: {
    Event,
    EventLong
  }
}
</script>

<style>

.home {
  margin-top: 1rem;
}
</style>