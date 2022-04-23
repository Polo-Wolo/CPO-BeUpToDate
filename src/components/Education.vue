<template>
  <div class="container">
    <div class="sample-input">
      <h1>
        <center><strong>My Education</strong></center>
      </h1>
      <br />
      <FormKit type="group" v-model="formData">
        <!-- Nom  -->
        <FormKit
          name="title"
          label="Nom de la formation"
          placeholder="Entrer le nom de la formation"
          validation="required"
          validation-behavior="live"
        />
        <!-- Lieu de l'expérience -->
        <FormKit
          name="location"
          label="Lieu de la formation professionnelle"
          placeholder="Entrer le nom du lieu"
          validation="required"
          validation-behavior="live"
        />
        <!--Start Work Experience-->
        <FormKit
          type="date"
          name="date_start"
          value="2011-01-01"
          label="Début apprentissage"
          help="Entrer la date de début de votre formation professionnelle"
          validation="required|before:2010-01-01"
          validation-visibility="live"
        />
        <!-- End Work Experience-->
        <FormKit
          type="date"
          name="date_end"
          value="2011-01-01"
          label="Fin apprentissage"
          help="Entrer la date de fin de votre formation professionnelle"
          validation="required|before:2010-01-01"
          validation-visibility="live"
        />
        <!-- Content -->
        <FormKit
          type="textarea"
          name="description"
          label="Décriver votre expérience"
          rows="10"
          placeholder="Remember to write in complete sentences."
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

<style src="./style.css"/>