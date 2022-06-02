<template>
  <div class="event_images_container">
    <div class="view_container">
      <div class="image_view"  v-for="img in [currentIndex]" transition="fade"  :key="img" >
            <img class="slide-image"  :src="currentImg" alt="">
      </div>
   
      <div class="image_buttons">
        <button @click="prev" class="prev"><i class="fas fa-arrow-left"></i></button>
        <button  @click="next"  class="next"><i class="fas fa-arrow-right"></i></button>
      </div>
      
    </div>
    <ul class="event_image_bar">
      <li>
          <button v-if="sliceBegin != 0" @click="sliceBackward"><i id="arrow-left" class="fas fa-arrow-left"></i></button>
        </li>
        <li class="event_image_preview" v-for="img in previewBarImages" :key="img">
          <img @click="selectImg(img), selectPreview(img,$event)" :class="{active: this.currentImg === this.selectedComponent}" :src="img" alt=""/>
        </li>
        <li>
          <button v-if="sliceBegin +4 < images.length" @click="sliceForward"><i id="arrow-right" class="fas fa-arrow-right"></i></button>
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
        "https://images.unsplash.com/photo-1653629154029-265d18f0e1f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1653537649117-821e01f707c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1653629154400-58cf05813b06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1653185195219-9bd5dbfe1b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470",
        "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",

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

.view_container {
  height: 30vh;
  width: 100%;
}

.image_view{
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: var(--eventBody);
}
.image_buttons{
  width: 100%;
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  z-index: 5;
  height: 80%;
  align-items: center;
  transform: translateY(-100%);
}


.prev, .next {
  cursor: pointer;
  position: static;
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 15%;
  color: white;
  font-weight: bold;
  font-size: 5rem;
  transition: 0.5s ease;
  text-decoration: none;
  user-select: none;
  border: none;
  background-color: transparent;
  border-radius: 30%;
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
  height: 8vh;
  margin-top: 3rem;
}

.event_image_bar button {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: none;
  border-radius: 30%;
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
.event_image_preview img:hover {
  filter: brightness(60%);
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

  .fa-arrow-left {
    font-size: 2.5rem;
  }

    .fa-arrow-right {
    font-size: 2.5rem;
  }

  #arrow-left {
    font-size: 1.5rem;
  }

  #arrow-right {
    font-size: 1.5rem;
  }

@media (min-width:320px)  {

  .view_container {
    height: 30vh;
  }


}

@media (min-width:481px)  { 


}
@media (min-width:641px)  {

  .view_container {
    height: 40vh;
  }



 }
@media (min-width:961px)  { 


}
@media (min-width:1025px) { 


 }
@media (min-width:1281px) { 

}

</style>