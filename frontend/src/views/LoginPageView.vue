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
    padding-top: 6rem;
    background-color: var(--dbLight)
}

</style>