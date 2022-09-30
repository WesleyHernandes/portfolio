<template>
  <section class="header">
    <div class="content max-w-[1600px]">
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
    w-full
    px-4
    bg-dark
  ;

  & .content{
    @apply
      flex
      items-center
      justify-between
      w-full
      my-0
      mx-auto
    ;
  }
}
</style>
