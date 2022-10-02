<template>
  <section class="about">
    <div class="content">
      <div class="title-content">
        <h1 class="title">WESLEY HERNANDES DE OLIVEIRA</h1>
        <h2 class="subtitle">Front-end Developer</h2>
      </div>

      <div class="description">
        <div class="informations">
          <div v-for="column in column1" :key="column.id" class="item">
            <p class="text">{{ column.text }}</p>
            <p class="subtext">{{ column.subText }}</p>
          </div>
        </div>

        <div class="perfil-thumbnail">
          <img :src="perfil" alt="Foto de perfil - Wesley Hernandes de Oliveira" />
        </div>

        <div class="informations column2">
          <div v-for="column in column2" :key="column.id" class="item">
            <p class="text">{{ column.text }}</p>
            <p class="subtext">{{ column.subText }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="pulse-circle"></div>
  </section>
</template>

<script>
import Perfil from '@/assets/images/perfil.png'

export default {
  name: "AboutComponent",
  data(){
    return{
      perfil: Perfil,
      column1: [
        { id:1, text:"E-MAIL", subText:"wess.hernandes@gmail.com" },
        { id:2, text:"GITHUB", subText:"@WesleyHernandes" },
        { id:3, text:"IDADE", subText:"29 Anos" }
      ],
      column2: [
        { id:1, text:"+80", subText:"Projetos Realizados" },
        { id:2, text:"8 Anos", subText:"de Experiência" },
        { id:3, text:"ESPECIALIZAÇÃO", subText:"Front-end VueJS e ReactJS" }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.about{
  @apply
    overflow-hidden
    relative
    flex
    flex-col
    items-center
    w-full
    px-4
    pt-12
    pb-12
    sm:pt-[76px]
    sm:pb-0
  ;

  & .content{
    @apply
      relative
      z-10
      flex
      flex-col
      w-full
      max-w-[1255px]
      mx-auto
      gap-12
    ;

    & .title-content{
      @apply
        flex
        flex-col
        items-center
        w-full
        gap-3
        text-center
      ;

      & .title{
        @apply
          text-light
          text-3xl
          font-bold
          tracking-widest
        ;
      }

      & .subtitle{
        @apply
          text-light
          text-2xl
          tracking-widest
        ;
      }
    }

    & .description{
      @apply
        flex
        flex-col
        items-end
        justify-center
        w-full
        gap-4
        sm:gap-0
        sm:flex-row
        lg:justify-between
      ;

      & .perfil-thumbnail{
        @apply
          hidden
          lg:flex
          flex-col
          w-full
          max-w-[405px]
        ;

        & img{
          @apply
            flex
            w-full
          ;
        }
      }

      & .informations{
        @apply
          flex
          flex-col
          w-full
          sm:w-auto
          lg:w-[calc(50%-202.5px)]
          gap-4
          sm:pb-28
          sm:gap-14
        ;

        & .item{
          @apply
            flex
            flex-col
            w-full
            gap-1
          ;

          & .text{
            @apply
              text-highlight
              text-xl
              font-bold
              tracking-wider
              text-center
              sm:text-left
            ;
          }

          & .subtext{
            @apply
              text-light
              text-lg
              tracking-wider
              text-center
              sm:text-left
            ;
          }
        }

        &.column2{
          & .item{
            & .text,
            & .subtext{
              @apply
                text-center
                sm:text-right
              ;
            }
          }
        }
      }
    }
  }

  & .pulse-circle{
    @apply
      absolute
      z-0
      flex
      w-[986px]
      h-[986px]
      left-auto
      -bottom-96
      rounded-full
      bg-dark
      bg-opacity-30
    ;
  }
}
</style>
