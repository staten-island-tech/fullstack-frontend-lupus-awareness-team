<template>
  <div class="profile_container">
    <div class="profile_image_container">
      <img class="profile_image" :src="this.user.picture">
    </div>
    <div class="profile_text_container">
      <h3 class="profile_name"> {{ this.user.name }} </h3>
      <h4 class="profile_sub"> {{this.user.email }}</h4>
    </div>
  </div>
</template>

<script>
export default {
name:"Profile",
data() {
  return {
    user: []
  }
},
  mounted: function () {
    this.user = this.$auth.user;
    },
}
</script>

<style>
.profile_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 5rem;
  z-index: 2;
}

.profile_text_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1.5rem;
  z-index: 3;

}

.profile_image {
  border-radius: 50%;
  border: solid 0.5rem #C4C4C4;
  z-index: 3;
  width: 10%;
}

.profile_image_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}


.profile_name {
  font-weight: 700;
  color: var(--navtext);
  
}

.profile_sub {
  font-weight: 600;
  color: var(--navtext)
}

</style>