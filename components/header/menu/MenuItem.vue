<template>
  <button class="item">{{label}}</button>
</template>

<script>
export default {
  name: "MenuItem",
  props:{
    label:{
      type: String,
      default: "Item"
    },
    anchor:{
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="postcss" scoped>
.item{
  @apply
    flex
    flex-col
    w-full
    text-light
    font-medium
    px-5
    py-1
    xl:w-auto
    xl:px-0
    xl:py-6
  ;
}
</style>
