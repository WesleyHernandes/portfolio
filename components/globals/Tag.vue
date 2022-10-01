<template>
  <p class="tag">{{ text }}</p>
</template>

<script>
export default {
  name: "TagContent",
  props: {
    text: {
      type: String,
      default: "Item"
    }
  }
}
</script>

<style lang="postcss" scoped>
.tag{
  @apply
    flex
    items-center
    justify-center
    w-max
    py-3
    px-4
    text-dark
    text-base
    font-semibold
    tracking-widest
    bg-light
    rounded-[10px]
  ;
}
</style>
