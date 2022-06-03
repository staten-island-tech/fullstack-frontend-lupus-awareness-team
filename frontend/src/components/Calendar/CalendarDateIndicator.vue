<template>
  <div class="calendar-date-container">
    <h4 class="calendar-date-indicator">{{ selectedMonth }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    selectedDate: {
      type: Object,
      required: true
    }
  },
  computed: {
    selectedMonth() {
      return this.selectedDate.format("MMMM YYYY");
    }
  }
};
</script>

<style scoped>

.calendar-date-container {
  display: flex;
  justify-content: center;
  

}


.calendar-date-indicator {
  font-size: 2.5rem;
  font-weight: 500;
  margin-right: 1rem;
  padding: 1rem 1rem;
  color: var(--calendarDayText);
      border-bottom: solid 0.1rem var(--calendarDayText);
}
</style>