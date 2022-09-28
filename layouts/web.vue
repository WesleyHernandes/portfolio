<template>
  <section>
    <Header />
    <Nuxt />
    <Footer />
  </section>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
  ;
}
</style>
