<template>
  <div class="home">
    <Event />
    <Login />
  </div>
</template>
<script>
// @ is an alias to /src
import Event from '@/components/Event.vue'
import Login from '@/components/LoginPage.vue'


export default {
  name: 'Home',
  components: {
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