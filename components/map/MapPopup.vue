<template>
  <div>
    <span class="popup-title">{{ value.name }}</span>
    <div>
      <Rating class="rating" :value="value.area * 10"/>
      <span class="rating-title">(Hotel rating)</span>
    </div>
    <div>
      <Rating class="rating" :value="value.location * 10"/>
      <span class="rating-title">(Location rating)</span>
    </div>
    <span class="rating-money">$$$</span>
    <a class="show-info" :href="value.url">Show information and prices</a>
  </div>
</template>

<script>
  import Rating from "@/components/map/Rating.vue"
  export default {
    props: ['value'],

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
    display: block;
    text-align: center;
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

</style>
