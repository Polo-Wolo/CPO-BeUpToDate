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
          name="Society"
          label="Nom de l'entreprise"
          placeholder="Entrer le nom de l'entreprise"
          validation="required"
          validation-behavior="live"
        />
        <!-- Lieu de l'expérience -->
        <FormKit
          name="Place"
          label="Lieu de l'expérience professionnelle"
          placeholder="Entrer le nom du lieu"
          validation-behavior="live"
        />
        <!-- Lien -->
        <FormKit
          name="Link"
          label="Lien de la société"
          placeholder="Entrer le lien de l'entreprise"
          validation-behavior="live"
        />
        <!--Start Work Experience-->
        <FormKit
          type="date"
          value="2011-01-01"
          label="Début de votre expérience professionnelle"
          help="Entrer la date de début de votre expérience professionnelle"
          validation="required|before:2010-01-01"
          validation-visibility="live"
        />
        <!-- End Work Experience-->
        <FormKit
          type="date"
          value="2011-01-01"
          label="Fin de l'expérience professionnelle"
          help="Entrer la date de fin de votre expérience professionnelle"
          validation="required|before:2010-01-01"
          validation-visibility="live"
        />
        
        <!-- Content -->
        <FormKit
          type="textarea"
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
