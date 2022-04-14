<template>
  <div class="address_complete">
      <div class="search_bar">
        <input @keyup.enter="fetchAddress()" v-model="query" type="text" name="autocomplete" id="search_form" placeholder="Search...">
        <div class="search_results"></div>
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
        const response = await fetch(`https://api.geocodify.com/v2/autocomplete?api_key=${this.apiKey}&q=${this.query}`);
        const data = await response.json();
        this.addressArr = data;
        console.log(this.addressArr)
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
        font-size: 3rem;
        width: 50%;
        height: 5rem;
        margin: 3rem;
        padding: 0 2rem;
        border: none;
        outline: none;
    }
    #search_form:focus {
        border: none;
    }
    p {
        font-size: 2rem;
        height: 2rem;
        margin: 3;
    }
</style>