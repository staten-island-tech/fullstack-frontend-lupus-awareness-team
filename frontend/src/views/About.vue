<template>
  <div class="dashboard">
    <DashboardAUTH/>
  </div>
</template>

<script>
import DashboardAUTH from "@/components/DashboardAUTH.vue"

export default {
  name: 'Home',
  components: {
    DashboardAUTH,
  }
}
</script>

<style>
.dashboard {
background: hsla(343, 47%, 94%, 1);

background: radial-gradient(circle, hsla(343, 47%, 94%, 1) 14%, hsla(267, 36%, 89%, 1) 46%, hsla(270, 33%, 89%, 1) 67%, hsla(347, 50%, 95%, 1) 84%);

background: -moz-radial-gradient(circle, hsla(343, 47%, 94%, 1) 14%, hsla(267, 36%, 89%, 1) 46%, hsla(270, 33%, 89%, 1) 67%, hsla(347, 50%, 95%, 1) 84%);

background: -webkit-radial-gradient(circle, hsla(343, 47%, 94%, 1) 14%, hsla(267, 36%, 89%, 1) 46%, hsla(270, 33%, 89%, 1) 67%, hsla(347, 50%, 95%, 1) 84%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F7E9ED", endColorstr="#E2D9ED", GradientType=1 );
}


</style>


