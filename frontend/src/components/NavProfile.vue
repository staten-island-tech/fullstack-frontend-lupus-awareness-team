<template>
    <div class="nav_profile_container">
        <div class="nav_profile_image_container">
       <router-link class="route" to="/about">  <img class="nav_profile_image" src="../assets/placeholder.jpg"></router-link>      
        </div>
        <div class="nav_profile_name_container">
            <h4 class="nav_profile_name"> {{user.firstName}} </h4>
            <h5 class="nav_profile_text">Student</h5>
        </div>
    </div>
</template>

<script>


export default {
name: "NavProfile",
data() {
    return {
        user: this.$store.state.user
    }
},
  mounted: function () {
    },
methods: {
},
}
</script>

<style scoped>


.nav_profile_container {
    margin-top: auto;
    margin-bottom: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: var(--navdark);
}

.nav_profile_image_container {
    width: 40%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0rem;
}

.nav_profile_image {
    width: 50%;
    border-radius: 25%;
}

.nav_profile_name_container {
    width: 40%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.nav_profile_name {
    color:var(--navtext);
    font-weight: 600;
    font-size: 2rem;
}

.nav_profile_text {
    color: var(--navtext);
    font-weight: 400;
    font-size: 1.8rem
}


</style>