<template>
  <div class="container">
    <div class="sample-input">
      <h1>
        <strong> My Project </strong>
      </h1>
      <br />
      <FormKit type="group" v-model="formData">
        <!-- Nom Projet -->
        <FormKit
          name="title"
          label="Nom du projet"
          placeholder="Entrer le nom du projet"
          validation="required"
          validation-behavior="live"
          @change="emitUpdate()"
        />
        <!--Durré du projet pas représenté pareil dans le diagramme de classe.-->
        <!--Start Project-->
        <FormKit
          type="date"
          name="start_date"
          value="2011-01-01"
          label="Début de votre projet"
          help="Entrer la date de début de votre projet"
          validation="required|before:2010-01-01"
          validation-visibility="live"
        />
        <!-- End Project-->
        <FormKit
          type="date"
          name="end_date"
          value="2011-01-01"
          label="Fin  de votre projet"
          help="Entrer la date de fin de votre projet"
          validation="required|before:2010-01-01"
          validation-visibility="live"
        />
        <!-- Content -->
        <FormKit
          type="textarea"
          name="description"
          label="Décriver votre projet"
          rows="10"
          placeholder="Remember to write in complete sentences."
        />

        <!--Photo du projet (à voir si on fait avec direct import photo ou url?-->
        <FormKit
          type="file"
          name="pictures"
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
  <br />
  <br />
  <br />
</template>

<script>
import { ref } from "vue";

export default {
  mounted() {
    console.log("mounted!");
    console.log(this.formData);
    this.$emit("EmptyProject", this.formData);
  },
  setup() {
    const recommendation = ref("9");
    const formData = ref({});

    return {
      recommendation,
      formData,
    };
  },
  emits: ["UpdateProject", "EmptyProject"],
  methods: {
    PrintConsole: function () {
      console.log("Button click");
    },
    emitUpdate: function () {
      console.log("Update");
      this.$emit("UpdateProject");
    },
  },
};
</script>

<style src="./style.css"/>