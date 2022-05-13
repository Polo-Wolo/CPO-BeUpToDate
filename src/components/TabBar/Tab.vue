<template>
  <div class='tab' v-show='isActive'>
    <slot>{{title}}</slot>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: 'Tab'
    }
  },
  data () {
    return {
      isActive: true
    }
  }
}
</script>

<style lang="css">
</style>