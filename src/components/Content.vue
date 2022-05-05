<template>
  <div class="container">
    <Collapsable>
      <template v-slot:header>
        <strong><p>Project</p></strong>
        <FormKit type="button" label="add project" @click="addProject()" />
      </template>
      <div
        class="list_project"
        v-for="(project, index) in projects"
        :key="project"
      >
        <Project v-model="project[index]" />
        <FormKit
          type="button"
          label="delete project"
          @click="deleteProject(index)"
        />
        <!-- <p>{{ project }}</p> -->
      </div>
      <h2>Modeled group values in Content</h2>
      <pre>{{ projects }}</pre>
    </Collapsable>

    <Collapsable>
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
    </Collapsable>
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
      empty_project: {},
      projects: Array(),
      educations: Array(),
      work_experiences: Array(),
      identity: { adress: {} },
      CV: {},
    };
  },
  methods: {
    testUpdate() {
      console.log("testUpdate");
    },
    addProject() {
      console.log("addProject");
      this.projects.push(this.empty_project);
    },
    deleteProject(index) {
      console.log("deleteProject");
      this.projects.splice(index, 1);
      //this.projects.push(this.empty_project);
    },
    // /*Event handler
    // Reçoit les données des champs vides du projet quand le component est monté.*/
    // emptyProject(formData) {
    //   console.log("emptyProject");
    //   this.empty_project = formData;
    //   console.log(formData);
    //   this.projects.push(formData);
    // },
  },
};
</script>
<!-- <style src="./style.css"/>-->