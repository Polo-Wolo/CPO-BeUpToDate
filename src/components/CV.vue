<template>
  <div class="container mx-auto">
    <div class="sample-input">
      
      <h1>
      <center><strong> CV </strong></center>
      </h1>
      <br />
      <center>
      <FormKit type="group" v-model="formData">
        <!-- Name -->
        <FormKit
          name="title"
          label="Lien vers le CV"
          placeholder="Entrer le lien de l'entreprise"
          validation-behavior="live"
        />
        <!-- CV URL -->
        <FormKit
          name="link"
          label="Lien vers le CV"
          placeholder="Entrer le lien de l'entreprise"
          validation-behavior="live"
        />
      </FormKit>
      </center>
      <h2>Modeled group values</h2>
      <pre class="form-data">{{ formData }}</pre>
    </div>
  </div>
  <br />
  <br />
  <br />
</template>

<script lang ='ts'>
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

<style lang="scss" scoped>

</style>