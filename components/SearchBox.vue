<template>
  <div class="search-box">
    <input type="text" placeholder="Type in and select your destination from the list ">
    <button>search</button>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .search-box {
    display: flex;
    input {
      border: 1px solid $dark-grey;
      font-size: 1.125em;
      font-family: 'Muli', sans-serif;
      height: 68px;
      width: calc(100% - 190px);
      padding: 0 23px;
      background-color: $light-grey;
      &::placeholder {
        color: $dark-grey;
      }
    }
    button {
      font-size: 1.25em;
      font-weight: bold;
      text-transform: uppercase;
      color: $white;
      height: 68px;
      width: 190px;
      padding: 0 50px;
      background-color: $green;
    }
  }
</style>