<template>
    <div>
    <button @click="doSomethingWithToken">Call</button>
    <p>{{ apiMessage }}</p>
    </div>
  
</template>

<script>
export default {
    name: "external-api",
    data() {
        return {
            apiMessage: ""
        }
    },
methods: {
        async doSomethingWithToken() {
      try {
        const token = await this.$auth.getTokenSilently();
        const response = await fetch("http://localhost:8080", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        this.apiMessage = data;
        
      } catch (error) {
        console.log(error);
      }
}
}}
</script>

<style scoped>

button {
    font-size: 3rem;
    margin: 3rem;
}

</style>