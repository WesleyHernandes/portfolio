<template>
  <footer class="footer">
    <div class="content">
      <p class="copy">Copyright &copy; {{year}} - Todos os direitos reservados</p>
      <p class="mail">
        <Icon icon="mail" />
        <span>wess.hernandes@gmail.com</span>
      </p>
    </div>
  </footer>
</template>

<script>
import Icon from '@/components/Icons'

export default {
  name: 'FooterComponent',
  components: { Icon },
  data(){
    return{
      year: new Date().getFullYear()
    }
  }
}
</script>

<style lang="postcss" scoped>
.footer{
  @apply
    flex
    flex-col
    w-full
    px-4
  ;

  & .content{
    @apply
      flex
      items-center
      justify-start
      flex-col
      w-full
      max-w-[1600px]
      mx-auto
      py-10
      gap-4
      md:justify-between
      md:flex-row
    ;

    & .copy{
      @apply
        text-light
        text-base
        text-center
        font-bold
      ;
    }

    & .mail{
      @apply
        flex
        items-center
        gap-4
        text-light
        text-base
        text-center
        font-bold
      ;
    }
  }
}
</style>
