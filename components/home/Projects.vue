<template>
  <section class="projects">
    <div class="content">
      <div class="categories-content">
        <div class="title-content">
          <p class="subtitle">Seleção dos melhores projetos</p>
          <h3 class="title">PORTFÓLIO</h3>
        </div>

        <perfect-scrollbar class="categories">
          <button v-for="category in categories" :key="category.id" :class="{'active':category.active}" class="category">
            <div class="icon">
              <Icon :icon="category.icon" />
            </div>
            <div class="description">
              <p class="subtext">{{ category.subtext }}</p>
              <h4 class="text">{{ category.text }}</h4>
            </div>
          </button>
        </perfect-scrollbar>
      </div>

      <div class="dash"></div>

      <perfect-scrollbar class="projects-content">
        <div v-for="project in projects" :key="project.id" class="project">
          <div class="title-content">
            <p class="subtitle">Lorem Ipsum</p>
            <p class="title">{{ project.title }}</p>
          </div>

          <div class="divider"></div>

          <div class="description">
            <p class="text">{{ project.description }}</p>

            <div class="options">
              <a href="javascript:;" class="option" title="Visitar" target="_blank">
                <Icon icon="visit" />
              </a>
              <a href="javascript:;" class="option" title="Ver no Github" target="_blank">
                <Icon icon="github-black" />
              </a>
            </div>
          </div>
        </div>
      </perfect-scrollbar>
    </div>
  </section>
</template>

<script>
import Icon from '@/components/Icons'

export default {
  name: "ProjectsComponent",
  components: { Icon },
  data(){
    return{
      categories:[
        { id: 1, text: 'E-Commerces', subtext: 'Front-end Developer', icon: 'cart', active: true },
        { id: 2, text: 'Websites', subtext: 'Full Stack', icon: 'hook', active: false },
        { id: 3, text: 'Games', subtext: 'Full Stack', icon: 'control', active: false },
        { id: 4, text: 'UI / UX', subtext: 'Prototipagem', icon: 'brush', active: false },
        { id: 5, text: 'Projetos Variados', subtext: 'Full Stack', icon: 'options', active: false }
      ],
      projects:[
        { id: 1, title: 'MONDABELLE', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum facilisis dolor, ac consectetur dui volutpat eget.' },
        { id: 2, title: 'MONDABELLE', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum facilisis dolor, ac consectetur dui volutpat eget.' },
        { id: 3, title: 'MONDABELLE', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum facilisis dolor, ac consectetur dui volutpat eget.' },
        { id: 4, title: 'MONDABELLE', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum facilisis dolor, ac consectetur dui volutpat eget.' },
        { id: 5, title: 'MONDABELLE', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum facilisis dolor, ac consectetur dui volutpat eget.' }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.projects{
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
      lg:items-center
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

    & .categories-content{
      @apply
        flex
        flex-col
        w-full
        max-w-[485px]
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

      & .categories{
        @apply
          flex
          flex-col
          w-full
          max-h-[425px]
          gap-3
        ;

        & .category{
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

    & .projects-content{
      @apply
        flex
        flex-col
        w-full
        max-h-[610px]
        gap-4
      ;

      & .project{
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
          sm:flex-row
        ;

        & .title-content{
          @apply
            flex
            flex-col
            items-center
            w-full
            max-w-[150px]
            gap-1
            sm:items-start
          ;

          & .title{
            @apply
              text-light
              text-xl
              font-bold
              tracking-wider
              text-center
              sm:text-left
            ;
          }

          & .subtitle{
            @apply
              text-light
              text-base
              tracking-wider
              text-center
              sm:text-left
            ;
          }
        }

        & .divider{
          @apply
            w-[70px]
            h-[2px]
            sm:w-[2px]
            sm:h-[70px]
            bg-highlight
          ;
        }

        & .description{
          @apply
            flex
            flex-col
            flex-grow
            gap-4
            w-full
            text-center
            sm:text-left
            sm:w-auto
            sm:items-center
            sm:justify-start
            sm:flex-row
          ;

          & .text{
            @apply
              flex-grow
              text-light
              text-sm
              tracking-wide
            ;
          }

          & .options{
            @apply
              flex
              flex-row
              justify-center
              w-full
              gap-1
              sm:justify-start
              sm:flex-col
              sm:w-8
            ;

            & .option{
              @apply
                flex
                items-center
                justify-center
                w-8
                h-8
                rounded-md
                bg-light
              ;
            }
          }
        }
      }
    }
  }
}
</style>
