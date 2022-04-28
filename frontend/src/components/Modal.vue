<template>
 <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
          <h2 class="header-text"> Create an Event!</h2>
                <div class="btn-close">
            <i class="far fa-times-circle" @click="close"></i>
        </div>
      </header>

      <section class="modal-body">
        <div class="form-header">
        <h2 class="form-title">Upload Your Information Here</h2>
        </div>
        <div class="upload-info">
          <form class="form">
          <label class="enter-event-name"
          for="enter-event-name"><b>Enter Event Name</b></label>
          <input class="event-name" type="text" placeholder="Event Name" name="event-name" required>

          <label class="enter-event-date"
          for="enter-event-date"><b>Enter Event Date</b></label>
          <input class="event-date" type="text" placeholder="Event Date" name="event-date" required>

          <label class="enter-event-time"
          for="enter-event-time"><b>Enter Event Time</b></label>
          <input class="event-time" type="text" placeholder="Event Time" name="event-time" required>

          <label class="enter-event-address"
          for="enter-event-address"><b>Enter Event Address</b></label>
          <input class="event-address" type="text" placeholder="Event Adress" name="event-address" required>

          <label class="enter-event-hours"
          for="enter-event-hours"><b>Enter Event Hours</b></label>
          <input class="event-hours" type="text" placeholder="Event Hours" name="event-hours" required>

          <label class="enter-event-tags"
          for="enter-event-tags"><b>Enter Event Tags</b></label>
          <input class="event-tags" type="text" placeholder="Event Tags" name="event-tags" required>

          <label for="file-upload" class="custom-file-upload"> 
            <img class="upload-icon" src="../assets/upload-icon.png">
             <i class="upload"></i> Upload File
          </label>
          <input type="file" id="file-upload" name="filename" class="upload-file-button">
          <input class="submit-button" type="submit"> 
        </form>
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

input[type="file"] {
  display: none;
}

.custom-file-upload {
font-size: 2rem;
background-color: var(--purple);
border: 1px solid rgba(27, 31, 35, .15);
border-radius: 0rem;
box-sizing: border-box;
color: #fff;
cursor: pointer;
font-size: 1.8rem;
font-weight: 600;
padding: 0.8rem 4rem;
text-align: center;
text-decoration: none;
margin: 1.5rem 0rem;
border-style: solid;
border-radius: 7px;
}

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
    position: absolute;
    top: 0;
    right: 0;
    font-size: 4rem;
    margin-right: 1rem;
    cursor: pointer;
    font-weight: bold;
    color: red;
  }

.upload-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40rem;
  margin: 0 auto;
}

.form-header {
  display: flex;
  justify-content: center;
  margin: 1rem;
}

.form-title {
  font-size: 2.5rem;
}
.enter-event-tags, .enter-event-name, .enter-event-time, .enter-event-date, .enter-event-hours, .enter-event-address {
  font-size: 3rem;
}

.event-tags, .event-name, .event-time, .event-date, .event-hours, .event-address {
  margin: 5px 0rem;
  font-size: 15px;
  border-style: solid;
  border-radius: 7px;
  border-color: #c4c4c4;
  padding: 3px;
  width: 40rem;
} 


.uplaod-file-button {
  font-size: 1rem;
  background-color: brown;
}


.submit-button {
  font-size: 1.5rem;
  background-color: var(--purple);
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 0rem;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 600;
  padding: 0.8rem 4rem;
  text-align: center;
  text-decoration: none;
  margin: 1.5rem 0rem;
  border-style: solid;
  border-radius: 7px;
}


.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.custom-file-upload {
  display: flex;
  justify-content: center;
  align-items: center;
}
.upload-icon {
  width: 10%;
  margin-right: 2rem;
}

</style>