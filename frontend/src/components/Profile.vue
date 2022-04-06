<template>
  <div class="profile_container">
      <div class="profile_image_container">
        <img class="profile_image" src="../assets/placeholder.jpg">
      </div>
      <div class="profile_text_container">
        <h3 class="profile_name"> {{ this.userArr.userName }}</h3>
        <h4 class="profile_sub"> {{ this.userArr.userEmail }} </h4>
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
.profile_container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 3rem 0rem;
  z-index: 2;
}

.profile_text_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  margin-top: 1.5rem;
  z-index: 3;
  margin-bottom: 2rem;

}

.profile_image {
  border-radius: 50%;
  z-index: 3;
  width: 40%;
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

</style>