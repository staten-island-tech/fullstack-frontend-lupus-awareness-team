<template>
  <div class="address_complete">
      <div class="search_bar">
          <!-- can change the @keyup.enter to just @keyup for speedy searches, but that puts out a lottttt of requests and i might hit my monthly quota (30000) -->
        <input @keyup.enter="fetchAddress()" v-model="query" type="text" name="autocomplete" id="search_form" placeholder="Search...">
        <div v-show="searchResults" v-for="(index) in searchResults" :key="index.properties.name" class="search_results">{{index.properties.label}}</div>
        <button class="search_btn">Go</button>
      </div>
      <label for=""></label>
      <p>message : {{query}}</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            query: null,
            apiKey: 'dee8429ca17c397b5b1fb5c7b223c29927e5e580',
            temp: ['@click="fetchAddress()"', '' ],
            searchResults: [],
        }
    },
    methods: {
    fetchAddress: async function () {
        try {
        const response = await fetch(`https://api.geocodify.com/v2/autocomplete?api_key=${this.apiKey}&q=${this.query}, USA`);
        // only searches within america, but can be changed (idk why tho)
        const data = await response.json();
        this.searchResults = data.response.features;
        console.log(this.searchResults)
      } catch(error) {
          console.log(error)
      }
    },
    
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
        width: 100%;
        font-size: 3rem;
        padding: 1rem 2rem;
        border: none;
        outline: none;
    }
    .search_bar {
        margin: 0 auto;
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #search_form:focus {
        border: none;
    }
    p {
        font-size: 2rem;
        height: 2rem;
        margin: 3;
    }
    .search_results {
        background-color: antiquewhite;
        width: 100%;
        font-size: 2.5rem;
        padding: 1rem 2rem;
        
    }
</style>