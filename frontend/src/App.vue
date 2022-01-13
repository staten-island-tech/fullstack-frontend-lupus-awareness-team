<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Dashboard</router-link>
    <router-view/>
  </div>
</template>

<style>
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

#nav {
  font-size: 3rem;
  
}

:root {
/* base theme */
 --primary: #cdcee4;
 --secondary: #ffffff;
 --dark: #4d51a1;
 --accent: #9397D8;
 --text: #000000;

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

</style>
