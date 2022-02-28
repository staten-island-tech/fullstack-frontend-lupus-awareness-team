<template>
  <div class="event_images_container">
    <transition-group name="fade" tag="div">
        <div class="image_view" v-for="img in [currentIndex]" :key="img">
            <img class="slide-image" :src="currentImg" alt="">
        </div>
    </transition-group>
    <div class="image_buttons">
        <button @click="prev" class="prev">&#10094;</button>
        <button  @click="next" class="next">&#10095;</button>
    </div>
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
    width: 100%;
    margin: 0 auto;
    
}
.image_view{
  width: 50%;
}
.image_buttons{
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;

  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;

  opacity: 0;
}
.prev, .next {
  cursor: pointer;
  position: relative;
  top: 40%;
  width: 20%;
  padding: 1rem;
  margin: auto .25rem;
  color: white;
  font-weight: bold;
  font-size: 3rem;
  transition: 0.5s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
  border: .25rem solid white;
  background-color: gray;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}
</style>