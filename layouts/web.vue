<template>
  <section>
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
    w-screen
    bg-medium
  ;
}
</style>
