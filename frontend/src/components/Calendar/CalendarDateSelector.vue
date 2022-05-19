<template>
  <div class="calendar-date-selector">
    <button class="calendar-button" @click="selectPrevious">﹤</button>
    <button class="calendar-button" @click="selectNext">﹥</button>
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
    }
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
}

.calendar-date-selector {
  cursor: pointer;
  user-select: none;
}

.calendar-button {
  background: none;
  font-size: 3rem;
  border: none;
  cursor: pointer;
  font-weight: bold;
    color: var(--calendarDayText)
}

</style>
