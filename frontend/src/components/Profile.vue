<template>
  <div class="profile_container">
      <div class="profile_image_container">
        <img class="profile_image" src="../assets/placeholder.jpg">
      </div>
      <div class="profile_text_container">
        <h3 class="profile_name"> {{ this.userArr.userName }}</h3>
        <h4 class="profile_sub"> {{ this.userArr.userEmail }} </h4>
      </div>
      <div class="profile_button_container">
          <a class="subscribe_button">Subscribe</a>
      </div>

  </div>
</template>

<script>
export default {
name:"Profile",
data() {
  return {
    userArr: [],
    name: "John Doe",
    email: "johndoe17@gmail.com"
  }
},
methods: {
    fetchUser: async function () {
        try {
          const response = await fetch('https://my-json-server.typicode.com/Evany226/demo/users')
          const data = await response.json();
          this.userArr = data[1];
          console.log(this.userArr)
      } catch(error) {
          console.log(error)
      }
    },
},
created() {
  this.fetchUser();
},
}
</script>

<style scoped>

.subscribe_button {
  background-color: var(--login);
  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 600;
  padding: 0.75rem 2rem;
  text-decoration: none;
  transition: all 250ms;
  margin-left: 0;
}

.subscribe_button:hover {
  background-color: var(--loginhover);
  border: solid 1px black;
}

.profile_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 3rem 0rem;
}

.profile_text_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin-top: 1.5rem;

  margin-bottom: 2rem;

}

.profile_image {
  border-radius: 50%;
  width: 50%;
}

.profile_image_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
}

.profile_name {
  font-weight: 700;
  color: var(--profiletext);
  
}

.profile_sub {
  font-weight: 500;
  color: var(--profiletext)
}

.profile_button_container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}

</style>