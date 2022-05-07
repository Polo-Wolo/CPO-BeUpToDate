<template>
  <div class="content">
    <FormKit
      type="file"
      label="Sauvegarde à charger"
      accept=".json"
      help="Sélectionner le fichier de sauvegarde à charger."
      v-model="config_file"
    />
    <FormKit
      id="loadConfigFile"
      type="button"
      label="Ok"
      @click="loadConfigFile()"
    />

    <FormKit
      id="loadConfigFile"
      type="button"
      label="Sauvegarder"
      @click="saveConfigFile()"
    />

    <p>Fichier de configuration à charger :{{ config_file }}</p>
    <p>Configuration à sauvegarder : {{ config }}</p>
    <Collapsable>
      <template v-slot:header>
        <strong><p>Project</p></strong>
      </template>
      <FormKit
        id="addButton"
        type="button"
        label="add project"
        @click="addProject()"
      />
      <div
        class="list_project"
        v-for="(project, index) in projects"
        :key="project.id"
      >
        <div class="forItem">
          <Collapsable>
            <Project v-model="projects[index]" />
            <FormKit
              type="button"
              label="delete project"
              @click="deleteProject(index)"
            />
          </Collapsable>
        </div>
      </div>
      <h2>Modeled group values in Content</h2>
      <pre>{{ projects }}</pre>
    </Collapsable>

    <!-- <Collapsable>
      <template v-slot:header>
        <strong><p>IdentityCard</p></strong>
      </template>
      <IdentityCard />
    </Collapsable>

    <Collapsable>
      <template v-slot:header>
        <strong><p>Education</p></strong>
      </template>
      <Education />
    </Collapsable>

    <Collapsable>
      <template v-slot:header>
        <strong><p>WorkExperience</p></strong>
      </template>
      <WorkExperience />
    </Collapsable>

    <Collapsable>
      <template v-slot:header>
        <strong><p>CV</p></strong>
      </template>
      <CV />
    </Collapsable> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Collapsable from "./Collapsable.vue";
import Project from "./Project.vue";
import Education from "./Education.vue";
import IdentityCard from "./personnal_info/IdentityCard.vue";
import WorkExperience from "./WorkExperience.vue";
import CV from "./CV.vue";

import FileSaver from "file-saver";

export default {
  name: "Content",
  components: {
    Collapsable,
    Project,
    Education,
    IdentityCard,
    WorkExperience,
    CV,
  },
  data() {
    return {
      project_max_id: 0,
      projects: Array(),
      educations: Array(),
      work_experiences: Array(),
      identity: { adress: {} },
      CV: {},
      config: Array(),
      config_file: {},
    };
  },
  methods: {
    addProject() {
      console.log("addProject");
      this.project_max_id++;
      this.projects.push({ id: this.project_max_id });
      console.log(this.projects.length);
    },
    deleteProject(index) {
      console.log("deleteProject");
      console.log(this.projects.length);
      this.projects.splice(index, 1);
      if (this.projects.length == 0) {
        this.project_max_id = 0;
      }
    },
    async loadConfigFile() {
      console.log("loadConfigFile");

      const text = await this.config_file[0].file.text();

      //console.log(text);

      const data = JSON.parse(text);
      //console.log(data);
      //console.log(data[0].projects);
      this.projects = data[0].projects;
    },
    saveConfigFile() {
      console.log("saveConfigFile");
      var file_name = prompt("Saisissez le nom du fichier (sans l'extension");

      //Update config file :
      //To do : Ajouter les autre champs
      this.config = Array();
      this.config.push({ projects: this.projects });

      const data = JSON.stringify(this.config, null, 4);

      var blob = new Blob([data], {
        type: "text/plain;charset=utf-8",
      });

      FileSaver.saveAs(blob, file_name + ".json");
    },
  },
};
</script>
<style scoped lang="scss">
.content {
  border: solid 0.2em;
  border-color: blueviolet;
}
.forItem {
  border: solid 0.2em;
  border-color: orange;
}
</style>
<!-- <style src="./style.css"/>-->