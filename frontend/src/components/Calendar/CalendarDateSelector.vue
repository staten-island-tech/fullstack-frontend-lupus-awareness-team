<template>
  <div class="calendar-date-selector">
    <button class="calendar-button" @click="selectPrevious"><i class="fas fa-arrow-left"></i><h5>Previous</h5></button>
    <button class="calendar-button" @click="selectNext"><h5>Next</h5><i class="fas fa-arrow-right"></i></button>
  </div>
</template>

<script>
import dayjs from "dayjs";


export default {
  name: "CalendarDateSelector",

  props: {
    currentDate: {
      type: String,
      required: true
    },

    selectedDate: {
      type: Object,
      required: true
    },
  },

  methods: {
    selectPrevious() {
      let newSelectedDate = dayjs(this.selectedDate).subtract(1, "month");
      this.$emit("dateSelected", newSelectedDate);
    },

/*    selectCurrent() {
      let newSelectedDate = dayjs(this.currentDate);
      this.$emit("dateSelected", newSelectedDate);
    },
*/

    selectNext() {
      let newSelectedDate = dayjs(this.selectedDate).add(1, "month");
      this.$emit("dateSelected", newSelectedDate);
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');

* {
  font-family: 'Montserrat', sans-serif;
}

.calendar-date-selector {
  display: flex;
  font-size: 5rem;
  font-weight: 400;
  color: var(--calendarDayText);
  justify-content: space-between;
}

.calendar-date-selector {
  cursor: pointer;
  user-select: none;
}

.calendar-button {
  display: flex;
  align-items: center;
  background: none;
  font-size: 2rem;
  border: none;
  cursor: pointer;
}

.fa-arrow-left {
  font-size: 1.5rem;
  margin: 1rem 0.5rem;
  
}

.fa-arrow-right {
  font-size: 1.5rem;
    margin: 1rem 0.5rem;
}

</style>
