<template>
  <div class="event_images_container">

        <div class="image_view" v-for="img in [currentIndex]" transition="fade"  :key="img">
            <img class="slide-image" :src="currentImg" alt="">
        </div>
   
    <div class="image_buttons">
        <button @click="prev" class="prev">&#10094;</button>
        <button  @click="next" class="next">&#10095;</button>
    </div>
    <ul class="event_image_bar">
        <li class="event_image_preview" v-for="img in images" :key="img">
          <img :src="img" alt=""/>
        </li>
      </ul>
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
.event_images_container {
  width: 100%;
  position: relative;
}
.fade-transition {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter, .fade-leave {
  opacity: 0;
  visibility: hidden;
}
.image_view{
  background-color: darkgray;
  width: 50%;
  height: 30vh;
  border: .25rem solid gray;
  border-radius: 5rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
}
.image_buttons{
  width: 50%;
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  z-index: 10;
  height: 100%;
  align-items: center;
  transform: translateY(-100%);
}

.prev, .next {
  cursor: pointer;
  position: static;
  top: 40%;
  width: 15%;
  padding: 1rem;
  height: 20%;
  color: white;
  font-weight: bold;
  font-size: 3rem;
  transition: 0.5s ease;
  text-decoration: none;
  user-select: none;
  border: none;
  background-color: rgba(110, 110, 110,0.8);
}
.prev {
    border-radius: 1rem 0 0 1rem;
}
.next {
    border-radius: 0 1rem 1rem 0;
}
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}
.event_image_bar {
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  padding: 3rem;
}

.event_image_preview img {
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  margin: .55rem;
  border-radius: 0.5rem;
}
.event_image_preview img:hover {
  border:  .35rem solid var(--dark);
  background-color: white;
  padding: .25rem;
}
.event_image_preview {
  width: 10vw;
  height: 10vh;
  display: flex;
  align-items: center;
  transition: all 3s;
}
</style>