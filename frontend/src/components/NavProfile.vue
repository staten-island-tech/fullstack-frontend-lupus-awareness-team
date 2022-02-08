<template>
    <div class="nav_profile_container">
        <div class="nav_profile_image_container">
            <img class="nav_profile_image" :src="this.user.picture">
        </div>
        <div class="nav_profile_name_container">
            <div class="nav_profile_name"></div>
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

},
}
</script>

<style>
.nav_profile_container {
    width: 100%;
    background-color: white;
}

.nav_profile_image_container {
    background-color: red;
}


.nav_

.nav_profile_image {
    width: 5rem;
    height: 5rem;
}
</style>