<template>
  <Education></Education>
  <WorkExperience></WorkExperience>
  <CurriculumVitae></CurriculumVitae>
  <Projects></Projects>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Education from "../components/Education.vue";
import WorkExperience from "../components/WorkExperience.vue";
import CurriculumVitae from "../components/CurriculumVitae.vue";
import Projects from "../components/Projects.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Education,
    WorkExperience,
    CurriculumVitae,
    Projects,
  },
});
</script>

<style lang="scss" scoped></style>