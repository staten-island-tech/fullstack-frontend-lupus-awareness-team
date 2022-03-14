<template>
  <div class="event_images_container">
    <div class="view_container">
      <div class="image_view" v-for="img in [currentIndex]" transition="fade"  :key="img">
            <img class="slide-image" :src="currentImg" alt="">
      </div>
   
      <div class="image_buttons">
        <button @click="prev" class="prev">&#10094;</button>
        <button  @click="next" class="next">&#10095;</button>
      </div>
    </div>
    <ul class="event_image_bar">
        <li class="event_image_preview" v-for="img in images" :key="img">
          <img @click="test(img)" :src="img" alt=""/>
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
            currentIndex: 0,
            imgIndex:0
            
        }
    },
    methods: {
        next: function() {
            this.currentIndex +=1
        },
        prev: function() {
            this.currentIndex -= 1;
        },
        test: function(img) {
          this.imgIndex = this.images.indexOf(img),
          this.currentIndex=this.imgIndex
        }
    },

    computed: {
        currentImg: function() {
        return this.images[Math.abs(this.currentIndex) % this.images.length];
      },
        

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
  width: 100%;
  height: 40vh;
  border: .25rem solid gray;
  border-radius: 5rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
}
.view_container {
  height: 40vh;
}
.image_buttons{
  width: 100%;
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  z-index: 10;
  height: 40vh;
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
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 10vh;
}

.event_image_preview img {
  height: 80%;
  display: flex;
  padding: .45rem;
  border-radius: 1rem;
}
.event_image_preview img:hover {
  border:  .25rem solid var(--dark);
  background-color: white;
}
.event_image_preview {
  height: 100%;
  display: flex; 
  align-items: center;
  justify-content: center;
}
</style>