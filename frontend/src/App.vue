<template>
  <div id="app" class="main" ref="theme">
    <div class="nav">
      <div class="logo-container">
        <router-link to="/" id="logo">
          <h4 id="logo-text">LOGO</h4>
          <svg
            id="logo-home"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            style="fill: white; transform: ; msfilter: "
          >
            <path
              d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"
            ></path>
          </svg>
        </router-link>
      </div>

      <div class="login-container">
        <button class="login-button">
          <router-link to="/Login" class="login-text">Log in</router-link>
        </button>
      </div>

      <div class="theme-container">
        <button class="theme-button" @click="showModal">
          <h5 class="theme-text">Theme</h5>
        </button>
        <ThemeModal v-show="isModalVisible" @close="closeModal" />
      </div>

      <Navbar />
    </div>

    <MobileNav />


    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Nav.vue";
import ThemeModal from "@/components/ThemeModal.vue";
import MobileNav from "@/components/MobileNav.vue";

export default {
  name: "App",
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
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  components: {
    Navbar,
    ThemeModal,
    MobileNav,
  },
  created: function () {
    this.$store.dispatch("checkCookie");
    // this.fetchData()
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");

#app {
  font-family: "Montserrat", sans-serif;
  background-color: var(--dbTertiary);
}

*,
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: "Montserrat", sans-serif;
}

:root {
  /* Base Colors */
  --light: #cdcee4;
  --white: #ffffff;
  --dark: #4f45b8;
  --purple: #673ab7;
  --accent: #baa6ef;
  --background: #e9ebf1;
  --pink: #e2d9ec;
  --darkgray: #211d1d;
  --black: #2a2626;

  --black-primary: #1e1e1e;
  --black-secondary: #2d2d2d;
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
  --h1: 7rem;
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
  --topnav: #542fad;
  --nav: #512da8;
  --navtext: var(--white);
  --navhover: #7a7ed5;
  --navdark: #431f9b;
  --navopen: var(--white);
  --login: #7c4dff;
  --loginhover: #9153fe;

  --dbSecondary: var(--pink);
  --dbPrimary: #f6f4f2;
  --dbTertiary: #fff7f7;
  --dbAccent: var(--accent);
  --dbLight: var(--white);
  --profiletext: black;
  --eventTab: black;
  --details: #673ab7;
  --detailsHover: #9153fe;

  --calendarMonth: var(--pink);
  --calendarMonthBorder: var(--grey-300);
  --calendarDay: var(--white);
  --calendarDayText: var(--black);
  --calendarDayNot: #ebe9f2;
  --dayofweek: var(--white);
  --border-top: var(--grey-200);
  --today: var(--dark);

  --service: var(--background);
  --eventBody: var(--white);
  --create: var(--navdark);
  --modal: var(--purple);
  --themeText: white; 
  --bottomnav: var(--purple);
  
}

.dark {
  --topnav: var(--black-secondary);
  --nav: var(--black);
  --navtext: var(--background);
  --navhover: #585353;
  --navdark: var(--darkgray);
  --navopen: var(--white);
  --login: #000;
  --loginhover: var(--dbTertiary);

  --dbPrimary: var(--black-primary);
  --dbSecondary: var(--black-secondary);
  --dbTertiary: var(--black-tertiary);
  --dbAccent: var(--black-primary);
  --dbLight: var(--black-tertiary);
  --profiletext: rgba(255, 255, 255, 0.87);
  --eventTab: var(--grey-100);

  --calendarMonth: var(--black-primary);
  --calendarMonthBorder: black;
  --calendarDay: #353535;
  --calendarDayText: var(--background);
  --calendarDayNot: var(--black-secondary);
  --dayofweek: var(--black-secondary);
  --border-top: var(--black-primary);
  --today: var(--grey-800);

  --service: var(--dbSecondary);
  --eventBody: var(--dbPrimary);
  --create: #000;
  --modal: var(--darkgray);

  --themeText: white; 
  --bottomnav: var(--black-secondary);
}

