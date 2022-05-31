<template>
  <div class="calendar-date-selector">
    <button class="calendar-button" @click="selectPrevious"> &#10094; <h4>Previous</h4></button>
    <button class="calendar-button" @click="selectNext"><h4>Next</h4> &#10095;</button>
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

<style>
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
  font-size: 3rem;
  border: none;
  cursor: pointer;
  font-weight: bold;
    color: var(--calendarDayText)
}

</style>
