<template>
  <div class="container">
    <p>{{ modelValue.projects }}</p>
  </div>
  <br />
</template>

<script>
import { defineComponent } from "vue";

export default {
  name: "TestAffichageConfig",
  components: {},
  props: {
    modelValue: "",
  },
  data() {
    return {};
  },
};
</script>

<style src="./style.css"/>