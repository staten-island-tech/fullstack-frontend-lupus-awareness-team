<template>
<transition name="modal-fade">
 <div class="modal-backdrop" @click="close">
    <div class="modal" @click.stop="">
      <header class="modal-header">
          <h2 class="header-text"> Create an Event!</h2>
      </header>

      <section class="modal-body">
        <div class="form-header">
        </div>
        <div class="upload-info">
        <div class="form">

        <div class="label-wrapper">
          <label class="enter-event-name"
          for="enter-event-name"><b> Event Name:</b></label>
          <input v-model="name" class="event-name" type="text" placeholder="Event Name" name="event-name" required>
        </div>
        <div class="label-wrapper">
          <label class="enter-event-name"
          for="enter-event-name"><b> Event Description:</b></label>
          <textarea v-model="description" class="event-name" type="text" placeholder="Event Description" name="event-name" required></textarea>
        </div>

        <div class="label-wrapper">
          <label class="enter-event-date"
          for="enter-event-date"><b> Event Date:</b></label>
          <input v-model="date" class="event-date" type="date" placeholder="Event Date" name="event-date" required>
        </div>

        <div class="label-wrapper">
          <label class="enter-event-time"
          for="enter-event-time"><b> Event Time Start:</b></label>
          <input v-model="start" class="event-time" type="time" step="900" placeholder="Event Time" name="event-time" required>
        </div>
        <div class="label-wrapper">
          <label class="enter-event-time"
          for="enter-event-time"><b> Event Time End:</b></label>
          <input v-model="end" class="event-time" type="time" step="900" placeholder="Event Time" name="event-time" required>
        </div>

        <Autocomplete v-model="location"/>
  

        <div class="label-wrapper">
          <label class="enter-event-hours"
          for="enter-event-hours"><b> Event Hours:</b></label>
          <input v-model="hours" class="event-hours" type="text" placeholder="Event Hours" name="event-hours" required>
        </div>

        <div class="label-wrapper">
          <label class="enter-event-tags"
          for="enter-event-tags"><b> Event Tags:</b></label>
          <input v-model="tags" class="event-tags" type="text" placeholder="Event Tags" name="event-tags" required>
        </div>
        <h6 v-for="image in images" :key="image">{{image.name}}</h6>
          <label for="file-upload" class="custom-file-upload"> 
            <img class="upload-icon" src="../assets/upload-icon.png">
             <i class="upload"></i> Upload File
          </label>
          <input @change="setImage" type="file" id="file-upload" name="filename" class="upload-file-button">
        <button class="submit-button" @click="createEvent()">Post Event</button> 
        </div>

        </div>
        </section>
    </div>
  </div>
</transition>
</template>

<script>
import Autocomplete from "../components/Autocomplete.vue"
import HTTP from "../axiosConfig";

export default {
  name: 'Modal',
  data() {
    return {
      name: null,
      location,
      description: null,
      date: null,
      start: null,
      end: null,
      hours: null,
      tags: null,
      images: []
    }
  },
  components: {
      Autocomplete
  },
  methods: {
    close() {
      this.$emit('close');
    },
    setImage(e) {
      const file = e.target.files || e.dataTransfer.files
      this.images.push(file[0])
      console.log(this.images)
    },
    createEvent: async function() {
      const tags = []
      tags.push(this.tags)
      const startData = this.start.split(':')
      const endData = this.end.split(':')
      const start = new Date(new Date(new Date(this.date).setHours(startData[0])).setMinutes(startData[1]))
      const end = new Date(new Date(new Date(this.date).setHours(endData[0])).setMinutes(endData[1]))
      try {
          await HTTP.post('/event', {
          location: this.location,
          name: this.name,
          date: this.date,
          start: start,
          end: end,
          hours: this.hours,
          tags: tags,
          description: this.description,
          media: this.images
      })
      } catch (error) {
        console.log(error)
      }
    }
  },
};
</script>

<style scoped>

input[type="file"] {
  display: none;
}

.custom-file-upload {
font-size: 2rem;
background-color: var(--modal);
border: 1px solid rgba(27, 31, 35, .15);
border-radius: 0rem;
box-sizing: border-box;
color: #fff;
cursor: pointer;
font-size: 1.8rem;
font-weight: 600;
padding: 0.8rem 4rem;
text-align: center;
text-decoration: none;
margin: 1.5rem 0rem;
border-style: solid;
border-radius: 7px;
position: relative;
}

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }


 .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .modal {
      z-index: 15;
    width: 60%;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;

    
  }

  .modal-header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #eeeeee;
    color: var(--modal);
  }

  .header-text {
    padding: 1rem 0rem;
    font-size: 4rem;
  }

  .modal-body {
        position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
    overflow: auto;
    overflow-x: hidden;

  }


.upload-info {
  width: 100%;
  position: relative;
  z-index: 15;
}


.form-header {
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
}

.form-title {
  font-size: 2.5rem;
  margin-bottom: 3rem;
}
.enter-event-tags, .enter-event-name, .enter-event-time, .enter-event-date, .enter-event-hours, .enter-event-address {
  font-size: 3rem;
  font-weight: 500; 
  width: 20%;
    display: flex;
  align-items: center;
  justify-content: center;
  
}

.event-tags, .event-name, .event-time, .event-date, .event-hours, .event-address {
  margin: 0.5rem 0rem;
  font-size: 1.5rem;
  border-style: solid;
  border-radius: 0.1rem;
  border-color: #c4c4c4;
  background-color: #f1f1f1;
  padding: 0.8rem;
  width: 40%;
} 

.label-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
}


.upload-file-button {
  font-size: 1rem;
  background-color: brown;
}


.submit-button {
  font-size: 1.5rem;
  background-color: var(--modal);
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 0rem;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 600;
  padding: 0.8rem 4rem;
  width: 20%;
  text-align: center;
  text-decoration: none;
  margin: 1.5rem 0rem;
  border-style: solid;
  border-radius: 7px;
}


.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}



.custom-file-upload {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
}
.upload-icon {
  width: 15%;
  margin-right: 2rem;
}

@media (min-width:320px)  {
      .modal {
    width: 90%;
    height: 40%;
  }

  .enter-event-tags, .enter-event-name, .enter-event-time, .enter-event-date, .enter-event-hours, .enter-event-address {
  font-size: 7rem;

}

}
@media (min-width:481px)  { 
    .modal {
    width: 90%;
    height: 60%;
  }

 .enter-event-tags, .enter-event-name, .enter-event-time, .enter-event-date, .enter-event-hours, .enter-event-address {
  font-size: 5rem;
 }

 }
@media (min-width:641px)  {
      .modal {
    width: 80%;
    height: 80%;
  }

    .enter-event-tags, .enter-event-name, .enter-event-time, .enter-event-date, .enter-event-hours, .enter-event-address {
  font-size: 3rem;
    }
  

 }
@media (min-width:961px)  { 
    .modal {
    width: 80%;
    height: 70%;
  }

  .enter-event-tags, .enter-event-name, .enter-event-time, .enter-event-date, .enter-event-hours, .enter-event-address {
  font-size: 3rem;
}

}
@media (min-width:1025px) { 
    .modal {
    width: 60%;
    height: 80%;
  }


 }
@media (min-width:1281px) { 

  .modal {
    width: 60%;
    height: 80%;
  }

 }



</style>