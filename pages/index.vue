<template>
  <div>
    <section class="search-section">
      <div class="bg-img overlay">
        <img src="/home/bg-main.png" alt="">
      </div>
      <div class="content">
        <h2 class="title white">
          Check for unsafe spots at your destination
        </h2>
        <SearchBox/>
        <div class="hint">
          <span class="white">Or search by</span>
          <span class="green"> continents, countries, regions</span>
          <span class="white"> and</span>
          <span class="green"> cities.</span>
        </div>
      </div>
    </section>

    <section class="popular-section">
      <div class="content">
        <h3>Popular searches</h3>
        <Grid/>
      </div>
    </section>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue'
import Grid from '@/components/Grid.vue'
export default {
  components: {
    SearchBox,
    Grid
  }
}
</script>

<style lang="scss" scoped>
  .search-section {
    height: calc(100vh - #{$navbar-height});
    max-height: 700px;
    min-height: 500px;
    position: relative;
    margin-bottom: 4em;
    .bg-img {
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      &::after {
        background-color: rgba(0, 0, 0, .5);
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: left;
      width: 100%;
      max-width: 800px;
      .title {
        font-size: 2.5em;
        font-weight: 600;
        margin-bottom: 15px;
      }
      .hint {
        margin-top: 15px;
      }
    }
  }

  .popular-section {
    margin-bottom: 4em;
    .content {
      h3 {
        font-size: 1.6em;
        margin-bottom: 35px;
      }
    }
  }

  @media (max-width: 800px) {
    .popular-section .content{
      h3 {
        margin-bottom: 15px;
      }
    }
  }
</style>

