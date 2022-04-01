<template >
  <div id="app" class="main" ref="theme">
    <div class="nav" >
    <div class="logo-container">
      <h4>LOGO</h4>
    </div>

    <div class="login-container">
      <button class="login-button">Log in</button>
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
    // fetchData: async function() {
    //   try {
    //     const res = await fetch('http://localhost:3000')
    //     const data = await res.json()
    //     console.log(data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  },
  components: {
    Navbar
  },
  created: function() {
    this.$store.dispatch('checkCookie')
    // this.fetchData()
  }
}
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

#app {
font-family: 'Montserrat', sans-serif;;
}

*, html, body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 62.5%;
}

:root {
/* Base Colors */
 --light: #cdcee4;
 --white: #ffffff;
 --dark: #4f45b8;
 --purple: #673AB7;
 --accent: #BAA6EF;
 --background: #E9EBF1;
 --pink : #E2D9EC;
 --darkgray: #211D1D;
 --black: #2A2626;

 --black-primary: #1E1E1E;
 --black-secondary: #2D2D2D;
 --black-tertiary: #121212;

/* Themes */

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

.main {
  --topnav: #512DA8;
  --nav: var(--dark);
  --navtext: var(--white);
  --navhover: #7A7ED5;
  --navdark: #3E3998;
  --navopen: var(--white);
  --login: #7C4DFF;
  
  --dbSecondary: var(--pink);
  --dbPrimary: #f6f4f2;
  --dbTertiary: #fff7f7;
  --dbAccent: var(--accent);
  --dbLight: var(--white);
  --profiletext: black;
  --eventTab: black;

  --calendarMonth: var(--pink);
  --calendarMonthBorder: var(--grey-300);
  --calendarDay: var(--white);
  --calendarDayText: var(--grey-800);
  --calendarDayNot: #EBE9F2;
  --dayofweek: var(--white);
  --border-top: var(--grey-200);
  --today: var(--dark);
    
}

.dark {
  --topnav: var(--black-secondary);
  --nav: var(--black);
  --navtext: var(--background);
  --navhover: #585353;
  --navdark: var(--darkgray);
  --navopen: var(--white);
  --login: var(--black-tertiary);

  --dbPrimary: var(--black-primary);
  --dbSecondary: var(--black-secondary);
  --dbTertiary: var(--black-tertiary);
  --dbAccent: var(--black-primary);
  --dbLight: var(--black-tertiary);
  --profiletext: var(--background);
  --eventTab: var(--grey-100);

  --calendarMonth: var(--black-primary);
  --calendarMonthBorder: black;
  --calendarDay: #353535;
  --calendarDayText: var(--background);
  --calendarDayNot: var(--black-secondary);
  --dayofweek: var(--black-secondary);
  --border-top: var(--black-primary);
  --today: var(--grey-800);
}


.nav {
  font-size: 3rem;
  display: flex;
  height: 4rem;
  width: 100%;
  background-color: var(--topnav);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
  background-color: var(--login);
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: var(--navopen);
  font-weight: 500;
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
  color: var(--navopen);
  margin-left: 1rem;
}


</style>
