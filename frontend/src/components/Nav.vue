<template>
    <div>
        <div class="nav-button" v-if="nav">
            <i class="fas fa-bars" @click="toggle"></i>
        </div> 

        <div class="close-button" v-else>
            <i class="far fa-times-circle" @click="close"></i>
        </div>

        <ul ref="nav" class="side_nav" :class="{ width: expand }" >
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: white;transform: ;msFilter:;"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg>
                <router-link to="/">Home</router-link>
            </li>

            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: white;transform: ;msFilter:;"><path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z"></path></svg>
                <router-link to="/about">Dashboard</router-link>
            </li>

            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: white;transform: ;msFilter:;"><path d="M13.707 2.293a.999.999 0 0 0-1.414 0l-5.84 5.84c-.015-.001-.029-.009-.044-.009a.997.997 0 0 0-.707.293L4.288 9.831a2.985 2.985 0 0 0-.878 2.122c0 .802.313 1.556.879 2.121l.707.707-2.122 2.122A2.92 2.92 0 0 0 2 19.012a2.968 2.968 0 0 0 1.063 2.308c.519.439 1.188.68 1.885.68.834 0 1.654-.341 2.25-.937l2.04-2.039.707.706c1.134 1.133 3.109 1.134 4.242.001l1.415-1.414a.997.997 0 0 0 .293-.707c0-.026-.013-.05-.015-.076l5.827-5.827a.999.999 0 0 0 0-1.414l-8-8zm-.935 16.024a1.023 1.023 0 0 1-1.414-.001l-1.414-1.413a.999.999 0 0 0-1.414 0l-2.746 2.745a1.19 1.19 0 0 1-.836.352.91.91 0 0 1-.594-.208A.978.978 0 0 1 4 19.01a.959.959 0 0 1 .287-.692l2.829-2.829a.999.999 0 0 0 0-1.414L5.701 12.66a.99.99 0 0 1-.292-.706c0-.268.104-.519.293-.708l.707-.707 7.071 7.072-.708.706zm1.889-2.392L8.075 9.339 13 4.414 19.586 11l-4.925 4.925z"></path></svg>
                <a href="#" @click="theme">Theme</a>
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
                        <div class="circle" id="white"></div>
                        <h4 class="dropdown-text" @click="light">White</h4>
                    </div>
                </span>

            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: white;transform: ;msFilter:;"><path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path></svg>
                <a href="#">Settings</a>
            </li>


            <NavProfile />

        </ul>
    </div>
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
    },
    dark() {
        if (this.$parent.$refs.theme.classList.contains("main")) {
        this.$parent.$refs.theme.classList.remove("main");
        this.$parent.$refs.theme.classList.add("dark");
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
}

#purple {
    background-color: var(--accent);
}

#black {
    background-color: #1f1f1f;
}

#white {
    background-color: var(--white);
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
}

.side_nav li:lastchild {
    margin-top: auto;
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
    align-items: center;
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
    color: var(--navopen);
    font-size: 3rem;
}


.fa-times-circle {
    color: var(--navopen);
    font-size: 3rem;
}


</style>