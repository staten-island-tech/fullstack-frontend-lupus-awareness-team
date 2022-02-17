<template>
  <div class="container">
    <ImageView/>
    <div data-aos="fade-up" data-aos-duration="2000" class="item">1</div>
    <div data-aos="fade-up" data-aos-duration="2000" class="item">2</div>
    <div data-aos="fade-up" data-aos-duration="2000" class="item">3</div>
    <div data-aos="fade-up" data-aos-duration="2000" class="item">4</div>
    
  </div>
</template>

<script>
import ImageView from "@/components/EventImageView.vue";
export default {
name: 'Test',
components: {
  ImageView
}
}
</script>

<style scoped>

.item {
  width: 80vw;
  height: 30vh;
  margin: 2rem auto;
  background-color: lightgray;
}
</style>