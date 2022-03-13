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
        <ul class="list_container">
            <li v-for="event in eventArr" :key="event.eventName" class="list_item">
                <ToDoList :eventInfo="eventArr"/>
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

export default {
name: "DashbardAUTH",
data() {
  return {
    tabs: ["Hosting", "PastEvents"],
    selected: "Hosting",
    eventArr: [],
  }
},
methods: {
    fetchData: async function () {
        try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      eventList: [
            {
                eventName: 'Event 1',
                eventDate: 'Tuesday, March 1st',
                eventImage: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                eventTime: '4:00 - 5:00'
            },
            {
                eventName: 'Event 2',
                eventDate: 'Thursday, March 10th',
                eventImage: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                eventTime: '5:00 - 6:00'
            },
            {
                eventName: 'Event 3',
                eventDate: 'Friday, March 18th',
                eventImage: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                eventTime: '7:00 - 8:00'
            },
            {
                eventName: 'Event 4',
                eventDate: 'Wednesday, March 23th',
                eventImage: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                eventTime: '8:00 - 9:00'
            }
        ],
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
const data = await response.json();
this.eventArr = data.eventList;
console.log(this.eventArr)
      } catch(error) {
          console.log(error)
      }
    },
},
created() {
  this.fetchData();
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



.hosting_list {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}


.list_container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.list_item {
    display: flex;
    font-size: 3rem;
    width: 90%;
    height: 20%;
    margin: 1.5rem 2rem;
    border-radius: 0.5rem;
    background-color: var(--dbTertiary);
}


#dashboard_section {
  display: flex;
  flex-direction: column;
  align-items: center;
    background-color: var(--dbPrimary);
}

.profile_container {
  width: 100%;
  background-color: var(--dbTertiary);
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
  background-color: var(--dbLight);
  padding: 2rem 0rem 20rem 2rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px, rgb(0, 0, 5) 0px 0px 0px 0.5px;
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
  width: 60%;
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

.list_wrapper {
  width: 35%;
  background-color: var(--dbSecondary);
  border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px, rgb(0, 0, 6) 0px 0px 0px 0.5px;
}





</style>