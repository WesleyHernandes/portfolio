<template>
  <section class="page-home">
    <About />
    <Skills />
    <Projects />
    <Schooling />
  </section>
</template>

<script>
import About from '@/components/home/About'
import Skills from '@/components/home/Skills'
import Projects from '@/components/home/Projects'
import Schooling from '@/components/home/Schooling'

export default {
  name: 'IndexPage',
  components: { About, Skills, Projects, Schooling },
  layout (context) {
    return 'web'
  }
}
</script>

<style lang="postcss" scoped>

</style>
