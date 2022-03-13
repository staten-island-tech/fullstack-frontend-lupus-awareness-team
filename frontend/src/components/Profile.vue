<template>
  <div class="profile_container">
    <div class="profile_image_container">
      <img class="profile_image" src="../assets/placeholder.jpg">
    </div>
    <div class="profile_text_container">
      <h3 class="profile_name"> {{ name }}  </h3>
      <h4 class="profile_sub"> {{ email }} </h4>
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
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      users: [
            {
                userName: "John Doe",
                userEmail: "johndoe17@gmail.com"
            },
            {
                userName: "Jane Doe",
                userEmail: "janedoe45@yahoo.com"
            },
            {
                userName: "John Wick",
                userEmail: "johnwick1337@gmail.com"
            },

        ],
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
const data = await response.json();
console.log(data)
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
  margin: 5rem 0rem;
  z-index: 2;
}

.profile_text_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  margin-top: 1.5rem;
  z-index: 3;
  margin-bottom: 2rem;

}

.profile_image {
  border-radius: 50%;
  border: solid 0.5rem #C4C4C4;
  z-index: 3;
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

</style>