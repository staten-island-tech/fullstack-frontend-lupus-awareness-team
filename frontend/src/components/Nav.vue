<template>
    <div id="main">
        <i class="fas fa-angle-double-left"></i>
        <div class="side_nav">
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
    background-color: var(--text);
    transition: 0.5s;
    overflow-x: hidden;
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.side_nav a {
    padding: 1.2rem;
  text-decoration: none;
  font-size: 2.5rem;
  color: #818181;
  transition: 0.3s;
}

.side_nav a:hover {
  color: var(--secondary);
}

.fa-angle-double-left {
    color: var(--dark);
    font-size: 3rem;
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: 11;
}

</style>