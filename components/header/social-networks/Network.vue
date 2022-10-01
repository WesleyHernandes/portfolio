<template>
  <a v-if="item" class="hook" :href="item.hook" :title="item.label" target="_blank">
    <Icon v-if="item.icon" :icon="item.icon" />
  </a>
</template>

<script>
import Icon from '@/components/Icons'

export default {
  name: "NetworkComponent",
  components:{ Icon },
  props:{
    item:{
      type: Object,
      default(){
        return {}
      }
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
