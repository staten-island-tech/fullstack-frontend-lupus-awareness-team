<template>
      <ul class="list_container">
          <li v-for="event in eventList" :key="event.eventName" class="list_item">
              <div class="list_image">
                  <img :src="event.eventImage" alt="" class="list_src">
              </div>
                <div class="list_text">
                    <h4 class=""> {{event.eventName}} </h4>
                    <h5 class=""> {{event.eventDate}} </h5>
                </div>
                <div class="list_time">
                    <h4 class=""> {{event.eventTime}}</h4>
                </div>
          </li>
          
      </ul>
</template>

<script>
export default {
name: "ToDoList",
data() {
    return {
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
                eventTime: '4:00 - 5:00'
            },
            {
                eventName: 'Event 3',
                eventDate: 'Friday, March 18th',
                eventImage: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                eventTime: '4:00 - 5:00'
            },
            {
                eventName: 'Event 4',
                eventDate: 'Wednesday, March 23th',
                eventImage: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                eventTime: '4:00 - 5:00'
            }
        ],
    }
},
}
</script>

<style>

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
    background-color: var(--dbPrimary);
}

.list_image {
    width: 30%;
    display:flex;
    align-items: center;
    justify-content: center;
}

.list_text {
    width: 40%;
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
    color: var(--eventTab);
}

.list_time {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--dbTertriary);
    color: var(--eventTab);
    width: 30%;
}

.list_src {
    width: 60%;
    border-radius: 0.5rem;
}

</style>