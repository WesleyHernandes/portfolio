<template>
  <section class="social-networks">
    <Network v-for="network in networks" :key="network.id" :item="network" />
  </section>
</template>

<script>
import Network from '@/components/header/social-networks/Network'

export default {
  name: "SocialNetworks",
  components: { Network },
  data(){
    return{
      networks:[
        { id: 1, label: 'Github', hook: "https://github.com/WesleyHernandes", icon:"github" },
        { id: 2, label: 'Linkedin', hook: "https://www.linkedin.com/in/wesley-hernandes-386aa294/",  icon:"linkedin" },
        { id: 3, label: 'Instagram', hook: "https://www.instagram.com/wesleyhernandesoliveira/", icon:"instagram" },
        { id: 4, label: 'Facebook', hook: "https://www.facebook.com/wesley.hernandes/", icon:"facebook" }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.social-networks{
  @apply
    flex
    items-center
    justify-end
    gap-4
    w-auto
    flex-grow
    xl:flex-grow-0
    xl:w-[calc(50%-40px)]
  ;
}
</style>
