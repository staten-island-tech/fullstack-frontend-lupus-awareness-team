<template>
  <div class="address_complete">
      <div class="search">
          <!-- can change the @keyup.enter to just @keyup for speedy searches, but that puts out a lottttt of requests and i might hit my monthly quota (30000). might not have to worry ab it tho bc 30000 is a lot -->
            <div class="search_bar">
                <input @keyup.enter="fetchAddress()" v-model="query" type="text" name="autocomplete" id="search_form" placeholder="Search...">
                <button @click="fetchAddress()" class="search_btn">Go</button>
            </div>
            <div @click="completeForm(index.properties)" v-show="searchResults" v-for="(index) in searchResults" :key="index.properties.name" class="search_results"> <svg class="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M10,0.186c-3.427,0-6.204,2.778-6.204,6.204c0,5.471,6.204,6.806,6.204,13.424c0-6.618,6.204-7.953,6.204-13.424C16.204,2.964,13.427,0.186,10,0.186z M10,14.453c-0.66-1.125-1.462-2.076-2.219-2.974C6.36,9.797,5.239,8.469,5.239,6.39C5.239,3.764,7.374,1.63,10,1.63c2.625,0,4.761,2.135,4.761,4.761c0,2.078-1.121,3.407-2.541,5.089C11.462,12.377,10.66,13.328,10,14.453z"></path>
							<circle fill="none" cx="10" cy="5.67" r="1.608"></circle>
						</svg>{{index.properties.label}}</div>
      </div>
      <form action="" class="event_address">
        <div class="address_line">
        <label for="street_address">Street</label>
        <input id="event_street_address" class="input" type="text" v-model="selectedAddress.name">
        </div>
        <div class="address_line">
        <label for="event_borough">Borough</label>
        <input id="event_borough" class="input" type="text" 
        v-model="selectedAddress.borough">
        </div>
        <div class="address_line">
        <label for="event_city">City</label>
        <input id="event_city" class="input" type="text" v-model="selectedAddress.city">
        </div>
        <div class="address_line">
        <label for="event_state">State</label>
        <input id="event_state" class="input" type="text"  v-model="selectedAddress.region">
        <label for="event_zip">ZIP/Postal Code</label>
        <input id="event_zip" class="input" type="text" inputmode="numeric" v-model="selectedAddress.zip">
        </div>
      </form>
      <p>message : {{query}}</p>
  </div>
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
            this.selectedAddress.region = selected.region
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
        width: 100vw;
        height: 20vh;
        background-color: aliceblue;
        margin: 1rem auto;
    }
    #search_form {
        width: 90%;
        font-size: 3rem;
        height: 100%;
        border: none;
        outline: none;
        border-bottom: .25rem solid gray;
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
        font-size: 2rem;
        height: 2rem;
        margin: 3rem;
    }
    .search_results {
        background-color: #fff;
        border-bottom: .25rem solid rgb(218, 218, 218);
        width: 90%;
        font-size: 2.5rem;
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
        padding: 1rem 1rem;
        width: 100%;
        height: 7vh;
    }
    .search_btn {
        font-size: 2.75rem;
        height: 100%;
        width: 10%;
        background-color: var(--purple);
        border: none;
        color: #fff;
        
    
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
        font-size: 2.5rem;
        width: 60%;
        
    }
    label {
        font-size: 3rem;
        width: 40%;
    }
    .event_address {
        width: 40%;
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
    }
    .address_line {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin: 1rem 0;
        align-items: center;
    }
</style>