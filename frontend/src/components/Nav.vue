<template>
    <nav ref="main" id="main">
        <div class="nav_button" v-if="nav">
            <i class="fas fa-bars" @click="toggle"></i>
        </div> 

        <div class="close_button" v-else>
            <i class="far fa-times-circle" @click="close"></i>
        </div>

        <ul ref="nav" class="side_nav" :class="{ width: expand }" >
            <div class="logo_container">
                <h3 id="logo">LOGO</h3>
            </div>
            <li>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: white;transform: ;msFilter:;"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg>
                <router-link to="/" class="nav_text">Home</router-link>
            </li>

            <li>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: white;transform: ;msFilter:;"><path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z"></path></svg>
                <router-link to="/about" class="nav_text">Dashboard</router-link>
            </li>

            <li id="themeLi">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: white;transform: ;msFilter:;"><path d="M7.08 11.25A4.84 4.84 0 0 1 8 9.05L4.43 5.49A9.88 9.88 0 0 0 2 11.25zM9.05 8a4.84 4.84 0 0 1 2.2-.91V2a9.88 9.88 0 0 0-5.76 2.43zM12.75 2v5A4.84 4.84 0 0 1 15 8l3.56-3.56A9.88 9.88 0 0 0 12.75 2zM8 15a4.84 4.84 0 0 1-.91-2.2H2a9.88 9.88 0 0 0 2.39 5.76zM11.25 16.92a4.84 4.84 0 0 1-2.2-.92l-3.56 3.57A9.88 9.88 0 0 0 11.25 22zM16 9.05a4.84 4.84 0 0 1 .91 2.2h5a9.88 9.88 0 0 0-2.39-5.76zM15 16a4.84 4.84 0 0 1-2.2.91v5a9.88 9.88 0 0 0 5.76-2.39zM16.92 12.75A4.84 4.84 0 0 1 16 15l3.56 3.56A9.88 9.88 0 0 0 22 12.75z"></path></svg>
                <a href="#" @click="theme" class="nav_text">Theme</a>
            </li>

                <span v-if="active" class="dropdown">
                    <div class="dropdown-item">
                        <div class="circle" id="purple"></div>
                        <h4 class="dropdown-text" @click="main">Main</h4>
                    </div>

                    <div class="dropdown-item">
                        <div class="circle" id="black"></div>
                        <h4 class="dropdown-text" @click="dark">Dark</h4>
                    </div>

                    <div class="dropdown-item">
                        <div class="circle" id="shrek"></div>
                        <h4 class="dropdown-text" @click="shrek">Shrek</h4>
                    </div>
                </span>

            <li>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: white;transform: ;msFilter:;"><path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path></svg>
                <a href="#" class="nav_text">Settings</a>
            </li>

            <div id="logout">
                <a href="#" id="logout_button">Log out</a>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: #DC3623;transform: ;msFilter:;"><path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></svg>
            </div>


            <NavProfile />

        </ul>
    </nav>
</template>

<script>
import NavProfile from "@/components/NavProfile.vue";

export default {
name: "Navbar",
data() {
    return {
        nav: true,
        expand: false,
        active: false,
    }
},
components: {
    NavProfile,

},
methods: {
    toggle() {
        this.expand = true;
        this.nav = false;
    },
    close() {
        this.expand = false;
        this.nav = true;
    },
    theme() {
        this.active = !this.active
    },
    main() {
        if (this.$parent.$refs.theme.classList.contains("dark")) {
        this.$parent.$refs.theme.classList.remove("dark");
        this.$parent.$refs.theme.classList.add("main");
        }

        if (this.$parent.$refs.theme.classList.contains("shrek")) {
        this.$parent.$refs.theme.classList.remove("shrek");
        this.$parent.$refs.theme.classList.add("main");
        }
    },
    dark() {
        if (this.$parent.$refs.theme.classList.contains("main")) {
        this.$parent.$refs.theme.classList.remove("main");
        this.$parent.$refs.theme.classList.add("dark");
        }

        if (this.$parent.$refs.theme.classList.contains("shrek")) {
        this.$parent.$refs.theme.classList.remove("shrek");
        this.$parent.$refs.theme.classList.add("dark");
        }
    },
    shrek() {
        if (this.$parent.$refs.theme.classList.contains("main")) {
        this.$parent.$refs.theme.classList.remove("main");
        this.$parent.$refs.theme.classList.add("shrek");
        }

        if (this.$parent.$refs.theme.classList.contains("dark")) {
        this.$parent.$refs.theme.classList.remove("dark");
        this.$parent.$refs.theme.classList.add("shrek");
        }
    }
}
}
</script>

<style scoped>

.circle {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    border: solid 0.1rem white;
}

#purple {
    background-color: var(--accent);
}

