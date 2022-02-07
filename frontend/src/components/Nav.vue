<template>
    <div ref="main" id="main">
        <div class="nav-button" v-if="nav">
            <i class="fas fa-bars" @click="toggle"></i>
        </div> 

        <div class="close-button" v-else>
            <i class="far fa-times-circle" @click="close"></i>
        </div>

        <ul ref="nav" class="side_nav" :class="{ width: expand }">
            <li>
                <svg class="hello" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: white;transform: ;msFilter:;"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg>
                <router-link to="/">Home</router-link>
            </li>

            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: white;transform: ;msFilter:;"><path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z"></path></svg>
                <router-link to="/about">Dashboard</router-link>
            </li>

            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: white;transform: ;msFilter:;"><path d="M20 14c-.092.064-2 2.083-2 3.5 0 1.494.949 2.448 2 2.5.906.044 2-.891 2-2.5 0-1.5-1.908-3.436-2-3.5zM9.586 20c.378.378.88.586 1.414.586s1.036-.208 1.414-.586l7-7-.707-.707L11 4.586 8.707 2.293 7.293 3.707 9.586 6 4 11.586c-.378.378-.586.88-.586 1.414s.208 1.036.586 1.414L9.586 20zM11 7.414 16.586 13H5.414L11 7.414z"></path></svg>
                <a href="#">Services</a>
            </li>

            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: white;transform: ;msFilter:;"><path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path></svg>
                <a href="#">Contact</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
name: "Navbar",
data() {
    return {
        nav: true,
        expand: false,
    }
},
methods: {
    toggle() {
        this.expand = true;
        this.nav = false;
    },
    close() {
        this.expand = false;
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
    left: 0;
    width: 0;
    z-index: 10;
    background-color: var(--nav);
    transition: 0.5s;
    overflow-x: hidden;
    padding-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.width {
    width: 18%;
}


.side_nav i {
    font-size: 3rem;
    color: var(--navtext);
}

.side_nav li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    margin: 1rem;
    width: 80%;
    border-radius: 1rem;
    transition: 0.3s;
}

.side_nav a {
  text-decoration: none;
  font-size: 2.5rem;
  color: var(--navtext);
  transition: 0.3s;
  margin-left: 1rem;
  display: block;
}


.side_nav li:hover {
background-color: var(--navhover);
}

.nav-button {
    position: absolute;
    top: 0.5rem;
    right: 2rem;
    z-index: 11;
}

.close-button {
    position: absolute;
    top: 0.5rem;
    right: 2rem;
    z-index: 11;
    position: fixed;
}

.fa-bars {
    color: var(--nav);
    font-size: 3rem;
}

.fa-window-close {
    color: var(--navtext);
    font-size: 3rem;
}

.fa-times-circle {
    color: var(--nav);
    font-size: 3rem;
}


</style>