<template>
  <div class="content">
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