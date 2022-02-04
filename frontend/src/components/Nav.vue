<template>
    <div id="main">
        <div class="nav-button" v-if="nav">
            <i class="fas fa-bars" @click="toggle"></i>
        </div> 

        <div class="close-button" v-else>
            <i class="far fa-window-close" @click="close"></i>
        </div>

        <ul ref="nav" class="side_nav">
            <li><a href="#">Profile</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
</template>

<script>
export default {
name: "Navbar",
data() {
    return {
        nav: true,
    }
},
methods: {
    toggle() {
        this.$refs.nav.classList.toggle("active");
        this.nav = false;
    },
    close() {
        this.$refs.nav.classList.toggle("active");
        this.nav = true;
    }
}
}
</script>

<style>
.side_nav {
    height: 100%;
    position: fixed;
    top: 0; 
    right: 0;
    width: 0;
    z-index: 10;
    background-color: var(--dark);
    transition: 0.5s;
    overflow-x: hidden;
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.side_nav.active {
    width: 15%;
}

.side_nav li {
    text-align: center;
    padding: 0.5rem;
    margin: 1rem;
    width: 100%;
    border: 0.1rem white solid;
}

.side_nav a {
  text-decoration: none;
  font-size: 2.5rem;
  color: var(--secondary);
  transition: 0.3s;
}

.side_nav li:hover .side_nav a{
        color: black;
}

.side_nav li:hover {
    background-color: white;
}

.nav-button {
    position: absolute;
    top: 0.5rem;
    right: 2rem;
    z-index: 11;
    position: fixed;
}

.close-button {
    position: absolute;
    top: 0.5rem;
    right: 2rem;
    z-index: 11;
    position: fixed;
}

.fa-bars {
    color: var(--dark);
    font-size: 3rem;
}

.fa-window-close {
    color: var(--secondary);
    font-size: 3rem;
}


</style>