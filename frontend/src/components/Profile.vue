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
  border: solid 0.5rem white;
  z-index: 3;
}

.profile_image_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.profile_name {
  font-weight: 700;
}

.profile_sub {
  font-weight: 600;
}

</style>