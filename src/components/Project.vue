<template>
  <div class="container">
    <div class="sample-input">
      <h1>
        <strong> My Project </strong>
        <!-- <FormKit type="button" label="Validate" /> -->
      </h1>
      <br />
      <FormKit type="group" v-model="modelValue">
        <!-- Nom Projet -->
        <FormKit
          name="title"
          label="Nom du projet"
          placeholder="Entrer le nom du projet"
          validation="required"
          validation-behavior="live"
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
          @input="updateImageURLList()"
        />
      </FormKit>

      <h2>Modeled group values</h2>
      <pre class="form-data">{{ modelValue }}</pre>
      <p>Images :</p>
      <div v-if="image_URL_List">
        <div v-for="image_URL in image_URL_List" :key="image_URL">
          <img :src="image_URL" />
        </div>
      </div>
    </div>
  </div>
  <br />
</template>

<script>
import { defineComponent } from "vue";

export default {
  name: "Project",
  components: {},
  props: {
    modelValue: "",
  },
  data() {
    return { image_URL_List: Array() };
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", this.modelValue);
    },
    updateImageURLList() {
      console.log("updateImageURLList");
      this.image_URL_List = Array();
      for (var i of this.modelValue.pictures) {
        console.log(i.file);
        var img_URL = URL.createObjectURL(i.file);
        console.log(img_URL);
        this.image_URL_List.push(img_URL);
      }
    },
  },
};
</script>

<style src="./style.css"/>