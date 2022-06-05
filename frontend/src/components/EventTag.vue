<template>
<div class="tag-section">
    <div class="tag-wrapper">
        <label class="enter-event-tags"
            for="enter-event-tags"><b> Event Tags:</b></label>
        <input class="event-tags" type="text" placeholder="Event Tags" name="event-tags" @keydown.enter="addTag" ref="tag" maxlength="12">
    </div>

    <div class="tag-container">
     <TransitionGroup name="bubble">
        <div class="tag-bubble" v-for="(tag, index) in tagArr.slice(0,3)" :key="tag.id" tag="div">
            <h5 class="tag-text" > {{tagArr[(index)]}}</h5>
            <div class="remove-tag" @click="removeTag(index)"> 
                X
            </div>
        </div>
    </TransitionGroup>
    </div>
</div>
</template>

<script>
export default {
name:"EventTag",
data() {
    return {
        tagArr: []
    }
},
methods: {
    addTag() {
        if (this.tagArr.length < 3) {
            this.tagArr.push(this.$refs.tag.value);
            this.$refs.tag.value="";
            console.log(this.tagArr);
        }
        else {
            this.$refs.tag.value="";
            alert("There can only be a maximum of 3 tags.")
        }
        
    },
    removeTag(index) {
        this.tagArr.splice(index, 1)

    }
},
created() {
}
}
</script>

<style scoped>

.bubble-enter-active,
.bubble-leave-active {
  transition: all 0.3s ease;
  transform: translateX(1rem)
}

.bubble-enter-from,
.bubble-leave-to {
  opacity: 0;

}


.remove-tag {
    margin-left: 1rem;
    height: 100%;
    width: 20%;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
}


.tag-section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.tag-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 2rem;
}

.tag-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.tag-bubble {
    background-color: var(--background);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    padding: 0.5rem 2.5rem;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    transition: 0.5s;
}

.event-tags {
  margin: 0.5rem 0rem;
  font-size: 1.5rem;
  border-style: solid;
  border-radius: 0.1rem;
  border-color: #c4c4c4;
  background-color: #f1f1f1;
  padding: 0.8rem;
  width: 40%;
     transition: 0.3s;
   transform: translateY(-3px);
  
}

.enter-event-tags {
      font-size: 3rem;
  font-weight: 500; 
  width: 20%;
    display: flex;
  align-items: center;
  justify-content: center;
  
}

.tag-text {
    font-size: 1.8rem;
}

@media (min-width:320px)  {

  .enter-event-tags {
  font-size: 7rem;

}

}
@media (min-width:481px)  { 


 .enter-event-tags {
  font-size: 5rem;
 }

 }
@media (min-width:641px)  {


    .enter-event-tags{
  font-size: 3rem;
    }
  

 }
@media (min-width:961px)  { 


  .enter-event-tags {
  font-size: 3rem;
}

}
@media (min-width:1025px) { 


 }
@media (min-width:1281px) { 

 }




</style>
