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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.profile_component {
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
  background-color: var(--secondary);
  z-index: 1;
}


.events_container {
  width: 70%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  background-color: var(--primary);
  position: relative;
  padding: 8rem 0rem;
}

.events_text {
  z-index: 3;
}

.events_subtext {
  z-index: 3;
}



</style>