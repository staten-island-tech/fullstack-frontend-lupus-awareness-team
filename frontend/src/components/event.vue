<template>
<div class="event-container">
    <div class="event-image-container">
    <img class="event-image" src="../assets/event-placeholder.jpg">
    </div>
    <div class="event-info">
        <h3 class="event-title">Insert Event Name</h3>
        <h4 class="event-time">Insert Event Time</h4>
        <h4 class="event-location">Insert Event Location</h4>
        <h4 class="event-date">Insert Event Date</h4>
        <h5 class="event-description">Insert Event Description</h5>
    </div>
</div>  
</template>

<script>
export default {
name:"Event",
}
</script>

<style>

.event-image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem;
}

img {
    width: 65%;
}

.event-info {
    display: flex;
    flex-direction: column; 
    padding: 2rem;
}

.event-title {
    margin: 2rem;
} 

.event-time, .event-location, .event-date, .event-description {
    margin: 1rem 2rem;
}



</style>
