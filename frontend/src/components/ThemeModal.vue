<template>
  <div class="modal-backdrop" @click="close">
    <div class="modal" @click.stop="">
      <header class="modal-header">
        <h3 class="header-text">Select a theme</h3>
      </header>

      <section class="modal-body">
       </section>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'ThemeModal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .modal {
      z-index: 15;
    background: #FFFFFF;    
    width: 30%;
    height: 20%;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }


  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0rem;
  }

  .header-text {
    color: var(--modal);
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

</style>