<template>
  <section class="contact">
    <div class="pulse-circle circle-1"></div>
    <div class="pulse-circle circle-2"></div>

    <div class="content">
      <div class="title-content">
        <h3 class="title">ENTRE EM CONTATO</h3>
        <p class="subtitle">Deixe seus dados e logo manteremos contato.</p>
      </div>

      <div class="dash"></div>

      <form class="form-content">
        <input type="text" class="form-input medium" placeholder="Nome" required />
        <input type="text" class="form-input medium" placeholder="Whatsapp" required />
        <input type="email" class="form-input" placeholder="E-mail" required />
        <textarea rows="6" class="form-input" placeholder="Mensagem" required></textarea>
        <button type="submit" class="form-button">ENVIAR</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactComponent'
}
</script>

<style lang="postcss" scoped>
.contact{
  @apply
    relative
    overflow-hidden
    flex
    flex-col
    w-full
    bg-dark
    px-4
  ;

  & .pulse-circle{
    @apply
      absolute
      z-0
      flex
      bg-medium
      bg-opacity-30
      rounded-full
    ;

    &.circle-1{
      @apply
        w-[845px]
        h-[845px]
        left-0
        bottom-0
        -translate-x-1/3
        translate-y-1/2
      ;
    }

    &.circle-2{
      @apply
        w-[488px]
        h-[488px]
        top-0
        right-0
        translate-x-1/3
        -translate-y-1/3
      ;
    }
  }

  & .content{
    @apply
      relative
      z-10
      flex
      flex-col
      items-center
      justify-center
      w-full
      max-w-[1240px]
      mx-auto
      py-24
      gap-7
      lg:gap-24
      lg:flex-row
      lg:items-stretch
    ;

    & .title-content{
      @apply
        flex
        flex-col
        justify-center
        gap-3
      ;

      & .title{
        @apply
          text-highlight
          text-3xl
          font-bold
          tracking-widest
        ;
      }

      & .subtitle{
        @apply
          text-light
          text-2xl
          tracking-wider
        ;
      }
    }

    & .dash{
      @apply
        flex
        w-full
        max-w-[680px]
        min-h-[2px]
        lg:min-h-full
        lg:w-[2px]
        bg-highlight
      ;
    }

    & .form-content{
      @apply
        flex
        flex-wrap
        items-start
        justify-end
        w-full
        max-w-[680px]
        gap-5
      ;

      & .form-input{
        @apply
          outline-none
          flex
          w-full
          text-dark
          text-base
          font-bold
          py-3
          px-4
          bg-light
          border-none
          rounded
        ;

        &.medium{
          @apply
            w-full
            sm:w-[calc(50%-10px)]
          ;
        }
      }

      & .form-button{
        @apply
          outline-none
          flex
          items-center
          justify-center
          w-full
          max-w-[155px]
          p-3
          text-light
          text-base
          tracking-wider
          font-bold
          border
          border-medium
          bg-medium
          rounded
          transition-colors
          duration-500
        ;

        &:hover,&:focus{
          @apply
            text-dark
            bg-light
          ;
        }
      }
    }
  }
}
</style>
