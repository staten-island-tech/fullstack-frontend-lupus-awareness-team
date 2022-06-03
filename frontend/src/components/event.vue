<template>
<div class="event-container">
    <div class="top-container">
        <div class="user">
            <div class="user-image">
                <img class="user-pfp" :src="user.avatar">
            </div>
            <div class="user-text">
                <h4 class="username">{{`${user.firstName} ${user.lastName}`}}</h4>
                <!-- <h5 class="user-type">Student</h5> -->
            </div>   
        </div>

        <div class="service-container">
            <h4 v-if="event.hours != null" class="service-text">Service Hours: {{event.hours}}</h4>
        </div>
    </div>

    <div class="image-container">
        <img class="event-image" :src="event.media[0]"> 
    </div>    

    <div class="info-container">
        <div class="info-column-1"> 
            <div class="info-row">
                <h3>{{event.name}}</h3>
            </div>

            <div class="info-row">
                <div class="info-tags">
                    <h5 v-for="tag in event.tags" :key="tag" class="tag">{{tag}}</h5>
                </div>
                <router-link to="/event-details" id="details"> Details </router-link>
            </div>
        </div>

        <div class="info-column-2">
            <div class="info-text">
                <h4 class="info-time"> 2:00 PM - 4:00 PM</h4>
                <h4 class="info-address">{{event.location}}</h4>
                <h4 class="info-date"> Saturday, 06/04 </h4>
                <!-- <h4 class="info-date"> {{event.date}} </h4> -->
            </div>
        </div>
    </div>
    
</div>
    
</template>

<script>

export default {
name:"Event",
props: {
    user: Object,
    event: Object
}
}
</script>

<style>


.event-container {
    margin: 5rem 0rem;
    background-color: var(--eventBody);
    color: var(--profiletext);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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
    width: 70%;  
}

.event-image {
    width: 100%;
    height: 100%;
    border-radius: 2.5rem;
}

.user-pfp {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
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
    background-color: var(--service);
    padding: 1rem 1.5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

}


.info-container {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 4rem 0rem;
}

.info-time {
    font-size: 2rem;
    font-weight: 600;
}

.info-address {
    font-size: 2.5rem;
}

.info-date {
    font-weight: 500;
    font-size: 2.5rem;
}

#details {
  background-color: var(--details);
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 0rem;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  margin: 1.5rem 0rem;
  padding: 0.5rem 0rem;
      font-size: 1.8rem;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 4rem;
}



#details:hover {
   background-color: var(--detailsHover);
   transition: 0.3s;
   transform: translateY(-3px);
}

.info-text {
    width: 90%;
}

.info-column-1 {
    width: 45%;
    display: flex;
    flex-direction: column;

}

.info-column-2 {
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.info-row{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.info-tags {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
    margin-right: 2rem;
}

.tag {
    padding: 0.5rem 1rem;
    background-color: var(--service);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

@media (min-width:320px)  { 

    .event-container {
        width: 80%;
    }

    #browse {
        font-size: 3rem;
    }

    .info-row {
        flex-direction: column;
    }

    .tag {
        margin: 0rem 0.5rem;
    }

    .service-text {
        font-size: 1.5rem;
    }

    .info-container {
        flex-direction: column;
    }

    .info-column-1 {
        width: 100%;
        padding: 1rem 0rem;
    }

    .info-column-2 {
        width: 100%;
        text-align: center;
    }

    .info-row {
        flex-direction: row;
    }

    .info-tags {
        width: 35%;
    }


 }
@media (min-width:481px)  { 
    .service-text {
        font-size: 1.8rem;
    }
}
@media (min-width:641px)  {
    .event-container {
        width: 90%;
    }

    .service-text {
        font-size: 1.8rem;
    }

    #browse {
        font-size: 4rem;
    }

    .info-row {
    padding-top: 1.5rem;
  }
}
@media (min-width:961px)  { 
    .info-container {
        flex-direction: row;
    }

    .info-column-1 {
        width: 100%;
        padding: 0rem;
    }

    .info-tags {
        width: 50%;
    }

    .info-row {
        flex-direction: row;
        padding: 0rem;
    }

    .service-text {
        font-size: 2.25rem;
    }

}
@media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { 

    .event-container {
        width:70%;
    }


 }



</style>
