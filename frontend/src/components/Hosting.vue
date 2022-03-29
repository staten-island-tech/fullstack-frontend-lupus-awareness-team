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
      hostArr: []
    }
  },
  methods: {
        fetchHost: async function () {
        try {
        const response = await fetch('https://my-json-server.typicode.com/Evany226/demo/hosted');
        const data = await response.json();
        this.hostArr = data;
        console.log(this.hostArr)
      } catch(error) {
          console.log(error)
      }
    },
  },
  created() {
    this.fetchHost();
  }
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
