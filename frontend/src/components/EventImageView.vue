<template>
  <div class="event_images_container">
      <div class="image_view" v-for="img in [currentIndex]" :key="img">
          <img :src="currentImg" alt="">
      </div>
      <button @click="prev" class="prev">&#10094;</button>
      <button  @click="next" class="next">&#10095;</button>
  </div>
</template>

<script>
export default {
    name: "ImageView",
    data() {
        return {
            images:[
        "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
      ],
            currentIndex: 0
        }
    },
    methods: {
        next: function() {
            this.currentIndex +=1
        },
         prev: function() {
      this.currentIndex -= 1;
        }
    },

    computed: {
        currentImg: function() {
        return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }


}
</script>

<style scoped>
img {
    width: 80%;
    margin: 0 auto;
}

.prev, .next {
  cursor: pointer;
  position: relative;
  top: 40%;
  width: 10%;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>