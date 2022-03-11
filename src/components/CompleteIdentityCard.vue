<template>
  <div class="container">
    <div class="sample-input">
      <h1>
        <center><strong>BeUpToDate</strong></center>
      </h1>

      <FormKit type="group" v-model="formData">
        <!-- Nom -->
        <FormKit
          name="nom"
          label="Nom"
          placeholder="Entre ton nom ici"
          validation="required"
          validation-behavior="live"
        />
        <!-- Prénom -->
        <FormKit
          name="Prénom"
          label="Prénom"
          placeholder="Entre ton prénom ici"
          validation="required"
          validation-behavior="live"
        />
        <!--File import (Photo) -->
        <FormKit
          type="file"
          label="Photo de profil"
          accept=".pdf,.jpg,.png,.psd,.jpeg,.jfif"
          help="Sélectionner une photo"
          multiple
        />
        <!-- Date de naissance -->
        <FormKit
          type="date"
          value="2011-01-01"
          label="Birthday"
          help="Entrer votre date de naissance"
          validation="required|before:2010-01-01"
          validation-visibility="live"
        />
        <!-- Email -->
        <FormKit
          type="email"
          label="Email address"
          help="Entrer votre adresse email"
          validation="required|email|ends_with:.edu,.com,.fr"
          validation-visibility="live"
          placeholder="vikas@school.edu"
        />
        <!-- Telephone -->
        <FormKit
          type="tel"
          label="Phone number"
          placeholder="xx xx xx xx xx"
          validation="matches:/^[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}$/"
          :validation-messages="{
            matches:
              'Le numéro de portable doit être sous le format xx xx xx xx xx',
          }"
          validation-visibility="dirty"
        />
        <!-- Opinion - Radio choice -->
        <FormKit
          name="Mode"
          label="Mode"
          help="Quel mode préférez-vous dans votre portfolio ?"
          type="radio"
          value="Black"
          :options="['White', 'Black']"
        />
        <!-- Range bar -->
        <div class="side-by-side">
          <FormKit
            name="Niveau de nullité de Pierrig en codage"
            label="Niveau de nullité de Pierrig en codage"
            v-model="recommendation"
            help=" Quel est le niveau de nullité de Pierrig en codage sur une échelle de 1 à 10 ?"
            type="range"
            min="0"
            max="9"
          />
          <pre class="range-output">{{ recommendation }} </pre>
        </div>
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