.shrek {
  --topnav: rgb(174, 186, 0);
  --nav: rgb(174, 186, 0);
  --navtext: black;
  --navhover: #795a2d;
  --navdark: rgb(152, 163, 1);
  --navopen: black;
  --login: #795a2d;
  --loginhover: #795a2d;

  --dbPrimary: rgb(152, 163, 1);
  --dbSecondary: rgb(152, 163, 1);
  --dbTertiary: rgb(179, 190, 16);
  --dbAccent: #795a2d;
  --dbLight: rgb(203, 214, 52);
  --profiletext: black;
  --eventTab: var(--grey-100);
  --details: #795a2d;
  --detailsHover: #412f16;

  --calendarMonth: #3f270e;
  --calendarMonthBorder: black;
  --calendarDay: #523213;
  --calendarDayText: var(--background);
  --calendarDayNot: #795a2d;
  --dayofweek: #3f270e;
  --border-top: black;
  --today: #795b2de1;

  --service: rgb(210, 223, 39);
  --eventBody: rgb(179, 190, 16);
  --create: #795a2d;

  --themeText: var(--black);
  --bottomnav: #795a2d;
}

.nav {
  font-size: 3rem;
  display: flex;
  align-items: center;
  height: 4vh;
  width: 100%;
  background-color: var(--topnav);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: fixed;
  z-index: 10;
}

.login-container {
  margin-right: 1rem;
  margin-left: auto;
  height: 100%;
  display: flex;
  align-items: center;
}

.theme-container {
  height: 100%;
  margin-right: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-text {
  margin-right: 0.5rem;
  color: var(--themeText);
  font-weight: 600;
}

.theme-button {
  border: none;
  display: flex;
  align-items: center;
  background-color: var(--create);
  height: 70%;
  cursor: pointer;
  outline: none;
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    padding: 0rem 1rem;
}

.login-container:hover .login-button {
  background-color: var(--loginhover);
  transition: 0.3s;
  font-weight: 600;
}

.login-button {
  background-color: var(--login);
  border-radius: 2px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  box-sizing: border-box;
  cursor: pointer;
  height: 70%;
  outline: none;
  overflow: hidden;
  padding: 0rem 2rem;
  position: relative;
  text-align: center;
  transform: translateZ(0);
  transition: all 0.2s;
}

.login-text {
  text-decoration: none;
  text-transform: none;
  color: var(--navopen);
  font-weight: 600;
  font-size: 1.5rem;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#logo {
  color: var(--navopen);
  text-decoration: none;
  cursor: pointer;
  padding-left: 1rem;
}

#logo-home {
  position: relative;
  display: flex;
  margin-left: 2rem;
  display: none;
}

#logo-text {
  position: relative;
  transform-style: preserve-3d;
}

#logo:hover #logo-text {
  display: none;
  transition: all 0.5s;
}

#logo:hover #logo-home {
  display: block;
}

@media (min-width: 320px) {
  *,
  html,
  body {
    font-size: 25%;
  }

  .nav {
    height: 4rem;
  }

  .login-button {
    height: 60%;
  }

  .theme-button {
    height: 60%;
  }

  #logo-home {
    transform: scale(0.6);
    margin-left: 0;
  }

  .theme-container {
    margin-right: 1rem;
  }
}
@media (min-width: 481px) {
  *,
  html,
  body {
    font-size: 35%;
  }

  #logo-home {
    transform: scale(0.7);
    margin-left: 1rem;
  }
}
@media (min-width: 641px) {
  #logo-home {
    transform: scale(0.9);
    margin-left: 1rem;
  }
  *,
  html,
  body {
    font-size: 50%;
  }

   .theme-container {
    margin-right: 6rem;
  }
}
@media (min-width: 961px) {
  #logo-home {
    transform: scale(1);
    margin-left: 2rem;
  }
  .login-button {
    height: 70%;
  }

  .theme-button {
    height: 70%;
  }

  *,
  html,
  body {
    font-size: 55%;
  }
}
@media (min-width: 1025px) {
  /* big landscape tablets, laptops, and desktops */
}
@media (min-width: 1281px) {
  *,
  html,
  body {
    font-size: 62.5%;
  }

  .nav {
    height: 4rem;
  }
}
</style>
