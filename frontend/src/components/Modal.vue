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
          for="enter-event-name"><b> Event Description and Location:</b></label>
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
      <section class="address_complete">
      <div class="search">
          <!-- can change the @keyup.enter to just @keyup for speedy searches, but that puts out a lottttt of requests and i might hit my monthly quota (30000). might not have to worry ab it tho bc 30000 is a lot -->
            <div class="search_bar">
                <input @keyup.enter="fetchAddress()" v-model="query" type="text" name="autocomplete" id="search_form" placeholder="Search Address...">
                <button @click="fetchAddress()" class="search_btn"><i class="fas fa-search"></i></button>
            </div>
            <div @click="completeForm(index.properties)" v-show="searchResults && query" v-for="(index) in searchResults" :key="index.properties.name" class="search_results"> <svg class="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M10,0.186c-3.427,0-6.204,2.778-6.204,6.204c0,5.471,6.204,6.806,6.204,13.424c0-6.618,6.204-7.953,6.204-13.424C16.204,2.964,13.427,0.186,10,0.186z M10,14.453c-0.66-1.125-1.462-2.076-2.219-2.974C6.36,9.797,5.239,8.469,5.239,6.39C5.239,3.764,7.374,1.63,10,1.63c2.625,0,4.761,2.135,4.761,4.761c0,2.078-1.121,3.407-2.541,5.089C11.462,12.377,10.66,13.328,10,14.453z"></path>
							<circle fill="none" cx="10" cy="5.67" r="1.608"></circle>
						</svg>{{index.properties.label}}</div>
      </div>

        <div class="address_line">
        <label class="label"
        for="enter-street"><b>Street Address:</b></label>
        <input placeholder="Event Street Address" id="event_street_address" class="input" type="text" v-model="selectedAddress.name">
        </div>

        <div class="address_line">
         <label class="label"
        for="enter-borough"><b>Borough:</b></label>
        <input placeholder="Event Borough" id="event_borough" class="input" type="text" 
        v-model="selectedAddress.borough">
        </div>

        <div class="address_line">
        <label class="label"
        for="enter-street"><b>City:</b></label>
        <input placeholder="Event City" id="event_city" class="input" type="text" v-model="selectedAddress.city">
        </div>

        <div class="address_line">
        <label class="label"
        for="enter-state"><b>State:</b></label>
        <input placeholder="Event State" id="event_state" class="search-input" type="text"  v-model="selectedAddress.region">

        <label class="label"
        for="enter-zip"><b>ZIP:</b></label>
        <input placeholder="Event Zip" id="event_zip" class="search-input" type="text" inputmode="numeric" v-model="selectedAddress.zip">
        </div>
  </section>
        <!-- <Autocomplete v-model="location"/> -->
<!--   
         <div class="label-wrapper">
          <label class="enter-event-hours"
          for="enter-event-location"><b> Event Location:</b></label>
          <input v-model="location" class="event-hours" type="text" placeholder="Event Location" name="event-hours" required>
        </div> -->
        <div class="label-wrapper">
          <label class="enter-event-hours"
          for="enter-event-hours"><b> Event Hours:</b></label>
          <input v-model="hours" class="event-hours" type="text" placeholder="Event Hours" name="event-hours" required>
        </div>

        <div class="label-wrapper">
          <EventTag/>
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
// import Autocomplete from "../components/Autocomplete.vue"
import EventTag from "../components/EventTag.vue"
import HTTP from "../axiosConfig";

