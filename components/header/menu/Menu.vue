<template>
  <section class="navigation">
    <button class="control-menu" @click.prevent="menuVisible = !menuVisible">
      <Icon icon="menu" />
    </button>

    <perfect-scrollbar class="menu" :class="{'active':menuVisible}">
      <MenuItem v-for="item in itens" :key="item.id" :label="item.label" :anchor="item.anchor" />
    </perfect-scrollbar>
  </section>
</template>

<script>
import Icon from '@/components/Icons'
import MenuItem from '@/components/header/menu/MenuItem'

export default {
  name: "MenuComponent",
  components:{ Icon, MenuItem },
  data(){
    return{
      menuVisible: false,
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
.navigation{
  @apply
    flex
    items-center
    justify-start
    gap-5
    w-auto
    xl:w-[calc(50%-40px)]
  ;

  & .control-menu{
    @apply
      outline-none
      xl:hidden
      flex
      items-center
      justify-center
      w-8
      h-8
    ;
  }

  & .menu{
    @apply
      overflow-y-auto
      flex
      flex-col
      items-center
      justify-start
      gap-5
      w-full
      max-w-xs
      max-h-96
      py-8
      absolute
      top-full
      left-0
      bg-dark
      rounded-br-3xl
      opacity-0
      pointer-events-none
      transition-all
      duration-500
      xl:pointer-events-auto
      xl:opacity-100
      xl:max-h-full
      xl:py-0
      xl:rounded-br-none
      xl:max-w-full
      xl:flex-row
      xl:relative
      xl:bg-transparent
    ;

    &.active{
      @apply
        pointer-events-auto
        opacity-100
      ;
    }
  }
}
</style>
