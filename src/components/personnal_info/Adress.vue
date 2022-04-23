<template>
  <div class="container">
    <div class="sample-input">
      <h1>
        <center><strong>BeUpToDate</strong></center>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  margin: auto;
  display: flex;
  justify-content: center;
}

.side-by-side {
  display: flex;
  align-items: flex-start;
}

pre.range-output {
  background: #eee;
  border-radius: 0.5em;
  text-align: center;
  margin-left: 1em;
  margin-top: 1.5em;
  font-weight: bold;
  padding: 0.5em;
  line-height: 1;
  width: 1.5em;
}

pre.form-data {
  box-sizing: border-box;
  background: #eee;
  border: 1px solid #ccc;
  width: 100%;
  padding: 1em;
  border-radius: 0.5em;
}
</style>
