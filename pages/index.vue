<template>
  <section class="page-home">
    <About />
    <Skills />
    <Projects />
  </section>
</template>

<script>
import About from '@/components/home/About'
import Skills from '@/components/home/Skills'
import Projects from '@/components/home/Projects'

export default {
  name: 'IndexPage',
  components: { About, Skills, Projects },
  layout (context) {
    return 'web'
  }
}
</script>

<style lang="postcss" scoped>

</style>
