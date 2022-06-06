<template>
  <div class="comment_wrapper">
        <div class="comment_container" @keyup.esc="closeEnterReply">
            <div class="container_header">
                <div class="pfp_container">
                    <img class="pfp_image" src="@/assets/placeholder.jpg">
                    <div class="user_container">
                        <h4 class="user_name"> User1234 </h4>
                        <h5 class="post_date"> Posted on: 6/3/2022 </h5>
                    </div>
                </div>
            </div>
            <div class="container_body">
                <h4 class="body_text">This is really great! I fully agree with what you wrote, and this is sure to help me out in the future. Thank you for posting this.</h4>
            </div>
            <div class="container_reply">
                <button class="reply_button" @click="reply">Reply</button>
                <Reply/>
                <PostReply v-show="enterReply"/>
            </div>
        </div>
  </div>
</template>

<script>
import Reply from "./Reply.vue"
import PostReply from "./PostReply.vue"
export default {
name: "Comment",
components: {
    Reply,
    PostReply
},
 data() {
    return {
      enterReply: false,
    };
  },
methods: {
    reply() {
        console.log("hello")
        this.enterReply = true
    },
    closeEnterReply() {
        this.enterReply = false
    }
    

}
}
</script>

<style scoped>
.comment_wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.comment_container {
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid var(--commentbutton);
    margin-bottom: 3rem;
}

.container_header {
    width: 100%;
    height: 30%;
    display: flex;
    padding: 1rem 0rem;
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
}

.body_text {
    font-weight: 500;
    color: var(--commentbutton)
}

.container_reply {
    width: 100%;
    height: 20%;
    padding: 2rem 0rem;
    display: flex;
    align-items: flex-start;
    margin-left: 2rem;
    flex-direction: column;
}

.reply_button {
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
  transition: all .3s;
}


.reply_button:hover {
  background-color: black;
  color: white;
}

.reply_button:active {
  background-color: white;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
  transition: 0.3s;
}

</style>