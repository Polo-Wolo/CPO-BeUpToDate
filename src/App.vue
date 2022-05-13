<template>
  <Tab1></Tab1>
  <div class="selection:bg-green-100"></div>
</template>


<script>
import { defineComponent } from "vue";
import Tab1 from "./components/TabBar/Tab1.vue";
export default {
  name: "App",
  components: {Tab1},
  data() {
    return { config: {} };
  },
};
</script>