<template>
  <div class="container">
    <div class="sample-input">
      <h1>
        <center><strong>Identity</strong></center>
      </h1>

      <FormKit type="group" v-model="formData">
        <!-- Nom -->
        <FormKit
          name="name"
          label="Nom"
          placeholder="Entrez votre nom ici"
          validation="required"
          validation-behavior="live"
        />
        <!-- Prénom -->
        <FormKit
          name="surname"
          label="Prénom"
          placeholder="Entrez votre prénom ici"
          validation="required"
          validation-behavior="live"
        />
        <!--File import (Photo) -->
        <FormKit
          type="file"
          name="profile_picture"
          label="Photo de profil"
          accept=".pdf,.jpg,.png,.psd,.jpeg,.jfif"
          help="Sélectionnez une photo"
        />
        <!-- Date de naissance -->
        <FormKit
          type="date"
          name="birth_date"
          value="2011-01-01"
          label="Date de naissance"
          help="Entrez votre date de naissance"
          validation="required|before:2010-01-01"
          validation-visibility="live"
        />
        <!-- Email -->
        <FormKit
          type="email"
          name="email"
          label="Adresse mail"
          help="Entrez votre adresse email"
          validation="email|ends_with:.edu,.com,.fr"
          validation-visibility="live"
          placeholder="exemple.adresse@gmail.com"
        />
        <!-- Telephone -->
        <FormKit
          type="tel"
          name="phone_number"
          label="Numéro de téléphone"
          placeholder="xx xx xx xx xx"
          validation="matches:/^[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}$/"
          :validation-messages="{
            matches:
              'Le numéro de portable doit être sous le format xx xx xx xx xx',
          }"
          validation-visibility="dirty"
          help="Le numéro de portable doit être sous le format xx xx xx xx xx"
        />
        <!-- Opinion - Color Choice -->
        <FormKit
          type="color"
          name="color"
          label="Couleur Portfolio"
          placeholder="Sample color placeholder"
          help="Quelle couleur préférez-vous dans votre portfolio ?"
          validation="required"
          value="#3eaf7c"
          error-behavior="live"
        />
        <Adress />
      </FormKit>

      <h2>Modeled group values</h2>
      <pre class="form-data">{{ formData }}</pre>
    </div>
  </div>
  <br /><br /><br />
</template>

<script>
import { ref } from "vue";
import Adress from "./Adress.vue";

export default {
  components: { Adress },
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