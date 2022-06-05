<template>
<div>
    <div class="alert_container" ref="alert" v-if="isError"  @click="close">
        <div class="alert_title">
            <h4 class="message">This is an Error Message This is an Error Message This is an Error Message This is an Error MessageThis is an Error Message</h4>
        </div>
        <div class="close_button">
            <i class="far fa-times-circle" ></i>
        </div>
    </div>

    <div class="success_container" ref="alert" @click="close">
        <div class="success_title">
            <h4 class="success_message">This is a Success message This is a Success message This is a Success message This is a Success message</h4>
        </div>
        <div class="close_button">
            <i class="fas fa-check"></i>
        </div>
    </div>
</div>
</template>

<script scoped>
export default {
name: "Error",
  props: {
    isError: {
      type: Boolean,
    },

    message: {
      type: String,
    },
  },
data() {
    return {
        //isError: true,
    }
},  
methods: {
   close() {
        this.$refs.alert.style.display = "none";
   },
}

}
</script>

<style>


.fa-times-circle {
    font-size: 3rem;
    color: #90110e;
}

.fa-check {
    font-size: 2rem;
    color: green;
    border-radius: 50%;
    border: solid 0.25rem green;
    padding: 0.5rem;


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
    background-color: #f6a7a3;
    border-radius: 0.5rem;
    border-left: solid 0.5rem #90110e;
    cursor: pointer;
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


.success_container {
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
    cursor: pointer;
}

.success_title {
        display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 80%;
    margin-left: 1rem;
    text-align: center;
}

.success_message {
    font-weight: 500;
    font-size: 1.5rem;
}


</style>