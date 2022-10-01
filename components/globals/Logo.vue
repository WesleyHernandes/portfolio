<template>
  <div class="logo">
    <svg width="100%" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 74.75V11C3 8.23858 5.23858 6 8 6H20.5C23.2614 6 25.5 8.23858 25.5 11V62.3655C25.5 66.8634 30.9756 69.0741 34.0985 65.837L56.0461 43.0864C58.0206 41.0397 61.3023 41.0497 63.2642 43.1085L84.797 65.7046C87.9102 68.9717 93.4167 66.7682 93.4167 62.2553V11C93.4167 8.23858 95.6552 6 98.4167 6H113C115.761 6 118 8.23858 118 11V74.75" stroke="#E7F6F3" stroke-width="4"/>
      <path d="M25.5 39.3333L56.1545 9.80033C58.1082 7.9181 61.2065 7.93722 63.1368 9.84342L93 39.3333" stroke="#E7F6F3" stroke-width="4"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'LogoComponent'
}
</script>

<style lang="postcss">
.logo{
  @apply
    flex
    flex-col
    w-full
    max-w-[80px]
    xl:max-w-[120px]
  ;
}
</style>
