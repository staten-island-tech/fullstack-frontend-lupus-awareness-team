<template>
  <section id="dashboard_section">
      <div class="profile_container">
        <div class="profile_component">
            <Profile />
        </div>
      </div>
  <div class="divider"></div>
  <div class="events_container">
    <div class="events_tab">
      <ul>
        <button v-for="tab in tabs" :key="tab" @click="selected = tab;" class="event_tab_switch">{{ tab }}</button>
      </ul>
    </div>

    <div class="events_wrapper">
      <component :is="selected"></component>
    </div>
  </div>

   <div class="calendar_container">
      <div class="calendar_wrapper">
        <CalendarMonth/>
      </div>

      <div class="list_wrapper">
        <ul class="list_container">
            <li v-for="event in eventArr" :key="event.id" class="list_item">
              <ToDoList :eventInfo="eventArr" />
            </li>
        </ul>
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
import {HTTP} from '../axiosConfig'

export default {
name: "DashbardAUTH",
data() {
  return {
    tabs: ["Hosting", "PastEvents"],
    selected: "Hosting",
    eventArr: [],
    user: this.$store.state.user
  }
},
methods: {
    fetchData: async function () {
        try {
        const response = await fetch('https://my-json-server.typicode.com/Evany226/demo/eventList');
        const data = await response.json();
        this.eventArr = data;
        console.log(this.eventArr)
      } catch(error) {
          console.log(error)
      }
    },
    fetchEvents: async function() {
      try {
        console.log(this.$store.state.user._id)
        const res = await HTTP.get("getEvents", this.$store.state.user._id)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
},
created() {
  this.fetchData();
  this.fetchEvents()
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

<style>

.list_wrapper {
  width: 35%;
  background-color: var(--dbSecondary);
  border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px, rgb(0, 0, 6) 0px 0px 0px 0.5px;
}


.list_container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.divider {
  border: solid 0.01rem #a7a6a6;
  width: 90%;
}

.list_item {
    display: flex;
    font-size: 3rem;
    width: 90%;
    height: 20%;
    margin: 1.5rem 2rem;
    border-radius: 0.5rem;
    background-color: var(--dbLight);
}


#dashboard_section {
  display: flex;
  flex-direction: column;
  align-items: center;
    background-color: var(--dbTertiary);
}

.profile_container {
  width: 100%;
  background-color: var(--dbLight);
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
  width: 60%;
  display: inline-flex;
  flex-direction: column;
  z-index: 2;
  background-color: var(--dbSecondary);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px, rgb(0, 0, 5) 0px 0px 0px 0.5px;
}

.events_tab {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center
}

.events_tab ul{
  display: flex;
  z-index: 3;
  width: 60%;
  padding-left: 2rem;
  margin-bottom: 2px;
}

.event_tab_switch {
    cursor: pointer;
  border: none;
  color: var(--eventTab);
  font-size: 2rem;
  z-index: 3;
  text-decoration: none;
  list-style: none;
  padding: 1rem 1rem;
  background-color: var(--dbAccent);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px, rgb(0, 0, 6) 0px 0px 0px 0.5px;
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






</style>