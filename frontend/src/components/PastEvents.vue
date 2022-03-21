<template>
      <ul class="past_list">
        <li class="past_list_item" v-for="host in hostArr" :key="host.eventName">
          <div class="past_text">
            <h4 class="past_name"> {{ host.eventName}} </h4>
            <h5 class="past_date"> {{ host.eventDate}} </h5>
          </div>
          <div class="past_image">
            <img :src="host.eventImage">
          </div>
        </li>
      </ul>
</template>

<script>

export default {
name:"PastEvents",
}
</script>

<style scoped>


</style>