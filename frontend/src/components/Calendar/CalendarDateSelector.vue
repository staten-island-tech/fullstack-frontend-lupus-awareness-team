<template>
  <div class="calendar-date-selector">
    <span @click="selectPrevious"><strong class="date-selector-button">﹤</strong></span>
    <span @click="selectNext"><strong class="date-selector-button">﹥</strong></span>
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
  justify-content: space-between;
  color: var(--grey-800);
}

.calendar-date-selector {
  cursor: pointer;
  user-select: none;
}

.date-selector-button {
  z-index: 3;
}

.selector-text {
  font-weight: bold;
}
</style>