#black {
    background-color: #1f1f1f;
}

#shrek {
    background-color: #3A9F49;
}

#logo {
    color: var(--navtext);
    font-size: 3.5rem;
}

.logo_container {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    margin-bottom: 4rem;
}

#logout {
    background-color: var(--navdark);
    width: 100%;
    display: flex; 
    padding: 1rem 0rem;
    border-radius: 0;
    margin-top: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

#logout_button {
    color: #DC3623;
    font-weight: 600;
    margin-right: 1rem;
    font-size: 2rem;
}

.dropdown {
  background-color: var(--navdark);
  width: 80%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  justify-content: center;
}

#themeLi {
    position: relative;
}

.dropdown-item {
    display: flex;
    align-items: center;
    height: 100%;

}

.dropdown-text {
    color: var(--navtext);
    font-weight: 400;
    padding: 1rem;
    font-size: 2rem;
    cursor: pointer;
}

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
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    text-align: center;
}


.side_nav li:lastchild {
    margin-top: auto;
}

.width {
    width: 18vw;
}


.side_nav i {
    font-size: 3rem;
    color: var(--navtext);
}

.side_nav li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    margin: 1rem;
    width: 80%;
    border-radius: 1rem;

}

.side_nav a {
  text-decoration: none;
  font-size: 2.5rem;
  color: var(--navtext);
  margin-left: 1rem;
  display: block;
}


.side_nav li:hover {
background-color: var(--navhover);
transition: all 0.3s;
transform: translateX(1rem);
}

.side_nav li:hover .nav_text {
    color: var(--navdark);
    font-weight: 600;
}

.side_nav li:hover .icon {
    fill: #6357E3;
}

.nav_button {
    position: absolute;
    top: 0.5rem;
    right: 2rem;
    z-index: 11;
}

.close_button {
    position: absolute;
    top: 0.5rem;
    right: 2rem;
    z-index: 11;
}

.fa-bars {
    color: var(--navopen);
    font-size: 2.5rem;
}


.fa-times-circle {
    color: var(--navopen);
    font-size: 2.5rem;
}

@media (min-width:320px) {
    .width {
        width: 100%;
        height: 50%;
    }

    .side_nav {
        display: none;
    }

    .icon {
        transform: scale(0.5);
    }


    .side_nav li {
        height: 5%;
        margin: 2rem;
        width: 50%;

    }

    .side_nav li:hover {
        transform: translateX(0rem);
        background-color: var(--nav);
    }

    .side_nav li:hover .nav_text {
        color: var(--navtext);
        font-weight: 400;
    }

    .nav_profile_container {
        width: 50%;
        margin-top: 2rem;
    }

    #logout {
        width: 30%;
        padding: 0rem 0rem;
        margin-top: 2rem;
        padding: 0rem;
    }

    .dropdown {
        width: 20%;
    }

    .nav_button {
        display: none;
    }

    .close_button {
        display: none;
    }

}
@media (min-width:481px) {
        .width {
        width: 100%;
        height: 45%;
    }

    .side_nav {
        display: none;
    }

    .nav_button {
        display: none;
    }

    .close_button {
        display: none;
    }
    
}
@media (min-width:641px) {
        .side_nav {
            display: flex;
            flex-direction: column;
        }

        .width {
        width: 40%;
        height: 100%;
    }

    .icon {
        transform: scale(0.7);
    }

        .home {
        transform: scale(0.7);
    }

    .side_nav li {
        height: 5%;
        margin: 1rem;
        justify-content: initial;
        width: 80%;
    }

    .nav_profile_container {
        width: 100%;
    }

    #logout {
        width: 100%;
        padding: 1rem 0rem;
        margin: auto;
    }

        .side_nav li:hover {
    background-color:var(--navhover);
    transition: all 0.3s;
    transform: translateX(1rem);
    }

    .side_nav li:hover .nav_text {
        color: white;
        font-weight: 600;
    }

    .side_nav li:hover .icon {
        fill: #6357E3;
    }

            .dropdown {
        width: 80%;
    }

    .nav_button {
        display: block;
    }

    .close_button {
        display: block;
    }

        
    }
@media (min-width:961px) {
        .width {
        width: 25%;
    }

        .icon {
        transform: scale(0.75);
    }

        .home {
        transform: scale(0.75);
    }

    #logout {
        margin: auto;
        padding: 0.5rem 0rem;
    }
    
}
@media (min-width:1025px) {
    .width {
        width: 20%;
    }

    
    .side_nav li {
        margin: 1rem;
    }

    .icon {
        transform: scale(1);
    }

    .home {
        transform: scale(1);
    }
    
}
@media (min-width:1281px) {
    .width {
        width: 18%;
    }

}


</style>