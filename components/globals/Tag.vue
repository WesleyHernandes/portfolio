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
    py-2
    px-3
    text-xs
    text-dark
    font-semibold
    tracking-widest
    bg-light
    rounded-[10px]
    xl:py-3
    xl:px-4
    xl:text-base
  ;
}
</style>
