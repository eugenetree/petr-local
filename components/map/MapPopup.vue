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
    margin-bottom: 5px;
  }

  .popup-title {
    display: block;
    font-weight: 600;
    font-family: $main-font;
    font-size: 16px;
    margin-bottom: 5px;
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
    margin-bottom: 10px;
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
    width: 100%;
  }
</style>

.<style lang="scss">
  .bg-icon {
    width: 100%;
    height: 100%;
    background: radial-gradient($green, rgba(53,205,184,.2));
    border-radius: 50%;
    border: 1px dashed $green;
    opacity: 0;;
  }
</style>
