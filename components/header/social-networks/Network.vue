<template>
  <a class="hook" :href="hook" :title="label" target="_blank">

  </a>
</template>

<script>
export default {
  name: "NetworkComponent",
  props:{
    label:{
      type: String,
      default: ""
    },
    hook:{
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="postcss" scoped>
.hook{
  @apply
    outline-none
    flex
    items-center
    justify-center
    w-8
    h-8
    bg-medium
    rounded-full
  ;
}
</style>
