<template>
  <section class="experience">
    <div class="content">
      <div class="jobs-content">
        <div class="title-content">
          <p class="subtitle">Dados do histórico</p>
          <h3 class="title">EXPERIÊNCIA PROFISSIONAL</h3>
        </div>

        <perfect-scrollbar class="jobs">
          <button v-for="job in jobs" :key="job.id" :class="{'active':job.active}" class="job">
            <div class="icon">
              <Icon :icon="job.icon" />
            </div>
            <div class="description">
              <p class="subtext">{{ job.subtext }}</p>
              <h4 class="text">{{ job.text }}</h4>
            </div>
          </button>
        </perfect-scrollbar>
      </div>

      <div class="dash"></div>

      <div class="job-informations">
        <div class="title-content">
          <p class="subtitle">2015 - Atualmente</p>
          <p class="title">Programador Front-end</p>
        </div>

        <div class="divider"></div>

        <div class="description">
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate enim nisl, sollicitudin tincidunt lorem tincidunt a. Vestibulum congue nisl vitae nisi sollicitudin, bibendum malesuada nibh tincidunt.</p>
          <p class="text">Vestibulum pretium euismod suscipit. Mauris condimentum massa vitae ipsum aliquet, eu tincidunt tellus congue. Duis laoreet fringilla dolor in eleifend. Sed vitae nulla suscipit, rutrum sem sed, venenatis ligula. Duis molestie diam non sem interdum, eget volutpat elit tincidunt.</p>
        </div>

        <div class="tags-content">
          <Tag text="HTML5" />
          <Tag text="CSS3" />
          <Tag text="Javascript" />
          <Tag text="Typescript" />
          <Tag text="VueJS" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Icon from '@/components/Icons'
import Tag from '@/components/globals/Tag'

export default {
  name: "JobsComponent",
  components: { Icon, Tag },
  data(){
    return{
      jobs:[
        { id: 1, text: 'Marknet Agência Digital', subtext: 'Programador Front-end', icon: 'code-tag', active: true },
        { id: 2, text: 'Pubblicite', subtext: 'Desenvolvedor web', icon: 'tree', active: false },
        { id: 3, text: 'Geniare', subtext: 'Mídias digitais', icon: 'pallet', active: false },
        { id: 4, text: 'DW Profissões', subtext: 'Instrutor de informática', icon: 'keyboard', active: false }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.experience{
  @apply
    relative
    flex
    flex-col
    w-full
    px-4
    py-12
    lg:py-28
  ;

  & .content{
    @apply
      flex
      flex-col
      items-center
      w-full
      max-w-[1600px]
      mx-auto
      gap-8
      lg:items-stretch
      lg:justify-between
      lg:flex-row
      xl:gap-28
    ;

    & .dash{
      @apply
        flex
        w-full
        max-w-[640px]
        min-h-[2px]
        lg:min-h-[500px]
        lg:w-[2px]
        bg-highlight
      ;
    }

    & .jobs-content{
      @apply
        flex
        flex-col
        w-full
        max-w-[490px]
        gap-8
      ;

      & .title-content{
        @apply
          flex
          flex-col
          w-full
          gap-3
        ;

        & .title{
          @apply
            text-3xl
            text-highlight
            font-bold
            tracking-widest
          ;
        }

        & .subtitle{
          @apply
            text-2xl
            text-light
            tracking-wider
          ;
        }
      }

      & .jobs{
        @apply
          flex
          flex-col
          w-full
          max-h-[425px]
          gap-3
        ;

        & .job{
          @apply
            opacity-50
            flex
            items-center
            justify-start
            w-full
            py-4
            px-5
            rounded-xl
          ;

          & .icon{
            @apply
              flex
              items-center
              justify-center
              w-12
              h-12
              bg-light
              rounded-xl
            ;
          }

          & .description{
            @apply
              flex
              flex-col
              w-[calc(100%-48px)]
              pl-4
            ;

            & .text{
              @apply
                text-xl
                text-light
                font-bold
                tracking-wider
                text-left
              ;
            }

            & .subtext{
              @apply
                text-base
                text-light
                text-left
                tracking-wider
              ;
            }
          }

          &.active{
            @apply
              opacity-100
            bg-dark
              border
              border-light
              border-solid
              border-opacity-30
            ;
          }
        }
      }
    }

    & .job-informations{
      @apply
        flex
        flex-col
        items-center
        justify-start
        w-full
        p-5
        gap-4
        bg-dark
        border
        border-light
        border-solid
        border-opacity-30
        rounded-xl
        sm:gap-7
      ;

      & .title-content{
        @apply
          flex
          flex-col
          items-start
          w-full
          gap-1
        ;

        & .title{
          @apply
            text-light
            text-xl
            font-bold
            tracking-wider
            text-left
          ;
        }

        & .subtitle{
          @apply
            text-light
            text-base
            tracking-wider
            text-left
          ;
        }
      }

      & .divider{
        @apply
          w-full
          h-[1px]
          bg-light
        ;
      }

      & .description{
        @apply
          flex
          flex-col
          flex-grow
          gap-3
          w-full
          text-left
        ;

        & .text{
          @apply
            text-light
            text-sm
            tracking-wide
          ;
        }
      }

      & .tags-content{
        @apply
          flex
          flex-wrap
          items-start
          justify-start
          w-full
          gap-5
        ;
      }
    }
  }
}
</style>
