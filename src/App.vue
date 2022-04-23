<template>
  <IdentityCard></IdentityCard>
  <Education></Education>
  <WorkExperience></WorkExperience>
  <Project></Project>
  <CV></CV>

  <div class="selection:bg-green-100"></div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import Project from "./components/Project.vue";
import Education from "./components/Education.vue";
import IdentityCard from "./components/personnal_info/IdentityCard.vue";
import WorkExperience from "./components/WorkExperience.vue";
import CV from "./components/CV.vue";
</script>
