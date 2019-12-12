<template>
  <div>
    <span class="popup-title">Hotel Ebersbach</span>
    <div>
      <Rating class="rating" :value="88"/>
      <span class="rating-title">(Hotel rating)</span>
    </div>
    <div>
      <Rating class="rating" :value="66"/>
      <span class="rating-title">(Location rating)</span>
    </div>
    <span class="rating-money">$$$</span>
    <button class="show-info">Show information and prices</button>
  </div>
</template>

<script>
  import Rating from "@/components/map/Rating.vue"
  export default {
    components: {
      Rating
    }
  }
</script>

<style lang="scss" scoped>
  .rating {
    display: inline-block;
  }

  .popup-title {
    display: block;
    font-weight: 600;
    font-family: $main-font;
    font-size: 16px;
  }
  .rating-title {
    color: $dark-grey;
    font-size: 14px;
    font-family: $main-font;
  }
  .rating-money {
    display: block;
    font-size: 16px;
    font-weight: bold;
    font-family: $main-font;
    color: $dark;
  }
  .show-info {
    background-color: $green;
    font-size: 12px;
    font-weight: 600;
    font-family: $main-font;
    color: $white;
    padding: 7px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
</style>

.<style lang="scss">
</style>
