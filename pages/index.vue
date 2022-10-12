<template>
  <section class="page-home">
    <About />
    <Skills />
    <Projects />
    <Schooling />
    <Experience />
    <contact />
  </section>
</template>

<script>
import About from '@/components/home/About'
import Skills from '@/components/home/Skills'
import Projects from '@/components/home/Projects'
import Schooling from '@/components/home/Schooling'
import Experience from '@/components/home/Experience'
import Contact from '@/components/home/Contact'

export default {
  name: 'IndexPage',
  components: { About, Skills, Projects, Schooling, Experience, Contact },
  layout (context) {
    return 'web'
  }
}
</script>

<style lang="postcss" scoped>

</style>
