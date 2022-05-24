<template >
  <div id="app" class="main" ref="theme">
    <div class="nav" >
      <div class="logo-container">
        <router-link to="/" id="logo">
          <h4 id="logo-text">LOGO</h4>
          <svg id="logo-home" xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: white;transform: ;msFilter:;"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg>
        </router-link>
  
      </div>

      <div class="login-container">
        <button class="login-button"><router-link to="/Login" class="login-text">Log in</router-link></button>
      </div>
      
      <div class="theme-container">
        <button class="theme-button">
          <h5 class="theme-text">Theme</h5>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: white;transform: ;msFilter:;"><path d="m11.998 17 7-8h-14z"></path></svg>
        </button>
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
font-family: 'Montserrat', sans-serif;
background-color: var(--dbTertiary);
}

*, html, body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: 'Montserrat', sans-serif;;
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
  --topnav: #542FAD;
  --nav: #512DA8;
  --navtext: var(--white);
  --navhover: #7A7ED5;
  --navdark: #431F9B;
  --navopen: var(--white);
  --login: #7C4DFF;
  --loginhover: #9153FE;
  
  --dbSecondary: var(--pink);
  --dbPrimary: #f6f4f2;
  --dbTertiary: #fff7f7;
  --dbAccent: var(--accent);
  --dbLight: var(--white);
  --profiletext: black;
  --eventTab: black;
  --details: #673AB7; 
  --detailsHover: #9153FE; 

  --calendarMonth: var(--pink);
  --calendarMonthBorder: var(--grey-300);
  --calendarDay: var(--white);
  --calendarDayText: var(--black);
  --calendarDayNot: #EBE9F2;
  --dayofweek: var(--white);
  --border-top: var(--grey-200);
  --today: var(--dark);

    --service: var(--background);
    --eventBody: var(--white);
    --create: var(--navdark);
  --themeText: white; 
  --modalBackground:white; 

  --modalSubmit: var(--purple);
  --uploadButton: var(--purple); 
    
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
  --profiletext: rgba(255,255,255,.87);
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

  --themeText: white; 
  --modalBackground: var(--darkgray); 
  --modalText: var(--background); 
  --modalHeaderText: var(--background); 
  --modalSubmit: var(--purple); 
  --uploadButton: var(--purple); 
}

.shrek {
  --topnav: rgb(174,186,0);
  --nav: rgb(174,186,0);
  --navtext: black;
  --navhover: #795A2D;
  --navdark:rgb(152, 163, 1) ;
  --navopen: black;
  --login: #795A2D;
  --loginhover: #795A2D ;

  --dbPrimary: rgb(152, 163, 1) ;
  --dbSecondary: rgb(152, 163, 1) ;
  --dbTertiary: rgb(179, 190, 16);
  --dbAccent: #795A2D;
  --dbLight: rgb(203, 214, 52);
  --profiletext: black;
  --eventTab: var(--grey-100);
  --details: #795A2D;
  --detailsHover: #412f16; 

  --calendarMonth: #3f270e;
  --calendarMonthBorder: black;
  --calendarDay: #523213;
  --calendarDayText: var(--background);
  --calendarDayNot: #795A2D;
  --dayofweek: #3f270e;
  --border-top: black;
  --today: #795b2de1 ;

  --service: rgb(210, 223, 39);
  --eventBody: rgb(179, 190, 16);
  --create: #795A2D;

  --themeText: var(--black); 

  --modalBackground: rgb(191, 202, 31) ; 
  --modalText: black; 
  --modalHeaderText: black; 
  --modalSubmit: #795A2D; 
  --uploadButton: #795A2D; 
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
  padding: 0.2rem 1rem;
  padding-right: 0.2rem;
}

.login-container:hover .login-button {
     background-color: var(--loginhover);
   transition: 0.3s;
   transform: translateY(2px);
   font-weight: 600;
}

.login-button {
  background-color: var(--login);
  border-radius: 2px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  cursor: pointer;
  height: 70%;
  outline: none;
  overflow: hidden;
  padding: 0rem 2.5rem;
  position: relative;
  text-align: center;
  transform: translateZ(0);
  transition: all .2s;
}

.login-text {
  text-decoration: none;
  text-transform: none;
  color: var(--navopen);
  font-weight: 500;
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

#logo:hover #logo-text{
  display: none;
  transition: all 0.5s;
}

#logo:hover #logo-home {
  display: block;
}

@media (min-width:320px)  {

  *,html,body {
    font-size: 25%;
  }

  .nav {
    height: 4rem;
  }

  .login-button {
    height: 60%;
  }

  #logo-home {
        transform: scale(0.6);
        margin-left: 0;
  }

}
@media (min-width:481px)  { 
   *,html,body {
     font-size: 35%;
   }

    #logo-home {
        transform: scale(0.7);
        margin-left: 1rem;
  }
 }
@media (min-width:641px)  {
    #logo-home {
        transform: scale(0.9);
        margin-left: 1rem;
  }
    *, html,body {
    font-size: 50%;
  }


 }
@media (min-width:961px)  { 
  #logo-home {
        transform: scale(1);
        margin-left: 2rem;
  }
  .login-button {
    height: 70%;
  }

  *,html,body {
    font-size: 55%;
  }
}
@media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { 
  *,html,body {
    font-size: 62.5%;
  }
  
  .nav {
    height: 4vh;
  }

 }

</style>
