<template>
  <div id="curriculum-vitae">
    <div class="section-title">
      <div class="flex justify-center lg:block">
        <div>CURRI</div>
        <div>CULUM</div>
      </div>
      <div class="flex lg:block justify-center">
        <div>VITAE</div>
      </div>
    </div>
    <div class="main-div">
      <div class="pdf">
        <vue-pdf-embed :source="path1"/>
        <button class="btn">
          <span>Download</span>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconify iconify--fluent w-5 h-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16" >
            <path fill="currentColor" d="M3.5 13h9a.75.75 0 0 1 .102 1.493l-.102.007h-9a.75.75 0 0 1-.102-1.493L3.5 13h9h-9ZM7.898 1.007L8 1a.75.75 0 0 1 .743.648l.007.102v7.688l2.255-2.254a.75.75 0 0 1 .977-.072l.084.072a.75.75 0 0 1 .072.977l-.072.084L8.53 11.78a.75.75 0 0 1-.976.073l-.084-.073l-3.536-3.535a.75.75 0 0 1 .977-1.133l.084.072L7.25 9.44V1.75a.75.75 0 0 1 .648-.743L8 1l-.102.007Z" ></path>
          </svg>
        </button>
      </div>
      <div class="pdf">
        <vue-pdf-embed :source="path2"/>
        <button class="btn">
          <span>Download</span>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconify iconify--fluent w-5 h-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16" >
            <path fill="currentColor" d="M3.5 13h9a.75.75 0 0 1 .102 1.493l-.102.007h-9a.75.75 0 0 1-.102-1.493L3.5 13h9h-9ZM7.898 1.007L8 1a.75.75 0 0 1 .743.648l.007.102v7.688l2.255-2.254a.75.75 0 0 1 .977-.072l.084.072a.75.75 0 0 1 .072.977l-.072.084L8.53 11.78a.75.75 0 0 1-.976.073l-.084-.073l-3.536-3.535a.75.75 0 0 1 .977-1.133l.084.072L7.25 9.44V1.75a.75.75 0 0 1 .648-.743L8 1l-.102.007Z" ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VuePdfEmbed from "vue-pdf-embed";

export default defineComponent({
  name: "CurriculumVitae",
  components: {
    VuePdfEmbed,
  },
  data() {
    return {
      path1: "src/assets/pdf/CV_Paul-WALCZAK_fevrier-2022_FR.pdf",
      path2: "src/assets/pdf/CV_Paul-WALCZAK_fevrier-2022_printable_FR.pdf",
    };
  },
});
</script>

<style lang="scss">
#curriculum-vitae {
  @apply lg:inline-flex w-full px-3 lg:px-0;
  .section-title {
    @apply py-4 lg:py-0 md:justify-center block lg:flex-none lg:grow lg:text-right mx-auto text-section-title text-5xl md:text-7xl xl:text-9xl 2xl:text-10xl font-bold lg:leading-16 xl:leading-24 2xl:leading-32 uppercase lg:pt-12;
  }
  .main-div {
    @apply inline-flex space-x-8 lg:space-x-10 xl:space-x-20 mt-2.5 w-full lg:w-9/12 xl:w-7/12 justify-center;
    .pdf {
      @apply w-40 md:w-56 xl:w-72 flex-col space-y-5;
    }
  }
  canvas {
    @apply rounded-2xl outline outline-0 hover:outline-8 outline-primary transition-all duration-100 ease-in-out;
  }
  .btn {
    @apply mx-auto flex items-center h-10 px-5 font-medium space-x-2 text-title-color hover:text-white bg-gray-200 rounded-lg hover:bg-primary transition-all duration-75 ease-in-out;
  }
}
</style>
