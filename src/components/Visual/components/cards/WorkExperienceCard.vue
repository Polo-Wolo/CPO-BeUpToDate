<template>
  <div class="timeline-card">
    <!-- Date -->
    <div class="date" :class="{'pt-8': first_item, 'pt-12': !first_item}">{{ workexperience.date }}</div>
    <!-- Line -->
    <div class="timeline">
      <div class="circle" :class="{'top-7': first_item, 'top-11': !first_item}"></div>
      <div class="line" :class="{'rounded-t-full': first_item, 'rounded-b-full': last_item}"></div>
    </div>
    <!-- Card -->
    <div class="card" :class="{'mb-4': first_item, 'mt-4':last_item, 'my-4': !first_item && !last_item}">
      <div class="flex md:space-x-3 xl:space-x-4">
        <div class="circle-icon">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconify iconify--fluent w-5 h-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M5.5 2h5a.5.5 0 0 1 .5.5V5h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1V2.5a.5.5 0 0 1 .5-.5ZM10 5V3H6v2h4Z"></path></svg>
        </div>
        <!-- Card Header -->
        <div class="card-header">
          <div class="title">{{ workexperience.society }}</div>
          <div class="flex-grow"></div>
          <div>
            <div class="title-type">{{ workexperience.type }}</div>
            <div class="title-time">{{ workexperience.time }}</div>
          </div>
        </div>
      </div>
      <!-- Content -->
      <div class="content">
        <p v-for="(paragraph, index) in workexperience.content" :key="index">{{ paragraph }}</p>
      </div>
    </div>
  </div>
</template>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { WorkExperience } from "../../models";

export default defineComponent({
  name: "WorkExperienceCard",
  props: {
    workexperience: {
      type: Object as PropType<WorkExperience>,
      required: true,
    },
    first_item: {
      type: Boolean,
      required: true,
    },
    last_item: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<style lang="scss" scoped>
.timeline-card {
  @apply flex space-x-4 md:space-x-8 2xl:space-x-16 justify-end;
  .date {
    @apply order-last min-w-24 md:w-32 font-bold text-xs md:text-sm 2xl:text-base text-title-color tracking-tight ml-4;
  }
  .timeline {
    @apply relative w-5 lg:w-6 xl:w-7;
    .circle {
      @apply w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 bg-primary rounded-full absolute right-1/2 transform translate-x-1/2;
    }
    .line {
      @apply bg-primary w-1.5 lg:w-2 h-full absolute right-1/2 transform translate-x-1/2;
    }
  }
  .card {
    @apply order-first bg-card-bg rounded-lg md:rounded-2xl py-2 md:px-3 md:py-3 xl:px-4 xl:py-4 flex-col space-y-1 md:space-y-3 w-128 mr-4;
    .circle-icon {
      @apply hidden md:inline-flex w-11 h-11 rounded-full bg-primary justify-center items-center text-white flex-none;
    }
    .card-header {
      @apply grow text-title-color items-center inline-flex my-auto px-3;
      .title {
        @apply font-bold text-xs md:text-sm tracking-tight;
      }
      .title-time {
        @apply font-medium text-xs md:text-sm tracking-tight text-right;
      }
      .title-type {
        @apply font-bold text-xs md:text-sm tracking-tighter text-right;
      }
    }
    .content {
      @apply text-content-color text-xs md:text-sm px-3 text-justify tracking-tight;
    }
  }
}
</style>
