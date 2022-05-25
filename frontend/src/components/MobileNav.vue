<template>
  <nav class="bottom_nav">
    <ul class="bottom_nav_icons">
            <li>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: white;transform: ;msFilter:;"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg>
                <router-link to="/" class="nav_text">Home</router-link>
            </li>

            <li>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: white;transform: ;msFilter:;"><path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z"></path></svg>
                <router-link to="/about" class="nav_text">Dashboard</router-link>
            </li>
    </ul>
  </nav>
</template>

<script>
export default {
name: "MobileNav",
}
</script>

<style scoped>

.bottom_nav {
    width: 100%;
    height: 6vh;
    background-color: var(--bottomnav);
    position: fixed;
    bottom: 0;
    display: flex;
}
.bottom_nav_icons li {
  width: 30%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.bottom_nav_icons a { 
  text-decoration: none;
  font-size: 2.5rem;
  color: var(--navtext);
  margin-left: 1rem;
  display: block;
}
.bottom_nav_icons {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.bottom_nav_icons li:hover {
background-color: var(--navhover);
transition: all 0.3s;
}

.bottom_nav_icons li:hover .nav_text {
    color: var(--navdark);
    font-weight: 600;
}
 

@media (min-width:320px)  {
  .bottom_nav {
      display: flex;
  }

}

@media (min-width:481px)  { 

}
@media (min-width:641px)  {

    .bottom_nav {
        display: none;
    }


 }
@media (min-width:961px)  { 

}
@media (min-width:1025px) { 


 }
@media (min-width:1281px) { 

}

</style>