<template>
  <section class="social-networks w-[calc(50%-60px)]">
    <Network v-for="network in networks" :key="network.id" :label="network.label" :hook="network.hook" />
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
        { id: 1, label: 'Github', hook: "https://github.com/WesleyHernandes" },
        { id: 2, label: 'Linkedin', hook: "https://www.linkedin.com/in/wesley-hernandes-386aa294/" },
        { id: 3, label: 'Instagram', hook: "https://www.instagram.com/wesleyhernandesoliveira/" },
        { id: 4, label: 'Facebook', hook: "https://www.facebook.com/wesley.hernandes/" }
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
  ;
}
</style>
