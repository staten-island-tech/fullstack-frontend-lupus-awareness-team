<template>
  <section id="dashboard_section">
    <div class="profile_component">
    <Profile />
    </div>

    <div class="events_container">
      <h2 class="events_text">Hello World</h2>
      <h3 class="events_subtext">Goodbye World</h3>
    </div>
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

#dashboard-section {
  width: 100%;
}

.profile_component {
background: hsla(343, 50%, 95%, 1);
background: radial-gradient(circle, hsla(343, 50%, 95%, 1) 0%, hsla(237, 29%, 85%, 1) 0%, hsla(274, 25%, 89%, 1) 0%, hsla(237, 30%, 85%, 1) 64%, hsla(346, 48%, 95%, 1) 82%);
background: -moz-radial-gradient(circle, hsla(343, 50%, 95%, 1) 0%, hsla(237, 29%, 85%, 1) 0%, hsla(274, 25%, 89%, 1) 0%, hsla(237, 30%, 85%, 1) 64%, hsla(346, 48%, 95%, 1) 82%);
background: -webkit-radial-gradient(circle, hsla(343, 50%, 95%, 1) 0%, hsla(237, 29%, 85%, 1) 0%, hsla(274, 25%, 89%, 1) 0%, hsla(237, 30%, 85%, 1) 64%, hsla(346, 48%, 95%, 1) 82%);
filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#f8eaee", endColorstr="#cecfe4", GradientType=1 );

display: flex;
flex-direction: column;
align-items: center;

}


.profile_component:after {
    content: '';
  border-top-left-radius: 50% 40%;
  border-top-right-radius: 50% 40%;
  position: absolute;
  bottom: 0;
  height: 75%;
  width: 100%;
  background-color: white;
  z-index: 1;
}


.events_container {
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
}



</style>