<template>
    <div class="alert_container" ref="alert" :class="{ none: active }" v-if="isSuccess">
        <div class="alert_title">
            <h4 class="message">This is a Success message This is a Success message This is a Success message This is a Success message</h4>
        </div>
        <div class="close_button">
            <i class="far fa-times-circle" @click="close"></i>
        </div>
    </div>
</template>

<script scoped>
export default {
name: "Success",
  props: {
    isSuccess: {
        type: Boolean,
    },
    message: {
      type: String,
    },
  },
data() {
    return {
        active: false,
    }
},  
methods: {
   close() {
        this.active = true;
   },
}

}
</script>

<style>

.none {
    opacity: 0;
}

.fa-times-circle {
    font-size: 3rem;
    color: green;
    cursor: pointer;
}

.message {
    font-weight: 500;
    font-size: 1.5rem;
}

.alert_container {
    display: flex;
    position: fixed;
    right: 0;
    bottom: 0;
    margin-right: 1rem;
    margin-bottom: 1rem;
    z-index: 10;
    width: 30%;
    padding: 1rem 0rem;
    background-color: greenyellow;
    border-radius: 0.5rem;
    border-left: solid 0.5rem green;
}

.alert_title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 80%;
    margin-left: 1rem;
    text-align: center;
}

.close_button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 20%;
}
</style>