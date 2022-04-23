<template>
  <div class="container">
    <slot name="header"></slot>
    <br />
    <button @click="toggleContent()">ToggleContent</button>
    <br />
    <div class="content" v-if="show_content">
      <br />
      <slot></slot>
      <br />
    </div>
    <br />
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