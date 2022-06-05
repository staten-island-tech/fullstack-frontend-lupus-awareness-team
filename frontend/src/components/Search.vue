<template>
<div class="search-container">
    <div class="search">
        <button class="button" type="submit"><i class="fas fa-search"></i></button>
        <input id="searchbar" type="text" placeholder="Search Users..." @keyup="searchEnter" ref="searchbar">
    <div class="search-dropdown" v-if="active">
            <div class="dropdown-item" v-for="item in searchArr" :key="item.userName">
                <div class="pfp-container">
                    <img class="pfp" :src="item.userImage">
                </div>
                <h5 class="user-text">{{item.userName}}</h5>
            </div>
    </div>
    </div>


</div>
</template>

<script scoped>
export default {
    name: "Search",
    data() {
        return {
            active: false,
            //PLACEHOLDER
            searchArr: [
                {
                    userName: "Kevin123",
                    userImage: "https://images.unsplash.com/photo-1599939571322-792a326991f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
                },
                {
                    userName: "Steven123",
                    userImage: "https://images.unsplash.com/photo-1599939571322-792a326991f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
                },
                {
                    userName: "Bob123",
                    userImage: "https://images.unsplash.com/photo-1599939571322-792a326991f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
                }
            ],
        }
    },
    methods: {
        //When the enter button is clicked/released, it runs the fetch call
        searchEnter: async function(e) {
            try {
                if(e.key === "Enter") {
                    console.log("Hello");
                    //makes it so dropdown appears when enter is pressed
                    this.active = !this.active;
                    //clears searchbar when enter is pressed
                    this.$refs.searchbar.value = "";
                const response = await fetch(
                "https://my-json-server.typicode.com/Evany226/demo/hosted"
                );
                const data = await response.json();
                console.log(data);
                }
            } 
            catch (error) {
                console.log(error)
            }
        }
    }

}
</script>

<style scoped>


.search-container {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.search {
    display: flex;
    height: 100%;
        position: relative;
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

.search-dropdown {
    width: 100%;
    height: 25rem;
    background-color: white;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: calc(100% + 1rem);
    z-index: 5;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.dropdown-item {
    width: 100%;
    height: 20%;   
    border-bottom: solid 1px black;
    display: flex;
    align-items: center;
}

.pfp-container {
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.pfp {
    width: 50%;
    border-radius: 50%;
}

.user-text {
    font-size: 1.8rem;
    font-weight: 600;
}

</style>