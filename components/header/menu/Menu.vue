<template>
  <nav class="menu w-[calc(50%-60px)]">
    <MenuItem v-for="item in itens" :key="item.id" :label="item.label" :anchor="item.anchor" />
  </nav>
</template>

<script>
import MenuItem from '@/components/header/menu/MenuItem'

export default {
  name: "MenuComponent",
  components:{ MenuItem },
  data(){
    return{
      itens:[
        { id: 1, label: 'Skills', anchor: '#skills' },
        { id: 2, label: 'Projetos', anchor: '#projects' },
        { id: 3, label: 'Educação', anchor: '#education' },
        { id: 4, label: 'Experiência profissional', anchor: '#experience' }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.menu{
  @apply
    flex
    items-center
    justify-start
    gap-5
  ;
}
</style>
