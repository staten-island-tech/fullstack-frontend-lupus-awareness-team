<template>
    <div class="flex">
        <div class="list_image">
            <img :src="eventInfo.eventImage" alt="" class="list_src">
        </div>
        <div class="list_text">
            <h4 class=""> {{eventInfo.eventName}} </h4>
            <h5 class=""> {{eventInfo.eventDate}} </h5>
        </div>
        <div class="list_time">
            <h4 class=""> {{eventInfo.eventTime}}</h4>
        </div>
    </div>
</template>

<script>
export default {
name: "ToDoList",
props: ["eventInfo"],
data() {
    return {

    }
},
created() {
},
computed: {

}
}
</script>

<style scoped> 

.flex  {
    display: flex;
}

.list_image {
    width: 30%;
    display:flex;
    align-items: center;
    justify-content: center;
}

.list_text {
    width: 40%;
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
    color: var(--eventTab);
}

.list_time {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--dbAccent);
    color: var(--eventTab);
    width: 30%;
}

.list_src {
    width: 60%;
    border-radius: 0.5rem;
}

</style>