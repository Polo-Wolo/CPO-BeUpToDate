<template>
  <Content v-model="config" />
  <TestAffichageConfig v-model="config" />
  <div class="selection:bg-green-100"></div>
</template>

<script>
import { defineComponent } from "vue";
import Content from "./components/Content.vue";
import TestAffichageConfig from "./components/TestAffichageConfig.vue";

export default {
  name: "App",
  components: { Content, TestAffichageConfig },
  data() {
    return { config: {} };
  },
};
</script>