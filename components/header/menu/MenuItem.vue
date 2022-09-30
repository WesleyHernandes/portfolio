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
    py-10
    text-light
    font-medium
  ;
}
</style>
