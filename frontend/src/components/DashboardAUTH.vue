<template>
  <section id="dashboard_section">
      <div class="profile_container">
        <div class="profile_component">
            <Profile />
        </div>
      </div>

  <div class="events_container">
    <div class="events_tab">
      <ul>
        <button v-for="tab in tabs" :key="tab" @click="selected = tab;" class="event_tab_switch">{{ tab }}</button>
      </ul>
    </div>

    <div class="events_wrapper">
      <component :is="selected"></component>
      <h4 class="events_text"></h4>
    </div>
  </div>

   <div class="calendar_container">
      <div class="calendar_wrapper">
        <CalendarMonth/>
      </div>

      <div class="list_wrapper">
        <ToDoList/>
      </div>
    </div>


  </section>
</template>

<script>
import Profile from "@/components/Profile.vue";
import CalendarMonth from "@/components/Calendar/CalendarMonth.vue";
import ToDoList from "@/components/ToDoList.vue";
import Hosting from "@/components/Hosting.vue";
import PastEvents from "@/components/PastEvents.vue";

export default {
name: "DashbardAUTH",
data() {
  return {
    tabs: ["Hosting", "PastEvents"],
    selected: "Hosting",
  }
},
created() {
  fetch('https://my-json-server.typicode.com/staten-island-tech/fullstack-frontend-lupus-awareness-team')
  .then(response => response.json())
  .then(json => console.log(json))
},
components: {
  Profile,
  CalendarMonth,
  ToDoList,
  Hosting,
  PastEvents,
}
}
</script>

<style scoped>
#dashboard_section {
  display: flex;
  flex-direction: column;
  align-items: center;
    background-color: var(--dbPrimary);
}

.profile_container {
  width: 100%;
  background-color: var(--dbTertriary);
}


.profile_component {
display: flex;
flex-direction: column;
align-items: center;
}

.events_container {
  padding-top: 5rem;
  width: 100%;
  display: flex; 
  flex-direction: column;
  align-items: center;
}


.events_wrapper {
  width: 70%;
  display: inline-flex;
  flex-direction: column;
  z-index: 2;
  background-color: var(--dbLight);
  padding: 2rem 0rem 20rem 2rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px, rgb(0, 0, 5) 0px 0px 0px 1px;
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

.event_tab_switch {
  border: none;
  color: var(--eventTab);
  font-size: 2rem;
  z-index: 3;
  text-decoration: none;
  list-style: none;
  padding: 1rem 1rem;
  background-color: var(--dbAccent);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px, rgb(0, 0, 6) 0px 0px 0px 1px;
 border-radius: 0.8rem 0.8rem 0rem 0rem;
}

.calendar_container {
  width: 100%;
  margin: 5rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.calendar_wrapper {
  width: 40%;
}

.list_wrapper {
  width: 35%;
  background-color: var(--dbLight);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px, rgb(0, 0, 5) 0px 0px 0px 1px;
}





</style>