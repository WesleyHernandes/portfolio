<template>
  <section class="schooling">
    <div class="pulse-circle circle-1"></div>
    <div class="pulse-circle circle-2"></div>

    <div class="content">
      <div class="title-content">
        <p class="subtitle">Linha do Tempo</p>
        <h2 class="title">EDUCAÇÃO E ESCOLARIDADE</h2>
      </div>

      <div class="list">
        <div v-for="item in list" :key="item.id" class="item">
          <div class="information">
            <p class="info-subtitle">{{ item.subtitle }}</p>
            <h3 class="info-title">{{ item.title }}</h3>
            <p class="year">{{ item.year }}</p>
          </div>

          <div class="dot-content">
            <div class="dot-dash"></div>
            <div class="dot"></div>
          </div>

          <div class="description">
            <p>{{ item.description }}</p>
          </div>
        </div>

        <div class="dash"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SchoolingComponent",
  data() {
    return {
      list: [
        { id:1, title:"Entendendo Typescript", subtitle:"Certificação", year:"2022", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut convallis nulla, eu laoreet sapien. Fusce auctor orci vel quam commodo semper vel eu magna." },
        { id:2, title:"React + Redux", subtitle:"Certificação", year:"2022", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut convallis nulla, eu laoreet sapien. Fusce auctor orci vel quam commodo semper vel eu magna." },
        { id:3, title:"VueJS 2 - Guia completo", subtitle:"Certificação", year:"2022", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut convallis nulla, eu laoreet sapien. Fusce auctor orci vel quam commodo semper vel eu magna." },
        { id:4, title:"Docker", subtitle:"Certificação", year:"2022", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut convallis nulla, eu laoreet sapien. Fusce auctor orci vel quam commodo semper vel eu magna." },
        { id:5, title:"Introdução ao Laravel", subtitle:"Certificação", year:"2022", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut convallis nulla, eu laoreet sapien. Fusce auctor orci vel quam commodo semper vel eu magna." },
        { id:6, title:"Aplicações para internet e dispositivos móveis", subtitle:"Pós graduação", year:"2022", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut convallis nulla, eu laoreet sapien. Fusce auctor orci vel quam commodo semper vel eu magna." },
        { id:7, title:"Análise e desenvolvimento de sistemas", subtitle:"Graduação", year:"2007 - 2010", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut convallis nulla, eu laoreet sapien. Fusce auctor orci vel quam commodo semper vel eu magna." }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.schooling{
  @apply
    overflow-hidden
    relative
    flex
    flex-col
    w-full
    px-4
    bg-dark
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
        -top-1/3
        -translate-x-1/3
      ;
    }

    &.circle-2{
      @apply
        w-[665px]
        h-[665px]
        right-0
        translate-x-1/3
        -bottom-1/4
      ;
    }
  }

  & .content{
    @apply
      z-10
      flex
      flex-col
      w-full
      max-w-[1600px]
      mx-auto
      py-24
    ;

    & .title-content{
      @apply
        flex
        flex-col
        w-full
        gap-1
        mb-16
      ;

      & .subtitle{
        @apply
          text-light
          text-xl
          text-center
          tracking-wider
        ;
      }

      & .title{
        @apply
          text-highlight
          text-3xl
          tracking-wider
          font-bold
          text-center
        ;
      }
    }

    & .list{
      @apply
        relative
        flex
        flex-col
        w-full
        gap-12
      ;

      & .dash{
        @apply
          absolute
          z-0
          hidden
          lg:flex
          w-[2px]
          h-[90%]
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          bg-medium
        ;
      }

      & .item{
        @apply
          relative
          z-10
          flex
          items-center
          justify-between
          w-full
          flex-col
          sm:flex-row
        ;

        & .dot-content{
          @apply
            relative
            hidden
            lg:flex
            items-center
            justify-center
            w-[215px]
          ;

          & .dot-dash{
            @apply
              absolute
              z-0
              flex
              w-full
              h-[1px]
              left-0
              top-1/2
              -translate-y-1/2
              border-[1px]
              border-dashed
              border-medium
            ;
          }

          & .dot{
            @apply
              relative
              z-10
              flex
              w-5
              h-5
              rounded-full
              bg-light
            ;
          }
        }

        & .information{
          @apply
            flex
            flex-col
            w-full
            items-center
            sm:items-start
            sm:w-1/2
            lg:w-[calc(50%-107.5px)]
            gap-[10px]
            pr-4
            mb-4
            sm:mb-0
          ;

          & .info-title{
            @apply
              text-highlight
              text-xl
              tracking-wider
              font-bold
            ;
          }

          & .info-subtitle,
          & .year{
            @apply
              text-light
              text-base
              tracking-wider
            ;
          }
        }

        & .description{
          @apply
            flex
            flex-col
            items-end
            w-full
            sm:w-1/2
            lg:w-[calc(50%-107.5px)]
            pl-4
          ;

          & p{
            @apply
              max-w-[570px]
              text-light
              text-base
              text-center
              sm:text-right
              tracking-wider
            ;
          }
        }
      }
    }
  }
}
</style>
