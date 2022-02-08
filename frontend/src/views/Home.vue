<template>
  <div class="home">
    <EventLong/>
  </div>
</template>
<script>
// @ is an alias to /src
import Event from '@/components/Event.vue'
import EventLong from '../components/EventDetails.vue'

export default {
  name: 'Home',
  components: {
    EventLong
  }
}
</script>

<style>

.home {
  margin-top: 1rem;
}
</style>