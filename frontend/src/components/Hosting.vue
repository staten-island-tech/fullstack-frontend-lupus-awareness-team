<template>
      <ul class="hosting_list">
        <li class="hosting_list_item" v-for="host in hostArr" :key="host.eventName">
          <div class="hosting_text">
            <h4 class="hosting_name">  </h4>
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
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hosting_list {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.hosting_list_item {
  background-color: white;
  width: 60%;
  height: 80%;
}




</style>
