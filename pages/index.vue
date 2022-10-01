<template>
  <section class="page-home">
    <About />
    <Skills />
  </section>
</template>

<script>
import About from '@/components/home/About'
import Skills from '@/components/home/Skills'

export default {
  name: 'IndexPage',
  components: { About, Skills },
  layout (context) {
    return 'web'
  }
}
</script>

<style lang="postcss" scoped>

</style>
