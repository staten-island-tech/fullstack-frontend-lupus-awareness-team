<template>
<div class="event-container">
    <div class="event-info">
        <h4 class="service-hour-info">#Service Hours</h4>
    </div>
    <div class="event-image-container">
    <img class="event-image" src="../assets/event-placeholder.jpg">
    </div>
    <div class="user-info">
        <h3 class="username">User1234</h3>
        <h4 class="user-type">User Type</h4>
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

}

img {
    width: 65%;
}


</style>
