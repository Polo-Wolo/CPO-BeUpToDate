<template>
  <div class="container">
    <slot name="header"></slot>
    <FormKit
      id="addButton"
      type="button"
      label="add project"
      @click="addItem()"
    />
    <div class="content">
      <div v-for="item in items" :key="item.id">
        <div class="item">
          <slot></slot>
          <FormKit
            type="button"
            label="delete project"
            @click="deleteItem(index)"
          />
        </div>
      </div>
      <h2>Modeled group values in Listable</h2>
      <pre>{{ items }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "Listable",
  components: {},
  props: {
    modelValue: "",
  },
  data() {
    return {
      max_id: 0,
      items: Array(),
    };
  },
  methods: {
    addItem() {
      console.log("addProject");
      this.max_id++;
      this.items.push({ id: this.max_id });
      console.log(this.items.length);
    },
    deleteItem(index) {
      console.log("deleteProject");
      console.log(this.items.length);
      this.items.splice(index, 1);
      if (this.items.length == 0) {
        this.max_id = 0;
      }
    },
    updateValue(event) {
      this.$emit("update:modelValue", this.modelValue);
    },
  },
};
</script>
<style src="./style.css"/>
<style scoped>
/* .header {
  border: solid 0.2em;
  border-color: crimson;
}
.container {
  border: solid 0.2em;
  border-color: greenyellow;
} */
</style>