<template>
 <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
          <h2 class="header-text"> Create an Event!</h2>
        <button type="button" class="btn-close" @click="close"> X </button>
      </header>

      <section class="modal-body">
        <div class="form-header">
          <h2 class="title">upload Your Information Here</h2>
          
        </div>
      </section>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
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
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 60%;
    height: 80%;
    background-color: white;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: var(--purple);
  }

  .header-text {
    padding: 2rem 0rem;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    font-family: Montserrat, sans-serif;
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 3rem;
    padding: 0rem;
    margin-right: 1rem;
    cursor: pointer;
    font-weight: bold;
    color: red;
    background: transparent;
  }


</style>