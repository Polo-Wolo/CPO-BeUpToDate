<template>
  <CompleteIdentityCard></CompleteIdentityCard>
  <Education></Education>
  <WorkExperience></WorkExperience>
  <Project></Project>

  <div class="selection:bg-green-100"></div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import Project from "./components/Project.vue";
import Education from "./components/Education.vue";
import CompleteIdentityCard from "./components/CompleteIdentityCard.vue";
import WorkExperience from "./components/WorkExperience.vue";
</script>
