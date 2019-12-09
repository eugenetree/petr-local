<template>
 <div class="logo" :style="{fontSize}">
    <span>SafeLocation</span>
    <span class="green">.in</span>
  </div>
</template>

<script>
  export default {
    props: ['fontSize']
  }
</script>

<style lang="scss" scoped>
  .logo {
    font-family: $logo-font;
  }
</style>