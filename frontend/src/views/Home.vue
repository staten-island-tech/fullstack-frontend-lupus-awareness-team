<template>
  <div class="home">
    <DashboardAUTH/>
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardAUTH from "@/components/DashboardAUTH.vue"

export default {
  name: 'Home',
  components: {
    DashboardAUTH,
  }
}
</script>
