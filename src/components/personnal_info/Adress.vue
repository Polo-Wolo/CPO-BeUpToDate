<template>
  <div class="container">
    <div class="sample-input">
      <h1>
        <center><strong>Adress</strong></center>
      </h1>

      <FormKit type="group" v-model="formData">
        <!-- City -->
        <FormKit
          name="city"
          label="Ville"
          placeholder="Ville"
          validation="required"
          validation-behavior="live"
        />
        <!-- Street -->
        <FormKit
          name="street"
          label="Rue"
          placeholder="Rue"
          validation="required"
          validation-behavior="live"
        />
        <!-- Number -->
        <FormKit
          name="number"
          label="Numéro"
          placeholder="Numéro"
          validation="required"
          validation-behavior="live"
        />
        <!-- Country -->
        <FormKit
          name="country"
          label="Pays"
          placeholder="Pays"
          validation="required"
          validation-behavior="live"
        />
      </FormKit>

      <h2>Modeled group values</h2>
      <pre class="form-data">{{ formData }}</pre>
    </div>
  </div>
  <br /><br /><br />
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const recommendation = ref("9");
    const formData = ref({});

    return {
      recommendation,
      formData,
    };
  },
  methods: {
    PrintConsole: function () {
      console.log("Button click");
    },
  },
};
</script>

<style src="../style.css"/>