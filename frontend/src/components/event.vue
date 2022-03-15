<template>
<div class="event-container">

    <div class="top-container">
        <div class="user">
            <div class="user-image">
                <img class="user-pfp" src="../assets/placeholder.jpg">
            </div>
            <div class="user-text">
                <h4 class="username">User1234</h4>
                <h5 class="user-type">Student</h5>
            </div>   
        </div>

        <div class="service-container">
            <h4>Service Hours: 10</h4>
        </div>
    </div>

    <div class="image-container">
        <img class="event-image" src="../assets/event-placeholder.jpg"> 
    </div>    
    
    <div class="event-info">
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
    </div>
</div>
    
</template>

<script>

export default {
name:"Event",
methods: {
},
components: {
}
}
</script>

<style scoped>


.event-container {
    margin-top: 5rem;
    background-color: gray;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60%;
}

.top-container {
    width: 100%;
    display: flex;
    align-items: center;
}

.event-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image-container {
    width: 60%;  
}

.event-image {
    width: 100%;
    height: 100%;
}

.user-pfp {
    border-radius: 50%;
    width: 100%;
    height: 100%;
}

.user {
    padding: 1.5rem 2rem;
    width: 70%;
    display: flex;
    align-items: center;
}

.user-image{
    width: 10%;
}

.user-text {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
}

.username {
    font-size: 3rem;
    font-weight: 700;
}

.user-type {
    font-size: 2.2rem;
    font-weight: 600;
}

.service-container {
    background-color: white;
    padding: 1rem 1.5rem;
}

.top-section {
    margin-bottom: 1rem;
}

.tag ,.interest, .details {
    background-color: rgb(172, 172, 172);
    padding: 4px;
    border-radius: 12px;
}

</style>
