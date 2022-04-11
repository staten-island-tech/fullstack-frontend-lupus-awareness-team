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
    pastArr: []
  }
},
methods: {
          fetchPast: async function () {
        try {
        const response = await fetch('https://my-json-server.typicode.com/Evany226/demo/pastArr');
        const data = await response.json();
        this.pastArr = data;
        console.log(this.pastArr)
      } catch(error) {
          console.log(error)
      }
    },
},
created() {
  this.fetchPast();
}
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
    text-align: center;
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