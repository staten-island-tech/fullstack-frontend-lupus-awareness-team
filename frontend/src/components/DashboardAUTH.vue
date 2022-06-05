<template>
  <section id="dashboard_section">
      <div class="profile_container">
        <div class="profile_component">
            <Profile
            :image="user.avatar"
            :name="`${ user.firstName} ${ user.lastName }`"
            :id="user._id"
            :role="user.role"
            />
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
// import PastEvents from "@/components/PastEvents.vue";
import HTTP from '../axiosConfig'
import Previous from "@/components/PastEvents.vue";


export default {
name: "DashbardAUTH",
data() {
  return {
    tabs: ["Hosting", "Previous"],
    selected: "Hosting",
    eventArr: [],
    user: this.$store.state.user
  }
},
methods: {
    fetchEvents: async function() {
      try {
        const res = await HTTP.get("getEvents")
        console.log(res.data)
        this.eventArr = res.data
      } catch (error) {
        console.log(error)
      }
    },
},
computed: {
},
created: async function() {
  // this.fetchData();
  await this.fetchEvents()
  console.log(this.$store.state.user)
},
components: {
  Profile,
  CalendarMonth,
  ToDoList,
  Hosting,
  Previous,
  // PastEvents,
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
    background-color: var(--dbLight);
    padding-top: 6rem;
    padding-bottom: 0rem;
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
  padding-bottom: 3rem;
}


.events_wrapper {
  width: 60%;
  display: inline-flex;
  flex-direction: column;
  background-color: var(--dbSecondary);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px, rgb(0, 0, 5) 0px 0px 0px 0.5px;
}

.events_tab {
  width: 100%;
  display: flex;
  align-items: center;
}

.events_tab ul{
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 2px;
  
}

.event_tab_switch {
    cursor: pointer;
  border: none;
  color: var(--eventTab);
  font-size: 1.8rem;
  text-decoration: none;
  list-style: none;
  padding: 1rem 2.5rem;
  background-color: var(--eventBG);
  margin-bottom: 1.5rem;
  box-shadow: rgba(50, 50, 93, 0.5) 0px 2px 5px -1px, rgba(0, 0, 1, 1) 0px 2px 4px -1px;
  margin-right: 0.5rem;
}


.calendar_container {
  width: 100%;
  margin: 5rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 3rem 0rem;
}

.calendar_wrapper {
  width: 40%;
}

@media (min-width:320px)  {

    .calendar_container {
    flex-direction: column;
  }

  span {
    font-size: 1.5rem;
  }

  .calendar-month {
    margin-bottom: 5rem;
  }

    .list_wrapper {
    width: 85%;
  }

  .calendar_wrapper {
    width: 85%;
  }

  .events_wrapper {
   width: 70%;
  }


#dashboard_section {
    padding-bottom: 8rem;
}
}
@media (min-width:481px)  { 

  .list_wrapper {
    width: 75%;
  }

  .calendar_wrapper {
    width: 70%;
  }

  .subcribe_button {
    margin-left: 0rem;
  }

 }
@media (min-width:641px)  {

  .list_wrapper {
    width: 70%;
  }

  .calendar_wrapper {
    width: 70%;
  }

  .events_wrapper {
    width: 80%;
  }
  .dashboard_section {
    padding-bottom: 0rem;
  }

 }
@media (min-width:961px)  { 
    .calendar_container {
    flex-direction: row;
  }

  .list_wrapper {
    width: 50%;
  }

  .calendar_wrapper {
    width: 40%;
  }

  .events_wrapper {
    width: 60%;
  }

}
@media (min-width:1025px) { 

    .calendar-month {
    margin-bottom: 0rem;
  }

  .list_wrapper {
    width: 35%;
  }

  .calendar_wrapper {
    width: 35%
  }

  span {
    font-size: 1.25rem;
  }
 }
@media (min-width:1281px) { 
    .list_wrapper {
    width: 40%;
  }

 }






</style>