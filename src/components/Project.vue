<template>
  <div class="container">
    <div class="sample-input">
      <h1>
        <center><strong> My Project </strong></center>
      </h1>
        <br>
      <FormKit type="group" v-model="formData">
        <!-- Nom Projet -->
        <FormKit
          name="Name Project"
          label="Nom du projet"
          placeholder="Entrer le nom du projet"
          validation="required"
          validation-behavior="live"
        />
        <!--Start Project-->
        <FormKit
          type="date"
          value="2011-01-01"
          label="Début de votre projet"
          help="Entrer la date de début de votre projet"
          validation="required|before:2010-01-01"
          validation-visibility="live"
        />
        <!-- End Project-->
        <FormKit
          type="date"
          value="2011-01-01"
          label="Fin  de votre projet"
          help="Entrer la date de fin de votre projet"
          validation="required|before:2010-01-01"
          validation-visibility="live"
        />
        <!-- Content -->
        <FormKit
          type="textarea"
          label="Décriver votre projet"
          rows="10"
          placeholder="Remember to write in complete sentences."
        />

        <!--Photo du projet (à voir si on fait avec direct import photo ou url?-->
        <FormKit
          type="file"
          label="Photo du projet"
          accept=".pdf,.jpg,.png,.psd,.jpeg,.jfif"
          help="Sélectionner une photo de votre projet"
          multiple
        />
      </FormKit>

      <h2>Modeled group values</h2>
      <pre class="form-data">{{ formData }}</pre>
    </div>
  </div>
   <br>
    <br>
     <br>
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
