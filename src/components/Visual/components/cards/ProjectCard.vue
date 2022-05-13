<template>
<div>
  <router-link :to="{ name: 'Projects', params: { id: project.id }}">
    <div class="card group">
      <div class="picture" :style="{ backgroundImage: 'url(' + project.pictures_url[0] + ')' }"></div>
      <div class="content">
        <span class="title">
            {{ project.title }}
        </span>
        <div class="date">
          <span>
            {{ project.date }}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconify iconify--fluent w-5 h-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 12 12"><path fill="currentColor" d="M3 5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0ZM3.5 7a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1ZM5 5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0ZM5.5 7a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1ZM7 5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Zm-6-2A2.5 2.5 0 0 1 3.5 1h5A2.5 2.5 0 0 1 11 3.5v5A2.5 2.5 0 0 1 8.5 11h-5A2.5 2.5 0 0 1 1 8.5v-5ZM3.5 2a1.5 1.5 0 0 0-1.415 1h7.83A1.5 1.5 0 0 0 8.5 2h-5ZM10 4H2v4.5A1.5 1.5 0 0 0 3.5 10h5A1.5 1.5 0 0 0 10 8.5V4Z"></path></svg>
        </div>
        <button class="btn">
          <span>Read More</span>
        </button>
      </div>
    </div>
  </router-link>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Project } from "../../models";

export default defineComponent({
  name: "ProjectCard",
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true,
    },
  },
  computed: {
    backgroundPictureUrl: function() {
      return;
    }
  },
});
</script>

<style lang="scss" scoped>
.card {
  @apply relative w-full md:w-80 h-56 rounded-2xl outline outline-0 hover:outline-8 outline-primary transition-all duration-100 ease-in-out m-2.5;
  .picture {
    @apply w-full h-full bg-cover bg-center bg-no-repeat rounded-2xl flex filter brightness-50 transition-all duration-100 ease-in-out;
  }
  .content {
    @apply flex-col space-y-5 py-11 px-8 h-full absolute right-1/2 transform translate-x-1/2 bottom-1/2 translate-y-1/2 font-bold text-white w-full text-center select-none;
    .title {
      @apply text-lg;
    }
    .date {
      @apply flex justify-center space-x-3 relative font-semibold;
    }
  }
}
.btn {
  @apply bottom-5 hidden absolute right-1/2 transform translate-x-1/2 group-hover:flex mx-auto items-center h-10 px-5 font-medium space-x-2 text-white rounded-lg bg-primary flex-none tracking-tight;
}
</style>
