<template>
  <div class="profile_container">
      <div class="profile_image_container">
      
      <div class="profile-pic">
        <label class="-label" for="file">
          <span class="glyphicon glyphicon-camera"></span>
          <span>Change Image</span>
        </label>
        <input id="file" type="file" @change="loadFile($event)"/>
        <img src="../assets/placeholder.jpg" id="output" width="200" ref="output" />
</div>

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

  loadFile: function(event) { let image = this.$refs.output; 
  image.src = URL.createObjectURL(event.target.files[0]);
}


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


.profile-pic {
  color: transparent;
  transition: all .3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all .3s ease;
}  
  input {
    display: none;
  }
  
  img {
    position: absolute;
    object-fit: cover;
    width:165px;
    height: 165px;
    box-shadow: 0 0 10px 0 rgba(255,255,255,.35);
    border-radius: 100px;
    z-index: 0;
  }
  
  .-label {
    cursor: pointer;
    height: 165px;
    width:165px;
  }
  
  :hover {
   
    display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0,0,0,.8);
      z-index: 10000;
      color: rgb(250,250,250);
      transition:.2s;
      border-radius: 100px;
      margin-bottom: 0;
  }
  
  span {
    display: inline-flex;
    padding: .2em;
    height: 2em;
  }

body {
  height: 100vh;
  background-color: rgb(25, 24, 21);
  display: flex;
  justify-content: center;
  align-items: center;
} 
  a:hover {
    text-decoration: none;
  }


</style>