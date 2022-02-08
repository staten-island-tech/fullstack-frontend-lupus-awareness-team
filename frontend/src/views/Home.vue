<template>
  <div class="home">
    <h4>This is the Home/Splash Page</h4>
    <Event />
  </div>
</template>

<script>
// @ is an alias to /src
import Event from '@/components/Event.vue'

export default {
  name: 'Home',
  components: {
    Event,
  }
}
</script>

<style>
.home {
  margin-top: 1rem;
}
</style>