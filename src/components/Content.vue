<template>
  <div class="container">
    <Collapsable>
      <template v-slot:header>
        <strong><p>Project</p></strong>
      </template>
      <Project @UpdateProject="testUpdate" @EmptyProject="emptyProject" />
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
      projects: {},
      educations: {},
      work_experiences: {},
      identity: { adress: {} },
      CV: {},
    };
  },
  methods: {
    testUpdate() {
      console.log("testUpdate");
    },
    emptyProject(event, formData) {
      console.log("emptyProject");
      this.empty_project = formData;
      //La donné n'arrive pas ici...
      console.log(formData);
    },
  },
};
</script>
<!-- <style src="./style.css"/>-->