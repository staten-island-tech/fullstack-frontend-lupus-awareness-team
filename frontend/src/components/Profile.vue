<template>
  <div class="profile_container">
    <div class="profile_image_container">
      <img src="../assets/placeholder.jpg">
    </div>
    <div class="profile_text_container">
      <h3 class="profile_name">[Insert Name]</h3>
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
  align-items: flex-start;
  height: 25vh;
  width: 40%;
}

.profile_text_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
}

.profile_name {
  font-weight: 500;
}

.profile-sub {
  font-weight: 400;
}

</style>