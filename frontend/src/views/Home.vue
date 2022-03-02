<template>
  <div class="home">
    <EventLong />
    <Test />
  </div>
</template>
<script>
import EventLong from "../components/EventDetails.vue";
import Test from "@/components/Testing.vue";

// @ is an alias to /src

export default {
  name: "Home",
  components: {
    EventLong,
    Test,
  },
};
</script>

<style>
.home {
  margin-top: 1rem;
}
</style>
