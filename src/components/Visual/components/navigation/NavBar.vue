<template>
  <nav id="nav">
    <div class="xl:w-1/12"></div>
    <router-link to="/" class="name">Paul</router-link>
    <div class="flex-grow"></div>
    <div class="link-table">
      <router-link to="/" class="inline-flex items-center space-x-2 xl:space-x-3 group">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconify iconify--fluent w-5 h-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M8.687 1.262a1 1 0 0 0-1.374 0L2.469 5.84A1.5 1.5 0 0 0 2 6.931v5.57A1.5 1.5 0 0 0 3.5 14H5a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2.5A1.5 1.5 0 0 0 11 14h1.5a1.5 1.5 0 0 0 1.5-1.5V6.93a1.5 1.5 0 0 0-.47-1.09L8.687 1.26Z"></path></svg>
        <span class="font-bold underline decoration-4 underline-offset-4 decoration-primary group-hover:no-underline">Home</span>
      </router-link>
      <router-link :to="{name:'Home', hash:'#education'}">Education</router-link>
      <router-link :to="{name:'Home', hash:'#work-experience'}">Work Experience</router-link>
      <router-link :to="{name:'Home', hash:'#projects'}">Projects</router-link>
      <router-link :to="{name:'Home', hash:'#aboutme'}">About Me</router-link>
    </div>
    <div class="flex-grow"></div>
    <SocialNetworkBar></SocialNetworkBar>
  </nav>
</template>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script lang="ts">
import { defineComponent } from "vue";
import SocialNetworkBar from "../SocialNetworkBar.vue";

export default defineComponent({
  name: "NavBar",
  components: {
    SocialNetworkBar: SocialNetworkBar,
  },
  methods: {
  test(refName): Function {
    console.log(refName);
  }
}
});
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<style lang="scss" scoped>
#nav {
  @apply hidden lg:inline-flex bg-nav-color border-gray-200 px-2 sm:px-4 py-2.5 shadow w-full h-18;
  a {
    @apply rounded-lg hover:bg-section-title px-4 py-2;
  }
  .name {
    @apply self-center text-3xl font-bold whitespace-nowrap text-primary;
  }
  .link-table {
    @apply xl:space-x-6 space-x-1 inline-flex items-center text-title-color text-sm xl:text-lg tracking-tight;
    a {
      @apply hover:text-primary tracking-tighter;
    }
  }
}
</style>
