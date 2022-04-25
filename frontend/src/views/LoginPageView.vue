<template>
  <div class="page">
      <Login />
  </div>
</template>

<script>
import Login from "../components/LoginPage.vue";
export default {
    name: "LoginPageView",
    components: {
    Login
}
}
</script>

<style>

.page {
    width: 100%;
    height: 100vh;
    background: linear-gradient( rgba(103, 27, 150, 0.5), 
    rgba(103, 27, 150, 0.5)), 
}

</style>