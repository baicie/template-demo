<template>
  <footer id="footer">footer</footer>
</template>
<script>
import dayjs from "dayjs";
import { computed } from "vue";
export default {
  props: {
    isCN: Boolean,
  },
  setup() {
    const showJeecg = computed(() => {
      return dayjs().isBefore(dayjs("2023-09-10"));
    });
    return {
      dayjs,
      showJeecg,
    };
  },
};
</script>
