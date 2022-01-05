<template>
  <div class="profile_container">
    <div class="profile_image_container">
      <div class="profile_curve"></div>
      <img class="profile_image" src="../assets/placeholder.jpg">
    </div>
    <div class="profile_text_container">
      <h3 class="profile_name">Full Name</h3>
      <h4 class="profile_sub">51 Subscribers</h4>
    </div>
  </div>
</template>

<script>
export default {
name:"Profile",
}
</script>

<style>
.profile_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 5rem;
  
}

.profile_text_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1.5rem;
}

.profile_image {
  border-radius: 50%;
  border: solid 0.5rem white;
}

.profile_image_container {
  width: 100%;
}

.profile_curve {
  width: 100vw;
  height: 20%;
  border:solid 5px #000;
  border-color: #000 transparent transparent transparent ;
  border-radius: 50%/ 100px 100px 0 0;
  position: absolute;
  z-index: 0;
  top: 20rem;
  
}

.profile_name {
  font-weight: 700;
}

.profile_sub {
  font-weight: 600;
}

</style>