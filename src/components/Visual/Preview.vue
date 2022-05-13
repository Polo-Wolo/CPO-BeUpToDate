<template class="relative" id="preview">
  <NavBar></NavBar>
  <router-view></router-view>
  <div class="mb-20 lg:mb-0"></div>
  <MobileNavBar></MobileNavBar>
  <button class="scroll-btn" @click="moveUp">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="iconify iconify--fluent w-10 h-10"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M3.146 10.354a.5.5 0 0 0 .708 0L8 6.207l4.146 4.147a.5.5 0 0 0 .708-.708l-4.5-4.5a.5.5 0 0 0-.708 0l-4.5 4.5a.5.5 0 0 0 0 .708Z"
      ></path>
    </svg>
  </button>
</template>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/navigation/NavBar.vue";
import MobileNavBar from "./components/navigation/MobileNavBar.vue";

export default defineComponent({
  name: "Preview",
  components: {
    NavBar,
    MobileNavBar,
  },
  methods: {
    moveUp(): Function {
      window.scrollTo(0, 0);
    },
  },
});
</script>
