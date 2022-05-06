<template>
  <div class="container">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <FormKit
      type="button"
      :label="'ToggleContent : ' + show_content"
      @click="toggleContent()"
    />
    <div class="content" v-if="show_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collapsable",
  components: {},
  data() {
    return {
      show_content: true,
    };
  },
  methods: {
    toggleContent() {
      console.log("toggleContent");
      this.show_content = !this.show_content;
    },
  },
};
</script>
<style src="./style.css"/>
<style scoped>
.header {
  border: solid 0.2em;
  border-color: crimson;
}
.container {
  border: solid 0.2em;
  border-color: greenyellow;
}
</style>