export default {
  name: 'Modal',
  data() {
    return {
      name: null,
      // location,
      description: null,
      date: null,
      start: null,
      end: null,
      hours: null,
      tags: null,
      images: [],

       query: "",
            apiKey: 'dee8429ca17c397b5b1fb5c7b223c29927e5e580',
            searchResults: [],
            selectedAddress: [{name: "", label: "", region: "", country: "", borough: "", city:"", zip: ""}, 
            ]
    }
  },
  components: {
      // Autocomplete,
      EventTag
  },
  methods: {
     fetchAddress: async function () {
            try {
            const response = await fetch(`https://api.geocodify.com/v2/autocomplete?api_key=${this.apiKey}&q=${this.query}, USA`);
            // only searches within america, but can be changed (idk why we would tho)
            const data = await response.json();
            this.searchResults = data.response.features;
        } catch (error) {
            this.$store.dispatch('GET_ALERT', error)
        }
        },
        completeForm: function(selected) {
            console.log(selected)
            this.selectedAddress.name = selected.name
            this.selectedAddress.label = selected.label
            this.selectedAddress.region = selected.region_a
            this.selectedAddress.country = selected.country
            this.selectedAddress.borough = selected.borough
            this.selectedAddress.city = selected.locality
            this.selectedAddress.zip = selected.postalcode
        },

    close() {
      this.$emit('close');
    },
    setImage(e) {
      const file = e.target.files || e.dataTransfer.files
      this.images.push(file[0])
      console.log(this.images)
    },
    createEvent: async function() {
      const startData = this.start.split(':')
      const endData = this.end.split(':')
      const start = new Date(new Date(new Date(this.date).setHours(startData[0])).setMinutes(startData[1]))
      const end = new Date(new Date(new Date(this.date).setHours(endData[0])).setMinutes(endData[1]))
      try {
          const address = `${this.selectedAddress.name}  ${this.selectedAddress.city} 
          ${this.selectedAddress.borough} ${this.selectedAddress.region} ${this.selectedAddress.zip}`
          const res = await HTTP.post('/event', {
            user:this.$store.state.user,
          location: address,
          name: this.name,
          date: this.date,
          start: start,
          end: end,
          hours: this.hours,
          tags: this.tags,
          description: this.description,
          media: this.images
      })
      .then((result) => {
        console.log(result)
        if(result.data.name === this.name){
          window.location = '/'
          this.images = []
        }else{
          return
        }
      })
        this.$store.dispatch('GET_ALERT', res)
      } catch (error) {
        this.$store.dispatch('GET_ALERT', error)
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





 .address_complete {
        width: 80%;
        height: 100%;
        background-color: var(--background);
        margin: 2rem auto;
        padding: 1.5rem 2rem;
    }
    #search_form {
        width: 90%;
        font-size: 1.8rem;
        height: 100%;
        border: none;
        outline: none;
        border-bottom: .25rem solid gray;
                  font-family: "Montserrat", sans-serif;
                  
    }
    .search {
        margin: 0 auto;
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: center;
        
    }
    p {
        font-size: 1.5rem;
        height: 2rem;
        margin: 3rem;
    }
    .search_results {
        background-color: #fff;
        border-bottom: .25rem solid rgb(218, 218, 218);
        width: 90%;
        font-size: 2rem;
        padding: 1rem 1rem;
        margin: 0 auto;
        display: flex;
        align-items: center;
        color: rgb(77, 77, 77);
        
    }
    .search_results:hover {
        background-color: var(--dbSecondary);
    }
    .search_bar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 0rem;
        width: 100%;
        height: 100%;
    }
    .search_btn {
        font-size: 2rem;
        height: 100%;
        width: 15%;
        padding: .25rem;
        background-color: var(--white);
        border: none;
        color: black;
        border-radius: 20%;
        margin-lefT: 0.5rem;
        
    
    }
    .svg-icon {
        width: 3rem;
        height: 3rem;
        margin: 0 1.5rem;
    }

    .svg-icon path,
    .svg-icon polygon,
    .svg-icon rect {
        fill: #f01000;
    }

    .svg-icon circle {
        stroke: #f01000;
        stroke-width: 1;
    }
    .input {
    margin: 0.5rem 0rem;
    font-size: 1.5rem;
    border-style: solid;
    border-radius: 0.1rem;
    border-color: #c4c4c4;
    background-color: #f1f1f1;
    padding: 0.8rem;
    width: 40%;
}

    .search-input {
    margin: 0.5rem 0rem;
    font-size: 1.5rem;
    border-style: solid;
    border-radius: 0.1rem;
    border-color: #c4c4c4;
    background-color: #f1f1f1;
    padding: 0.8rem;
    width: 20%;
}
   
    .event_address {
        width: 40%;
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
    }
    .address_line {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;
        
    }

    .label {
  font-size: 3rem;
  font-weight: 500; 
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
    }
</style>