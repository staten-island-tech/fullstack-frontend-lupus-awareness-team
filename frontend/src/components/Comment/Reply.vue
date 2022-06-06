<template>
  <div class="reply_wrapper">
        <div class="reply_container">
            <div class="container_header">
                <div class="pfp_container">
                    <img class="pfp_image" src="@/assets/placeholder.jpg">
                    <div class="user_container">
                        <h4 class="user_name"> User1235 </h4>
                        <h5 class="post_date"> Posted on: 6/4/2022 </h5>
                    </div>
                </div>
            </div>
            <div class="container_body">
                <h4 class="reply_tag">@User1234</h4>
                <h4 class="body_text">This is really great! I fully agree with what you wrote.</h4>
            </div>
            
        </div>
  </div>
</template>

<script>
export default {
    name:"Reply",
}
</script>

<style scoped>
.reply_wrapper {
    border-top: 2px solid lightgray ;
    padding: 2rem 0;
    margin-top: 4rem;
    width: 100%;
}
.reply_container {
    margin-left: 10%;
}
    .pfp_container {
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
    margin-left: 2rem;
}

.pfp_image {
    width: 20%;
    border-radius: 50%;
}

.user_container {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 2rem;
}

.user_name {
    font-size: 2.5rem;
    color: var(--commentbutton)
}

.post_date {
    font-size: 1.5rem;
    margin-top: 0.5rem;
    font-weight: 500;
    color: var(--commentbutton)
}

.container_body {
    width: 100%;
    height: 50%;
    padding: 3rem;
    text-align: start;
    display: flex;
    flex-direction: row;
}

.body_text {
    font-weight: 500;
    color: var(--commentbutton)
}
.reply_tag {
    margin-right: 2rem;
}
</style>