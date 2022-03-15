<template>
<div class="event-container">
<div class="image-container">
    <img class="event-image" src="../assets/event-placeholder.jpg"> 
</div>    
<div class="event-info">
    <div class="user-info">
        <div class="user">
            <img class="user-pfp" src="../assets/placeholder.jpg">
        <div class="user-display">
            <h5 class="username">User1234</h5>
            <h6 class="user-type">User Type</h6>
        </div>   
        </div>
       
    </div>
    <div class="event-desc">
    <div class="top-section">
        <h5 class="event-title">Insert Event Name</h5>
        <h6 class="event-description">Insert Event Description</h6>
    </div>
        <h5 class="event-time">Insert Event Time</h5>
        <h5 class="event-location">Insert Event Location</h5>
        <h5 class="event-date">Insert Event Date</h5>
        <h6 class="service-hour-info">#Service Hours</h6>
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
methods: {
}
}
</script>

<style scoped>

body {
    background-color: #E9EBF1;
}

.event-container {
    background-color: white;
    width: 80rem;
    display: flex;
    align-items: center;
    margin: 0 auto;
    height: 23vh;
    overflow: hidden; 
    border-radius: 15px; 
}

.event-info {
    padding-left: 3rem;
}

.image-container {
    width: 40%;  
}

.event-image {
    width: 100%;
    border-radius: 4% 0 0 4% ;  
}

.user-info {
    margin-bottom: 1rem; 
}
.user-pfp {
    border-radius: 50%;
    width: 10%;
}

.user {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.user-display {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
}

.top-section {
    margin-bottom: 1rem;
}

.event-buttons{
    font-size: 2rem;
    display: flex;
    justify-content: space-evenly;
    margin: 1rem;
 
}

.tag ,.interest, .details {
    background-color: rgb(172, 172, 172);
    padding: 4px;
    border-radius: 12px;
}

</style>
