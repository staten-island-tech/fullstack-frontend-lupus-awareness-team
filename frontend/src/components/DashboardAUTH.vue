<template>
  <section class="dashboard-section">
    <Profile />
  </section>
</template>

<script>
import Profile from "@/components/Profile.vue"
export default {
  name: "DashbardAUTH",
components: {
  Profile
}
}
</script>

<style>
.dashboard-section {
background: hsla(343, 50%, 95%, 1);

background: radial-gradient(circle, hsla(343, 50%, 95%, 1) 0%, hsla(237, 29%, 85%, 1) 0%, hsla(274, 25%, 89%, 1) 0%, hsla(237, 30%, 85%, 1) 64%, hsla(346, 48%, 95%, 1) 82%);

background: -moz-radial-gradient(circle, hsla(343, 50%, 95%, 1) 0%, hsla(237, 29%, 85%, 1) 0%, hsla(274, 25%, 89%, 1) 0%, hsla(237, 30%, 85%, 1) 64%, hsla(346, 48%, 95%, 1) 82%);

background: -webkit-radial-gradient(circle, hsla(343, 50%, 95%, 1) 0%, hsla(237, 29%, 85%, 1) 0%, hsla(274, 25%, 89%, 1) 0%, hsla(237, 30%, 85%, 1) 64%, hsla(346, 48%, 95%, 1) 82%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#f8eaee", endColorstr="#cecfe4", GradientType=1 );
}

</style>