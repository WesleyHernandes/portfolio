<template>
  <section class="header">
    <div class="content">
      <Menu />
      <Logo />
      <SocialNetworks />
    </div>
  </section>
</template>

<script>
import Logo from '@/components/globals/Logo'
import Menu from '@/components/header/menu/Menu'
import SocialNetworks from '@/components/header/social-networks/SocialNetworks'

export default {
  name: 'HeaderComponent',
  components:{ Logo, Menu, SocialNetworks }
}
</script>

<style lang="postcss" scoped>
.header{
  @apply
    sticky
    z-50
    top-0
    left-0
    flex
    flex-col
    w-full
    px-4
    bg-dark
    border-b
    border-light
    border-opacity-20
  ;

  & .content{
    @apply
      flex
      items-center
      justify-between
      w-full
      max-w-[1600px]
      my-0
      mx-auto
      py-1
      gap-4
      xl:py-0
      xl:gap-0
    ;
  }
}
</style>
