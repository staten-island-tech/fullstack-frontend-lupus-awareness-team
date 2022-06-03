<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop="">
        <header class="modal-header">
          <h3 class="header-text">Select a theme</h3>
        </header>

        <section class="modal-body">
          <div class="body-container">
            <div class="circle" id="purple" @click="main"></div>
          </div>
          <div class="body-container">
            <div class="circle" id="black" @click="dark"></div>
          </div>
          <div class="body-container">
            <div class="circle" id="shrek" @click="shrek"></div>
          </div>
        </section>

      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'ThemeModal',
    methods: {
      close() {
        this.$emit('close');
      },
          main() {
        if (this.$parent.$refs.theme.classList.contains("dark")) {
        this.$parent.$refs.theme.classList.remove("dark");
        this.$parent.$refs.theme.classList.add("main");
        }

        if (this.$parent.$refs.theme.classList.contains("shrek")) {
        this.$parent.$refs.theme.classList.remove("shrek");
        this.$parent.$refs.theme.classList.add("main");
        }
    },
    dark() {
        if (this.$parent.$refs.theme.classList.contains("main")) {
        this.$parent.$refs.theme.classList.remove("main");
        this.$parent.$refs.theme.classList.add("dark");
        }

        if (this.$parent.$refs.theme.classList.contains("shrek")) {
        this.$parent.$refs.theme.classList.remove("shrek");
        this.$parent.$refs.theme.classList.add("dark");
        }
    },
    shrek() {
        if (this.$parent.$refs.theme.classList.contains("main")) {
        this.$parent.$refs.theme.classList.remove("main");
        this.$parent.$refs.theme.classList.add("shrek");
        }

        if (this.$parent.$refs.theme.classList.contains("dark")) {
        this.$parent.$refs.theme.classList.remove("dark");
        this.$parent.$refs.theme.classList.add("shrek");
        }
    }
    },
  };
</script>

<style scoped>

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }

.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.25);
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
    border-bottom: 2px solid #eeeeee;
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
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .body-container {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #eeeeee;
  }

  .circle {
    height: auto;
    width: 60%;
    border-radius: 50%;
    padding-top: 55%;
    position: relative;
    cursor: pointer;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

#purple {
    background-color: var(--accent);
}

#black {
    background-color: #1f1f1f;
}

#shrek {
    background-color: #3A9F49;
}

@media (min-width:320px)  {
  .modal {
    width: 50%;
    height: 10%;
  }

}

@media (min-width:481px)  { 
  .modal {
    width: 50%;
    height: 15%;
  }
}
@media (min-width:641px)  {

  .modal {
    width: 50%;
    height: 15%;
  }

 }
@media (min-width:961px)  { 

  .modal {
    width: 30%;
    height: 20%;
  }

}
@media (min-width:1025px) { 

.modal {
    width: 30%;
    height: 20%;
}

 }
@media (min-width:1281px) { 

}


</style>