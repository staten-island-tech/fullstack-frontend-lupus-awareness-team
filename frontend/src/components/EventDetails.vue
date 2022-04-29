<template>
<div class="event-section">
<div class="event-details-container">
    <div class="top-event-container">
        <div class="detail-user">
            <div class="detail-user-image">
                <img class="detail-user-pfp" src="../assets/placeholder.jpg">
            </div>
            <div class="detail-user-text">
                <h4 class="detail-username">User1234</h4>
                <h5 class="detail-user-type">Student</h5>
            </div>   
        </div>

        <div class="detail-service-container">
            <h4 class="detail-service-text">Service Hours: 10</h4>
        </div>
    </div>
    <div class='top-tittle'>
        <div class="detail-info-row">
            <h3>Park Cleanup Volunteering</h3>
        </div>

        <div class="detail-info-row">
            <div class="detail-info-tags">
                <h5 class="detail-tag">Animals</h5>
                <h5 class="detail-tag">Parks</h5>
                <h5 class="detail-tag">Volunteer</h5>
            </div>
        </div>
    </div>  


    <div class="detail-image-container">
        <EventImageView/>
    </div>  

    <div class="detail-info-container">
        <div class="detail-info-column">
            <div class="detail-info-text">
                <h4 class="detail-info-time"> 2:00 PM - 4:00 PM</h4>
                <h4 class="detail-info-address">485 Clawson St, Staten Island, NY 10306</h4>
                <h4 class="detail-info-date"> Saturday, April 2nd </h4>
            </div>
        </div>
    </div>
    
</div>
</div>
</template>

<script>
import EventImageView from '../components/EventImageView.vue'
export default {
  name: "EventDetails",
  components: {
    EventImageView,
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Merriweather+Sans:wght@700&display=swap');


.event-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 8rem;
    padding-bottom: 4rem;
    background-image: url("../assets/dogPark.jpg");
    background-color: var(--background);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.event-details-container {
    background-color: var(--eventBody);
    color: var(--profiletext);
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.top-event-container {
    width: 100%;
    display: flex;
    align-items: center;
}

.top-tittle {
    padding: 2rem;
}

.detail-event-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.detail-image-container {
    width: 70%;  
}

.detail-event-image {
    width: 100%;
    height: 100%;
    border-radius: 2.5rem;
}

.detail-user-pfp {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.detail-user {
    padding: 1.5rem 2rem;
    width: 70%;
    display: flex;
    align-items: center;
    margin-left: 3rem;
}

.detail-user-image{
    width: 10%;
}

.detail-user-text {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
}

.detail-username {
    font-size: 3rem;
    font-weight: 700;
}

.detail-user-type {
    font-size: 2.2rem;
    font-weight: 600;
}

.detail-service-container {
    background-color: var(--service);
    padding: 1rem 1.5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

}


.detail-info-container {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 4rem 0rem;
}

.detail-info-time {
    font-size: 2.5rem;
    font-weight: 600;
}

.detail-info-address {
    font-size: 3rem;
}

.detail-info-date {
    font-weight: 500;
}

.detail-info-text {
    width: 90%;
}

/* .detail-info-column-1 {
    width: 45%;
    display: flex;
    flex-direction: column;

} */

.detail-info-column {
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.detail-info-row{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;
}

.detail-info-tags {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
    margin-right: 2rem;
}

.detail-tag {
    padding: 0.5rem 1rem;
    background-color: var(--service);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    margin: 0rem 1rem;
}


</style> 
