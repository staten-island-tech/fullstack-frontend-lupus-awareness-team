<template>
  <div id="app">
    <div class="nav">
    <div class="logo-container">
      <h4>LOGO</h4>
    </div>
    <div class="login-container" v-if="!$auth.loading.value">
      <button class="login-button" v-if="!$auth.isAuthenticated.value" @click="login">Log in</button>
      <button class="login-button" v-if="$auth.isAuthenticated.value" @click="logout">Log out</button>
    </div>
    <Navbar />
    </div>
    <router-view/>

  </div>
</template>

<script>
import Navbar from "@/components/Nav.vue"

export default {
  name: 'App',
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
      });
      this.$router.push({ path: '/' });
    }
  },
  components: {
    Navbar
  }
}
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

#app {
font-family: 'Inter', sans-serif;
}

*, html, body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 62.5%;
}

:root {
/* base theme */
 --primary: #cdcee4;
 --secondary: #ffffff;
 --dark: #4d51a1;
 --accent: #9397D8;
 --text: #000000;
 --red: #D53434;
 
  --nav: #4d51a1;
  --navhover: #7A7ED5;
  --navtext: #ffffff;

   --grey-100: #e4e9f0;
  --grey-200: #cfd7e3;
  --grey-300: #b5c0cd;
  --grey-800: #3e4e63;
  --grid-gap: 1px;
  --day-label-size: 20px;

/* main themes */

/* font sizes */
  --h1: 7.594rem;
  --h2: 5.063rem;
  --h3: 3.375rem;
  --h4: 2.25rem;
  --h5: 1.5rem;
}

h1 {
  font-size: var(--h1);
}
h2 {
  font-size: var(--h2);
}
h3 {
  font-size: var(--h3);
}
h4 {
  font-size: var(--h4);
}
h5 {
  font-size: var(--h5);
}

ol,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

.nav {
  font-size: 3rem;
  display: flex;
  height: 4rem;
  width: 100%;
  background-color: var(--accent);
}

.login-container {
  margin-right: 6rem;
  margin-left: auto;
  height: 100%;
  display: flex;
  align-items: center;
}

.login-button {
  font-size: 1.8rem;
  background-color: var(--dark);
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  height: 80%;
  line-height: 1.15;
  outline: none;
  overflow: hidden;
  padding: 0 2.5rem;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s;
}

.logo-container {
  display: flex;
  align-items: center;
  color: black;
  margin-left: 1rem;
}


</style>
