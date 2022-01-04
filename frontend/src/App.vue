<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

#app {
 font-family: 'Montserrat', sans-serif;
  text-align: center;
}

*, html, body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 62.5%;
}

:root {
/* base theme */
 --main: #cdcee4;
 --secondary: #E5E5E5;
 --nav: #4d51a1;

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

</style>
