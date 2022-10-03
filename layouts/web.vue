<template>
  <section class="app">
    <Header />
    <Nuxt />
    <Footer />
  </section>
</template>

<script>
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

export default {
  name: 'WebLayout',
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="postcss">
html {
  @apply
    overflow-x-hidden
    w-full
    bg-medium
  ;

  & .app{
    @apply
      flex
      flex-col
      w-full
    ;
  }
}
</style>
