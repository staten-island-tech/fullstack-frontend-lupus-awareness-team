<template>
  <section id="dashboard_section">
    <div class="curved_container">
    <div class="profile_component">
      <Profile />
    </div>

    <div class="events_tab">
      <ul>
        <li>Interested</li>
        <li>Hosting</li>
        <li>Past Events</li>
      </ul>
    </div>

    <div class="events_container">
      <h4 class="events_text"></h4>
    </div>

    <div class="calendar_container">
      <CalendarMonth/>
    </div>

    </div>

  </section>
</template>

<script>
import Profile from "@/components/Profile.vue";
import CalendarMonth from "@/components/Calendar/CalendarMonth.vue";

export default {
  name: "DashbardAUTH",
components: {
  Profile,
  CalendarMonth
}
}
</script>

<style>

#dashboard_section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.curved_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.container::before {
  bottom: 100%;
  content: '';
  height: 103px;
  position: absolute;
  width: 100%;
}


.profile_component {
display: flex;
flex-direction: column;
align-items: center;
}


.events_container {
  width: 70%;
  display: inline-flex;
  flex-direction: column;
  z-index: 2;
  background-color: var(--primary);
  padding: 2rem 0rem 15rem 2rem;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px, rgb(0, 0, 5) 0px 0px 0px 2px;
}

.events_text {
  z-index: 3;
}

.events_tab {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.events_tab ul{
  display: flex;
  z-index: 3;
  width: 70%;
  padding-left: 2rem;
  margin-bottom: 2px;
}

.events_tab li {
  color: var(--text);
  font-size: 2rem;
  z-index: 3;
  text-decoration: none;
  list-style: none;
  padding: 1rem 1rem;
  background-color: var(--accent);
 box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px, rgb(0, 0, 5) 0px 0px 0px 2px;
 border-radius: 1rem 1rem 0rem 0rem;
}

.calendar_container {
  width: 40vw;
  margin-top: 7rem;
}


</style>