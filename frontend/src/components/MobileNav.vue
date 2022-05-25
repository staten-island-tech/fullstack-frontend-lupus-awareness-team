<template>
  <nav class="bottom_nav">
      
  </nav>
</template>

<script>
export default {
name: "MobileNav",
}
</script>

<style scoped>

.bottom_nav {
    width: 100%;
    height: 6vh;
    background-color: var(--bottomnav);
    position: fixed;
    bottom: 0;
    display: flex;
}


@media (min-width:320px)  {
  .bottom_nav {
      display: flex;
  }

}

@media (min-width:481px)  { 

}
@media (min-width:641px)  {

    .bottom_nav {
        display: none;
    }


 }
@media (min-width:961px)  { 

}
@media (min-width:1025px) { 


 }
@media (min-width:1281px) { 

}

</style>