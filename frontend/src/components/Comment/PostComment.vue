<template>
  <section class="post_section">
    <div class="post_container">
        <div class="pfp_container">
          <img class="pfp_image" src="@/assets/placeholder.jpg">
        </div>
        <div class="post_comment_container">
          <textarea type="text" class="input" placeholder="Add a comment..."></textarea>
          <button class="submit_comment" @click="post">Submit</button>
        </div>
    </div>
  </section>
</template>

<script>
export default {
name:"PostComment",
methods: {
  post() {
    console.log("Post")
  }
}
}
</script>

<style scoped>
.post_section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0rem;
}

.post_container {
  display: flex;
    width: 60%;
    padding: 1rem 0rem;
}

.pfp_container {
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pfp_image {
  width: 70%;
  border-radius: 50%;
}

.post_comment_container {
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.input {
  width: 90%;
  height: 80%;
  border: solid 1px var(--black);
  font-size: 2rem;
  padding: 0.5rem 1rem;
  resize: none;
  margin: 2rem 0rem;
}


.submit_comment {
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
  width: 90%;
}

.submit_comment:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.submit_comment:hover {
  background-color: black;
  color: white;
}




.submit_comment:active {
  background-color: white;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
  transition: 0.3s;
}

</style>