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
    display: flex;
    font-weight: 600;
    font-family: $logo-font;
    letter-spacing: -.5px;
  }
</style>