<template>
  <section class="comment_section">
        <div class="comment_section_container">
            <PostComment/>
        </div>
  </section>
</template>

<script>
import PostComment from "./PostComment.vue"

export default {
    name:"Comment",
    components: {
        PostComment,
    }

}
</script>

<style>
.comment_section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    margin-top: 4rem;
}

.comment_title {
    padding: 0.5rem 1rem;
    background-color: white;
    margin-bottom: 2rem;
    font-size: 2.5rem;
}

.comment_section_container {
    background-color: white;
    width: 90vw;
    height: 70vh;
    border-radius: 1rem;
}

</style>