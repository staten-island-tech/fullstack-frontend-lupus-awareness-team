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

    <div class="info-container">
        <div class="info-column">
            <h3>Park Cleanup Volunteering</h3>
        </div>

        <div class="info-column">
            <div class="info-text">
                <h4 class="info-time"> 2:00 PM - 4:00 PM</h4>
                <h4 class="info-address"> Insert Address Here </h4>
                <h4 class="info-date"> Saturday, April 2nd </h4>
            </div>
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
    margin: 5rem 0rem;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    border-radius: 2rem;
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
    margin-left: 3rem;
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
    background-color: var(--background);
    padding: 1rem 1.5rem;
}


.info-container {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 4rem 0rem;
}

.info-column {
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.info-time {
    font-size: 2.5rem;
    font-weight: 600;
}

.info-address {
    font-size: 3rem;
}

.info-date {
    font-weight: 500;
}
</style>
