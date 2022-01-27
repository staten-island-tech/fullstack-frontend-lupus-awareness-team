<template>
  <div class="home">
    <h4>This is the Home/Splash Page</h4>
    <EventLong/>
  </div>
</template>

<script>
import EventLong from '../components/EventDetails.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    EventLong
  }
}
</script>
