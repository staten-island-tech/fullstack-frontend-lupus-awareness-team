<template>
<div class="event-container">
    <div class="event-image-container">
    <img class="event-image" src="../assets/event-placeholder.jpg">
    </div>
    <div class="words">
    <div class="user-info">
    <div class="circle"></div>
        <div class="user-profile">
        <h3 class="username">User1234</h3>
        <h4 class="user-type">User Type</h4>
        </div>
    </div>
    <div class="event-info">
        <h3 class="event-title">Insert Event Name</h3>
        <h4 class="event-time">Insert Event Time</h4>
        <h4 class="event-location">Insert Event Location</h4>
        <h4 class="event-date">Insert Event Date</h4>
        <h4 class="service-hour-info">#Service Hours</h4>
        <h5 class="event-description">Insert Event Description</h5>
    </div>
    <div class="event-buttons">
        <btn class="tag">Tag</btn>
        <btn class="interest">I'm Interested</btn>
        <btn class="details">Details</btn>
    </div>
    </div>
</div>
</template>

<script>
export default {
name:"Event",
}
</script>

<style>
.user-info {
    display: flex;
    flex-direction: row;
}

.user-profile {
    display: flex;
    flex-direction: column;
}

.circle {
  height: 35px;
  width: 35px;
  background-color: #555;
  border-radius: 50%;
}

.username , .user-type {
    font-size: 1.5rem;
    margin: .75rem;
}

.event-container {
    display: flex;
    flex-direction: row;
    padding: 6rem;
}

.event-buttons {
    display: flex;
    flex-direction: row;
}

img {
    max-width: 40rem;
    height: 25rem; 
    border-radius: 12px;
    margin: 2rem;
}

.words {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-left: 4rem;
}
</style>
