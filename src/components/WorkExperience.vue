<template>
  <div class="container">
    <div class="sample-input">
      <h1>
        <center><strong> My Work Experience</strong></center>
      </h1>
      <br />
      <FormKit type="group" v-model="formData">
        <!-- Nom Société -->
        <FormKit
          name="company"
          label="Nom de l'entreprise"
          placeholder="Entrer le nom de l'entreprise"
          validation="required"
          validation-behavior="live"
        />
        <!-- Lieu de l'expérience -->
        <FormKit
          name="location"
          label="Lieu de l'expérience professionnelle"
          placeholder="Entrer le nom du lieu"
          validation-behavior="live"
        />
        <!-- Lien -->
        <FormKit
          name="company_link"
          label="Lien de la société"
          placeholder="Entrer le lien de l'entreprise"
          validation-behavior="live"
        />
        <!--Durré de travail pas représenté parail dans le diagramme de classe.-->
        <!--Start Work Experience-->
        <FormKit
          type="date"
          name="start_date"
          value="2011-01-01"
          label="Début de votre expérience professionnelle"
          help="Entrer la date de début de votre expérience professionnelle"
          validation="required|before:2010-01-01"
          validation-visibility="live"
        />
        <!-- End Work Experience-->
        <FormKit
          type="date"
          name="end_date"
          value="2011-01-01"
          label="Fin de l'expérience professionnelle"
          help="Entrer la date de fin de votre expérience professionnelle"
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

        <FormKit
          type="select"
          name="type"
          label="Sélectionner le type de l'expérience"
          :options="['Stage', 'CDI', 'CDD', 'Job étudiant']"
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