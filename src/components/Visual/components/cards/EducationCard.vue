<template>
  <div class="timeline-card">
    <!-- Date -->
    <div class="date" :class="{'pt-8': first_item, 'pt-12': !first_item}">{{ education.date }}</div>
    <!-- Line -->
    <div class="timeline">
      <div class="circle" :class="{'top-7': first_item, 'top-11': !first_item}"></div>
      <div class="line" :class="{'rounded-t-full': first_item, 'rounded-b-full': last_item}"></div>
    </div>
    <!-- Card -->
    <div class="card" :class="{'mb-4': first_item, 'mt-4':last_item, 'my-4': !first_item && !last_item}">
      <div class="flex md:space-x-3 xl:space-x-4">
        <div class="circle-icon">
          <svg v-if="education.type === ''" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconify iconify--fluent w-5 h-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M6.632 2.447a2.5 2.5 0 0 1 2.736 0l5.406 3.534a.5.5 0 0 1 .006.833l-5.378 3.64a2.5 2.5 0 0 1-2.803 0L2 7.343V10.5a.5.5 0 1 1-1 0v-4c0-.016 0-.033.002-.05a.502.502 0 0 1 .224-.468l5.406-3.534ZM3 11.499V9.226l3.038 2.057a3.5 3.5 0 0 0 3.924 0L13 9.226V11.5a.5.5 0 0 1-.119.324L12.5 11.5l.381.324l-.001.002l-.002.002l-.006.007l-.02.022a5.456 5.456 0 0 1-.323.324c-.22.203-.542.471-.958.74c-.83.536-2.049 1.08-3.57 1.08c-1.523 0-2.741-.544-3.572-1.08a7.09 7.09 0 0 1-.959-.74a5.419 5.419 0 0 1-.322-.324l-.02-.022l-.006-.007l-.002-.002l.38-.325c-.381.323-.38.324-.38.324A.503.503 0 0 1 3 11.5Z"></path></svg>
          <svg v-else-if="education.type === 'volunteering'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconify iconify--fa-solid w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="currentColor" d="M275.3 250.5c7 7.4 18.4 7.4 25.5 0l108.9-114.2c31.6-33.2 29.8-88.2-5.6-118.8c-30.8-26.7-76.7-21.9-104.9 7.7L288 36.9l-11.1-11.6C248.7-4.4 202.8-9.2 172 17.5c-35.3 30.6-37.2 85.6-5.6 118.8l108.9 114.2zm290 77.6c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6c3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z"></path></svg>
        </div>
        <!-- Card Header -->
        <div class="card-header">
          <div class="title">{{ education.title }}</div>
          <div class="location">{{ education.location }}</div>
        </div>
      </div>
      <!-- Content -->
      <div class="content">
        <p v-for="(paragraph, index) in education.content" :key="index">{{ paragraph }}</p>
      </div>
    </div>
  </div>
</template>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Education } from "../../models";

export default defineComponent({
  name: "EducationCard",
  props: {
    education: {
      type: Object as PropType<Education>,
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
  @apply flex space-x-4 md:space-x-8 2xl:space-x-16;
  .date {
    @apply min-w-24 md:w-32 font-bold text-xs md:text-sm 2xl:text-base text-title-color text-center md:text-right tracking-tight;
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
    @apply bg-card-bg rounded-lg md:rounded-2xl py-2 md:px-3 md:py-3 xl:px-4 xl:py-4 flex-col space-y-1 md:space-y-3 w-128;
    .circle-icon {
      @apply hidden md:inline-flex w-11 h-11 rounded-full bg-primary justify-center items-center text-white flex-none;
    }
    .card-header {
      @apply grow text-title-color items-center flex-col my-auto px-3;
      .title {
        @apply font-bold text-xs md:text-sm tracking-tight;
      }
      .location {
        @apply hidden md:block font-semibold text-xs md:text-sm tracking-tighter;
      }
    }
    .content {
      @apply text-content-color text-xs md:text-sm px-3 text-justify tracking-tight;
    }
  }
}
</style>
