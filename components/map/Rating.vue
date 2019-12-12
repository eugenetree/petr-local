<template>
  <div class="rating">
    <div class="back">
      <font-awesome-icon :icon="['far', 'star']" v-for="item in 5" :key="item"/>
    </div>
    <div class="front" :style="{width: value + '%'}">
      <font-awesome-icon :icon="['fas', 'star']" v-for="item in 5" :key="item"/>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['value']
  }
</script>

<style lang="scss" scoped>
  .rating {
    position: relative;
    width: fit-content;
    color: $green;
    font-size: 15px;
  }

  .front {
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    height: 100%;
    width: 100%;
    svg {
      position: absolute;
      top: 2.5px;
      &:nth-child(1) {
        left: 0;
      }
      &:nth-child(2) {
        left: 1.125em;
      }
      &:nth-child(3) {
        left: 2.25em;
      }
      &:nth-child(4) {
        left: 3.375em;
      }
      &:nth-child(5) {
        left: 4.5em;
      }
    }
  }
</style>