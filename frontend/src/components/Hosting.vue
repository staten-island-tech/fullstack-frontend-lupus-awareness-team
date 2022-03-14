<template>
      <ul class="hosting_list">
        <li class="hosting_list_item" v-for="host in hostArr" :key="host.eventName">
          <div class="hosting_text">
            <h4 class="hosting_name"> {{ host.eventName}} </h4>
            <h5 class="hosting_date"> {{ host.eventDate}} </h5>
          </div>
          <div class="hosting_image">
            <img :src="host.eventImage">
          </div>
        </li>
      </ul>
</template>

<script>
export default {
  name: 'Hosting',
  props: {
  },
  data() {
    return {
      hostArr: [
          {
                eventName: 'Event 1',
                eventDate: 'Tuesday, March 1st',
                eventImage: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
                eventTime: '4:00 - 5:00'
            },
            {
                eventName: 'Event 2',
                eventDate: 'Thursday, March 10th',
                eventImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                eventTime: '5:00 - 6:00'
            },
            {
                eventName: 'Event 3',
                eventDate: 'Friday, March 18th',
                eventImage: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                eventTime: '7:00 - 8:00'
            },
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hosting_list {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 0;
}

.hosting_list_item {
  margin: 2rem;
  background-color: white;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
}

.hosting_text {
  padding: 2rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hosting_date {
  font-weight: 500;
}

.hosting_image {
  width: 70%;
  margin-bottom: 2rem;
}

img {
  width: 100%;
  height: 100%;
}



</style>
