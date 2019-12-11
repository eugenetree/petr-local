<template>
  <div class="search-box">
    <input type="text" placeholder="Type in and select your destination from the list ">
    <button>search</button>
    <div class="search-icon">
      <img src="~assets/img/search.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .search-box {
    display: flex;
    height: 68px;
    position: relative;
    input {
      border: 1px solid $dark-grey;
      font-size: 1.125em;
      font-family: 'Muli', sans-serif;
      height: 100%;
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
      width: 190px;
      padding: 0 50px;
      background-color: $green;
    }
    .search-icon {
      display: none;
    }
  }

  @media (max-width: 650px) {
    .search-box {
      height: 50px;
      input {
        width: 100%;
        padding-left: 30px;
      }
      button {
        display: none;
      }
      .search-icon {
        display: block;
        position: absolute;
        left: 5px;
        top: 50%;
        transform: translateY(-50%);
        height: 20px;
        width: 20px;
        img {
          object-fit: none;
        }
      }
    }
  }
</style>