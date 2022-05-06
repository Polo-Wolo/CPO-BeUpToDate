<template>
  <div class="content">
    <Collapsable>
      <template v-slot:header>
        <strong><p>Project</p></strong>
        <FormKit type="button" label="add project" @click="addProject()" />
      </template>
      <div
        class="list_project"
        v-for="(project, index) in projects"
        :key="project.id"
      >
        <div class="forItem">
          <!-- <h2>Project values in v-for :</h2>
          <pre>{{ project }}</pre>
          <h2>projects values in v-for :</h2>
          <pre>{{ projects }}</pre>
          <h2>projects[index] in v-for :</h2>
          <pre>{{ projects[index] }}</pre> -->
          <Collapsable>
            <Project v-model="projects[index]" />
            <FormKit
              type="button"
              label="delete project"
              @click="deleteProject(index)"
            />
          </Collapsable>
          <!-- <p>{{ project }}</p> -->
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
      //empty_project: {},
      project_max_id: 0,
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
      //this.$delete(this.projects, index);
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
<style scoped lang="scss">
.content {
  border: solid 0.2em;
  /* color: crimson; */
  border-color: blueviolet;
  // @apply w-1/3 mx-auto;
}
.forItem {
  border: solid 0.2em;
  /* color: crimson; */
  border-color: orange;
  // @apply w-1/3 mx-auto;
}
</style>
<!-- <style src="./style.css"/>-->