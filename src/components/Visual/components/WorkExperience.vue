<template>
  <div id="work-experience">
    <div class="section-title">
      <div>WORK</div>
      <div class="flex lg:block justify-center">
        <div>EXPERI</div>
        <div>ENCE</div>
      </div>
    </div>
    <div class="w-full lg:w-9/12 xl:w-7/12">
      <!-- Dotted -->
      <div class="dotted-line">
        <div class ="fake-timeline-card">
          <div class="fake-date"></div>
          <div class="fake-timeline small-line">
            <div class="line small-line"></div>
          </div>
          <div class="fake-card"></div>
        </div>
        <div class ="fake-timeline-card">
          <div class="fake-date"></div>
          <div class="fake-timeline medium-line">
            <div class="line medium-line"></div>
          </div>
          <div class="fake-card"></div>
        </div>
      </div>
      <!-- WorkExperienceCards -->
      <WorkExperienceCard
        v-for="(workexperience, index) in workexperiences"
        :first_item="index === 0"
        :last_item="index === workexperiences.length - 1"
        :key="index"
        :workexperience="workexperience"
      >
      </WorkExperienceCard>
      <!-- Dotted -->
      <div class="dotted-line">
        <div class ="fake-timeline-card">
          <div class="fake-date"></div>
          <div class="fake-timeline medium-line">
            <div class="line medium-line"></div>
          </div>
          <div class="fake-card"></div>
        </div>
        <div class ="fake-timeline-card">
          <div class="fake-date"></div>
          <div class="fake-timeline small-line">
            <div class="line small-line"></div>
          </div>
          <div class="fake-card"></div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import WorkExperienceCard from "../components/Cards/WorkExperienceCard.vue";

export default defineComponent({
  name: "WorkExperience",
  components: {
    WorkExperienceCard,
  },
  computed: {
    ...mapGetters({
      workexperiences: "workexperiences",
    }),
  },
});
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<style lang="scss" scoped>
#work-experience {
  @apply lg:inline-flex w-full px-3 lg:px-0;
}
.section-title {
  @apply order-last py-4 lg:py-0 lg:grow text-section-title text-5xl md:text-7xl xl:text-9xl 2xl:text-10xl font-bold lg:leading-16 xl:leading-24 2xl:leading-32 uppercase lg:pt-64 text-center lg:text-left;
}
.dotted-line {
  @apply space-y-2 my-2;
  .fake-timeline-card {
    @apply flex space-x-4 md:space-x-8 2xl:space-x-16 justify-end;
    .fake-date {
      @apply order-last min-w-24 md:w-32 ml-4;
    }
    .medium-line {
      @apply h-4 ;
    }
    .small-line {
      @apply h-2;
    }
    .fake-timeline {
      @apply relative w-5 lg:w-6 xl:w-7;
      .line {
        @apply bg-primary w-1.5 lg:w-2 rounded absolute right-1/2 transform translate-x-1/2;
      }
    }
    .fake-card {
      @apply order-first w-128;
    }
  }
}
</style>
