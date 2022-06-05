<template>
    <div class="search">
        <button class="button" type="submit"><i class="fas fa-search"></i></button>
        <input id="searchbar" type="text" v-model="query" placeholder="Search Users..." @keyup="searchEnter">
    </div>
</template>

<script>
import HTTP from '../axiosConfig'

export default {
    name: "Search",
    data() {
        return {
            query: null,
        }
    },
    methods: {
        //When the enter button is clicked/released, it runs the fetch call
        searchEnter: async function(e) {
            if(e.key !== "Enter") { return }
            try {
                const res = await HTTP.get(`/searchUser/${this.query}`)
                console.log(res.data)
            } 
            catch (error) {
        this.$store.dispatch('GET_ALERT', error)
      }
        }
    }

}
</script>

<style scoped>

.search {
    display: flex;
    height: 100%;
}

#searchbar{
    width: 100%;
    height: 100%;
    font-size: 1.8rem;
    text-indent: 1rem;
    background-color: white;
    padding: 0.5rem;
    border: none;
    border-radius: 0 0.5rem 0.5rem 0;
}

#searchbar:active {
    border: none;
}

.fa-search {
    font-size: 1.5rem;
}

.button {
    width: 20%;
    height: 100%;
    background-color: white;
    border: none;
    border-right: solid black 0.1rem;
    border-radius: 0.5rem 0 0 0.5rem;
}


</style>