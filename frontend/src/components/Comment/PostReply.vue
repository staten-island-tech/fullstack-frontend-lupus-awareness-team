<template>
  <section class="post_section">
    <div class="post_container">
        <div class="pfp_container">
          <img class="pfp_image" src="@/assets/placeholder.jpg">
        </div>
        <div class="post_reply_container">
          <h4 class="reply_user">@User1234</h4>
          <textarea type="text" class="input" placeholder="Reply..."></textarea>
          <button class="submit_reply" @click="post">Submit</button>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "PostReply",
}
</script>

<style scoped>
    .post_section {
    border-top: 2px solid lightgray ;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0rem;
    margin-top: 4rem;
    
}

.post_container {
  display: flex;
    width: 90%;
    padding: 1rem 0rem;
    margin-left: 10%;
}

.pfp_container {
  width: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pfp_image {
  width: 70%;
  border-radius: 50%;
}

.post_reply_container {
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
}

.input {
  width: 60%;
  height: 50%;
  border: solid 1px var(--black);
  font-size: 2rem;
  padding: 1rem;
  resize: none;
  margin: 2rem 0rem;
}


.submit_reply {
  appearance: none;
  background-color: var(--service);
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: var(--commentbutton);
  cursor: pointer;
  font-size: 2rem;
  font-weight: 500;
  padding: 0.5rem 1.5rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: auto;
  height: 50%;
  transition: all .3s;
}

.submit_reply:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.submit_reply:hover {
  background-color: black;
  color: white;
}

.submit_reply:active {
  background-color: white;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
  transition: 0.3s;
}
.reply_user {
    font-weight: bold;
    margin: 0 2rem;
}
</style>