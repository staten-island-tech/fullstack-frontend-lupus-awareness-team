<template>
    <div id="main">
        <div class="nav-button">
            <i class="fas fa-bars" @click="toggle"></i>
        </div>
            <i class="fas fa-times"></i>
        <div ref="nav" class="side_nav">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>
    </div>
</template>

<script>
export default {
name: "Navbar",
data() {
    return {
    }
},
methods: {
    toggle() {
        this.$refs.nav.classList.toggle("active");
    },
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
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.side_nav.active {
    width: 15%;
}

.side_nav a {
    padding: 1.2rem;
  text-decoration: none;
  font-size: 2.5rem;
  color: var(--secondary);
  transition: 0.3s;
}

.side_nav a:hover {
  color: var(--secondary);
}

.nav-button {
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

.fa-times {
    color: var(--secondary);
    font-size: 3rem;
    position: absolute;
    top: 0.5rem;
    right: 2rem;
    z-index: 11;
    position: fixed;
    display: none;
}


</style>