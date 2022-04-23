<template>
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
    <IdentityCard />
  </Collapsable>
  <Collapsable>
    <template v-slot:header>
      <strong><p>WorkExperience</p></strong>
    </template>
    <WorkExperience />
  </Collapsable>
  <Collapsable>
    <template v-slot:header>
      <strong><p>Project</p></strong>
    </template>
    <Project />
  </Collapsable>
  <Collapsable>
    <template v-slot:header>
      <strong><p>CV</p></strong>
    </template>
    <CV />
  </Collapsable>
  <div class="selection:bg-green-100"></div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import Collapsable from "./components/Collapsable.vue";
import Project from "./components/Project.vue";
import Education from "./components/Education.vue";
import IdentityCard from "./components/personnal_info/IdentityCard.vue";
import WorkExperience from "./components/WorkExperience.vue";
import CV from "./components/CV.vue";
</script>
