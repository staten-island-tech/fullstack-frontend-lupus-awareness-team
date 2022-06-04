<template>
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
</template>

<script>
export default {
    data() {
        return {
            query: "",
            apiKey: 'dee8429ca17c397b5b1fb5c7b223c29927e5e580',
            searchResults: [],
            selectedAddress: [{name: "", label: "", region: "", country: "", borough: "", city:"", zip: ""}, 
            ]
        }
    },
    // feel free to change the way the address is laid out and collect from the form
    methods: {
        fetchAddress: async function () {
            try {
            const response = await fetch(`https://api.geocodify.com/v2/autocomplete?api_key=${this.apiKey}&q=${this.query}, USA`);
            // only searches within america, but can be changed (idk why we would tho)
            const data = await response.json();
            this.searchResults = data.response.features;
            console.log(this.searchResults)
        } catch(error) {
            console.log(error)
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
        }
},
}
</script>

<style scoped>

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
        padding: 0 3rem;
        background-color: #fff;
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