<template>
      <ul class="hosting_list">
        <li class="hosting_list_item">
          <div class="hosting_text">
            <h4 class="hosting_name"> {{ eventData.name}} </h4>
            <h5 class="hosting_date"> {{ eventData.start}} </h5>
          </div>
          <div class="hosting_image">
            <img :src="eventData.media[0]">
          </div>
        </li>
      </ul>
</template>

<script>
export default {
  name: 'DashboardEvent',
  props: {
    eventData: Object
  },
  data() {
    return {
      hostArr: []
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
  text-align: center;
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
