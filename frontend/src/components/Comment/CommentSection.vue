<template>
  <section class="comment_section">

    <div class="comment_section_container">
        <div class="comment_section_header">
            <PostComment/>
        </div>
        <div class="comment_section_body">
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
    </div>

  </section>
</template>

<script>
import PostComment from "./PostComment.vue"
import Comment from "./Comment.vue"

export default {
    name:"CommentSection",
    components: {
        PostComment,
        Comment,
    }

}
</script>

<style scoped>
.comment_section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    margin-top: 4rem;
}

.comment_section_container {
    border-radius: 1rem;
}

.comment_title {
    padding: 0.5rem 1rem;
    background-color: white;
    margin-bottom: 2rem;
    font-size: 2.5rem;
}

.comment_section_header{
    background-color: white;
    width: 90vw;
}

.comment_section_body {
    width: 90vw;
    background-color: white;
    padding: 4rem 0rem;
}

</style>