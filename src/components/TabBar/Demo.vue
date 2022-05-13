<template>
  <div class='wrapper'>
    <button class='change__style' @click='changeStyle()'>Change Style</button>
    <tabs :mode="mode">
      <tab title="Identity"> Coucou </tab>
      <tab title="WorkExperience">Ceci </tab>
      <tab title="Project"> Est  </tab>
      <tab title="Education"> <Education></Education> </tab>
      <tab title="CV"> <CV></CV> </tab>
    </tabs>
  </div>
</template>

<script>
  import Content from "../Content.vue";
  import TestAffichageConfig from "../TestAffichageConfig.vue";
  import Tab from './Tab.vue';
  import Tabs from './Tabs.vue';
  import IdentityCard from "../personnal_info/IdentityCard.vue";
  import WorkExperience from "../WorkExperience.vue";
  import Project from "../Project.vue";
  import Education from "../Education.vue";
  import CV from "../CV.vue";


  export default {
    components: {
      Tab,
      Tabs
    },
    data () {
      return {
        mode: 'dark'
      }
    },
    methods: {
      changeStyle () {
        if (this.mode === 'dark') {
          this.mode = 'light'
        } else {
          this.mode = 'dark'
        }
      }
    }
  }
</script>

<style lang="css">
  * {
    margin: 0;
    padding: 0;
    font-family: 'Karla', sans-serif;
  }
  .wrapper {
    width: 100%;
    min-height: 100vh;
    background-color: #f8f8f8;
    margin: 0;
    padding: 20px;
  }

  .change__style {
    background-color: #eee;
    font-size: 1em;
    margin-bottom: 10px;
    padding: 5px;
  }
</style>