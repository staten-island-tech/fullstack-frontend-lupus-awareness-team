<template>
      <ul class="past_list">
        <li class="past_list_item" v-for="past in pastArr" :key="past.eventName">
          <div class="past_text">
            <h4 class="past_name"> {{ past.eventName}} </h4>
            <h5 class="past_date"> {{ past.eventDate}} </h5>
          </div>
          <div class="past_image">
            <img :src="past.eventImage">
          </div>
        </li>
      </ul>
</template>

<script>

export default {
name:"PastEvents",
data() {
  return {
    pastArr: [
          {
                eventName: 'Event 1',
                eventDate: 'Monday, January 3rd',
                eventImage: "https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cml2ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                eventTime: '4:00 - 5:00'
            },
            {
                eventName: 'Event 2',
                eventDate: 'Wednesday, February 16th',
                eventImage: "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cml2ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                eventTime: '5:00 - 6:00'
            },
            {
                eventName: 'Event 3',
                eventDate: 'Thursday, January 20th',
                eventImage: "https://images.unsplash.com/photo-1506355683710-bd071c0a5828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cml2ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                eventTime: '7:00 - 8:00'
            },
      ]
  }
},
}
</script>

<style scoped>
.past_list {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 0;
}

.past_list_item {
  margin: 2rem;
  background-color: white;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
}

.past_text {
  padding: 2rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.past_date {
  font-weight: 500;
}

.past_image {
  width: 70%;
  margin-bottom: 2rem;
}

img {
  width: 100%;
  height: 100%;
}


</style>