<template>
  <div class="inline-flex space-x-1 items-center mx-4">
    <a target="_blank" href="https://discord.com/">
      <box-icon class="icon" type="logo" name="discord"></box-icon>
    </a>
    <a target="_blank" href="https://www.facebook.com/">
      <box-icon class="icon" type="logo" name="facebook-circle"></box-icon>
    </a>
    <a target="_blank" href="https://github.com/">
      <box-icon class="icon" type="logo" name="github"></box-icon>
    </a>
    <a target="_blank" href="https://www.linkedin.com/">
      <box-icon class="icon" type="logo" name="linkedin"></box-icon>
    </a>
  </div>
</template>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SocialNetworkBar",
});
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<style lang="scss" scoped>
.icon{
  @apply fill-title-color hover:fill-primary rounded-lg hover:bg-section-title px-1 py-1 w-7 h-7 xl:w-8 xl:h-8;
}
</style>
