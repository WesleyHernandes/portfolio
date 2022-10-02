<template>
  <section class="skills">
    <div class="pulse-circle circle-1"></div>
    <div class="pulse-circle circle-2"></div>

    <div class="content">
      <div class="description">
        <div class="title-content">
          <h3 class="title">HARD SKILL</h3>
          <p class="subtitle">Conhecimentos e Habilidades</p>
        </div>
        <div class="text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed porttitor urna. Aenean non turpis quis felis pulvinar gravida. Aenean faucibus consectetur velit at posuere.</p>
          <p>Nullam mattis laoreet justo, quis tincidunt sapien blandit nec. Sed auctor est sit amet lorem aliquam tincidunt. Nulla tempor odio non tristique egestas.</p>
        </div>
      </div>

      <div class="dash"></div>

      <div class="skills-content">
        <Tag v-for="(skill, i) in skills" :key="i" :text="skill.text" />
      </div>
    </div>
  </section>
</template>

<script>
import Tag from '@/components/globals/Tag'

export default {
  name: "SkillsComponent",
  components: { Tag },
  data() {
    return {
      skills: [
        { id:1, text:"HTML5" },
        { id:2, text:"CSS3" },
        { id:3, text:"Tailwindcss" },
        { id:4, text:"Sass" },
        { id:5, text:"Less" },
        { id:6, text:"Bootstrap" },
        { id:7, text:"Javascript" },
        { id:8, text:"Typescript" },
        { id:9, text:"Jquery" },
        { id:10, text:"Ajax" },
        { id:11, text:"VueJS" },
        { id:12, text:"Nuxt" },
        { id:13, text:"Vuex" },
        { id:14, text:"React Native" },
        { id:15, text:"ReactJS" },
        { id:16, text:"Redux" },
        { id:17, text:"Next" },
        { id:18, text:"Jest" },
        { id:19, text:"PHP" },
        { id:20, text:"Wordpress" },
        { id:21, text:"Laravel" },
        { id:22, text:"Git" },
        { id:23, text:"Github" },
        { id:24, text:"Figma" },
        { id:25, text:"Docker" },
        { id:26, text:"Electron" },
        { id:27, text:"Firebase" },
        { id:28, text:"MySql" },
        { id:29, text:"Webpack" },
        { id:30, text:"Windows" },
        { id:31, text:"Linux" },
        { id:32, text:"Mac" }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.skills{
  @apply
    overflow-hidden
    relative
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
        -left-1/4
        -bottom-1/2
      ;
    }

    &.circle-2{
      @apply
        w-[665px]
        h-[665px]
        -right-1/4
        top-1/2
        -translate-y-1/2
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
      justify-between
      w-full
      max-w-[1600px]
      mx-auto
      py-12
      gap-9
      xl:gap-4
      xl:flex-row
      xl:py-24
    ;

    & .dash{
      @apply
        flex
        w-full
        max-w-[640px]
        min-h-[2px]
        bg-highlight
        xl:min-h-[500px]
        xl:w-[2px]
      ;
    }

    & .description{
      @apply
        flex
        flex-col
        w-full
        max-w-[640px]
        gap-12
      ;

      & .title-content{
        @apply
          flex
          flex-col
          w-full
          gap-3
          text-center
          xl:text-left
        ;

        & .title{
          @apply
            text-highlight
            font-bold
            text-3xl
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

      & .text{
        @apply
          flex
          flex-col
          w-full
          text-light
          text-base
          tracking-wider
          gap-4
        ;

        & p{
          @apply
            text-center
            xl:text-left
          ;
        }
      }
    }

    & .skills-content{
      @apply
        flex
        flex-wrap
        items-start
        justify-center
        w-full
        max-w-[640px]
        gap-2
        xl:gap-5
        xl:justify-start
      ;
    }
  }
}
</style>
