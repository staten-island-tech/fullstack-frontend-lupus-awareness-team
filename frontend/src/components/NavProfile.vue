<template>
    <div class="nav_profile_container" v-if="$auth.isAuthenticated.value">
        <div class="nav_profile_image_container">
            <img class="nav_profile_image" :src="this.user.picture">
        </div>
        <div class="nav_profile_name_container">
            <h4 class="nav_profile_name"> {{this.user.name}} </h4>
            <svg class="logout-button" v-if="$auth.isAuthenticated.value" @click="logout" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: white;transform: ;msFilter:;"><path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></svg>
        </div>
    </div>
</template>

<script>


export default {
name: "NavProfile",
data() {
    return {
        user: []
    }
},
  mounted: function () {
    this.user = this.$auth.user;
    },
methods: {
    logout() {
      this.$auth.logout({
      });
      this.$router.push({ path: '/' });
    }
},
}
</script>

<style scoped>

.logout-button {
    margin-right: 1rem;
    margin-top: 1rem;
    cursor: pointer;
}
.nav_profile_container {
    margin-top: auto;
    margin-bottom: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
    width: 60%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav_profile_name {
    font-size: 2rem;
    color:var(--navtext);
    font-weight: 500;
}


</style>