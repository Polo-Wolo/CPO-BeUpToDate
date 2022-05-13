<template>
  <Content v-model="config" />
  <TestAffichageConfig v-model="config" />
  <div class="selection:bg-green-100"></div>
</template>

<script>
import { defineComponent } from "vue";
import Content from "./components/Form/Content.vue";
import TestAffichageConfig from "./components/Form/TestAffichageConfig.vue";

export default {
  name: "App",
  components: { Content, TestAffichageConfig },
  data() {
    return { config: {} };
  },
};
</script>