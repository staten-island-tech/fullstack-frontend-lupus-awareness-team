<template>
  <div class="event_images_container">
    <div class="view_container">
      <div class="image_view"  v-for="img in [currentIndex]" transition="fade"  :key="img" >
            <img class="slide-image"  :src="currentImg" alt="">
      </div>
   
      <div class="image_buttons">
        <button @click="prev" class="prev">&#10094;</button>
        <button  @click="next"  class="next">&#10095;</button>
      </div>
    </div>
    <ul class="event_image_bar">
      <li>
          <button v-if="sliceBegin != 0" @click="sliceBackward">&#10094;</button>
        </li>
        <li class="event_image_preview" v-for="img in previewBarImages" :key="img">
          <img @click="selectImg(img), selectPreview(img,$event)" :class="{active: this.currentImg === this.selectedComponent}" :src="img" alt=""/>
        </li>
        <li>
          <button v-if="sliceBegin +4 < images.length" @click="sliceForward">&#10095;</button>
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
        "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg", "https://cdn.pixabay.com/photo/2020/03/09/17/51/narcis-4916584_960_720.jpg","https://images.unsplash.com/photo-1431965400057-a84b80cfdbff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80","https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg", "https://cdn.pixabay.com/photo/2020/03/09/17/51/narcis-4916584_960_720.jpg","https://images.unsplash.com/photo-1431965400057-a84b80cfdbff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        
        ],
            
            currentIndex: 0,
            imgIndex:0,
            sliceBegin: 0,
            selectedImg: "" ,




            
            
        }
    },
    methods: {
        next: function() {
            this.currentIndex +=1
        },
        prev: function() {
            this.currentIndex -= 1;
        },
        selectImg: function(img) {
          this.imgIndex = this.images.indexOf(img),
          this.currentIndex = this.imgIndex

        },
        sliceForward: function() {
          this.sliceBegin = this.sliceBegin +3

        },
        sliceBackward: function() {
          this.sliceBegin = this.sliceBegin -3
 
        },
        selectPreview: function(e, event){
          if(this.selectedImg){
              this.selectedImg.classList.remove('active')
          }
          this.selectedImg = event.target;
          console.log(this.selectedImg)
          this.selectedImg.classList.add('active');

          this.selectedComponent = e;
          console.log(this.selectedComponent)
        },
        
    },
    computed: {
        currentImg: function() {
        return this.images[Math.abs(this.currentIndex) % this.images.length];
        },
        previewBarImages: function() {
          return this.images.slice(this.sliceBegin,this.sliceBegin +4)
        },
    }


}
</script>

<style scoped>

.image_view img {
    width: 100%;
    margin: 0 auto;
    
}
.adjust_width {
  width: 100%;
  margin: 0 auto;
}
.adjust_height {
  height: 100%;
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
  background-color: var(--light);
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
  z-index: 5;
  height: 40vh;
  align-items: center;
  transform: translateY(-100%);
}

.prev, .next {
  cursor: pointer;
  position: static;
  top: 40%;
  width: 10%;
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

.event_image_bar button {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: none;
  border-radius: 50%;
  padding: 1rem;
  font-size: 2.5rem;
  font-weight: bold;
  width: 4rem;
  height: 4rem;
  transition: 0.5s ease;
}
.event_image_bar button:hover {
  background-color: rgba(12,12,12,0.5);
}
.event_image_preview img {
  height: 80%;
  display: flex;
  padding: .35rem;
  border-radius: 1rem;
  margin: .3rem;
}
.event_image_preview img:hover, .active {
  outline:  .45rem solid var(--dark);
  background-color: white;
}
.event_image_preview {
  height: 100%;
  display: flex; 
  align-items: center;
  justify-content: center;
}
.selected {
  outline:  .45rem solid var(--dark);
  background-color: white;
}
</style>