<template>
  <nav class="bottom_nav">
          <Modal v-show="isModalVisible" @close="closeModal" />
    <div class="bottom_nav_icons">
            <div>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: white;transform: ;msFilter:;"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg>
                <router-link to="/" class="nav_text">Home</router-link>
            </div>

            <div>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: white;transform: ;msFilter:;"><path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z"></path></svg>
                <router-link to="/about" class="nav_text">Dashboard</router-link>
            </div>
            <div>
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: white;transform: ;msFilter:;"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"></path><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path></svg>
                <a href="#" id="create" @click="showModal">Create</a>
            </div>
            <div id="logout">
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: white;transform: ;msFilter:;"><path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></svg>
                <a href="#" id="logout_button">Log out</a>
            </div>
    </div>
  </nav>

</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  name: "MobileNav", 
  components: {
    Modal,
  },
    data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
}
</script>

<style>

.nav_text {
  width: 100%;
  text-align: center;
}

.bottom_nav {
    width: 100%;
    height: 6vh;
    background-color: var(--bottomnav);
    position: fixed;
    bottom: 0;
    display: flex;
    z-index: 15;
}
.bottom_nav_icons >* {
  display: flex;
  width: 33%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.bottom_nav_icons a { 
  text-decoration: none;
  font-size: 2.5rem;
  color: var(--navtext);
  display: block;
  margin: 0 auto;
}
.bottom_nav_icons {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.bottom_nav_icons >*:hover {
background-color: var(--navhover);
transition: all 0.3s;
}

.bottom_nav_icons >*:hover .nav_text {
    font-weight: 600;
}

#create {
  width: 100%;
  text-align: center;
}

#logout_button {
  width: 100%;
  text-align: center;
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