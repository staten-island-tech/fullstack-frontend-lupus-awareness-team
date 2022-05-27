<template>
    <div class="page">
        <Register />
    </div>
</template>

<script>
import Register from "../components/RegisterPage.vue";

export default {
    name: "RegisterPageView",
data() {
    return {
    }
},
components: {
    Register,
}

}
</script>

<style>

.page {
    width: 100%;
    height: 100vh;
    padding-top: 6rem;

}

</style>