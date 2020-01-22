<template>
  <div>
    <section class="search-section">
      <div class="bg-img overlay">
        <img src="~assets/img/home/bg-main.jpg" alt="">
      </div>
      <div class="content">
        <div class="wrapper">
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
      </div>
    </section>
    
    <Preloader class="preloader" v-if="!popular.length"/>

    <section class="popular-section" v-if="popular.length">
      <div class="content">
        <h3>Popular searches</h3>
        <Grid :gridList="popular" />
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

import SearchBox from '@/components/SearchBox.vue'
import Grid from '@/components/Grid.vue'
import Preloader from '@/components/Preloader.vue'

export default {
  components: {
    SearchBox,
    Grid,
    Preloader
  },


  head() {
    return {
      title: 'SafeLocation'
    }
  },


  data() {
    return {
      popular: []      
    }
  },


  created() {
    axios.get(`${this.$store.state.apiDomain}/api/autocomplete/popular`).then(response => this.popular = response.data.data);
  },
}
</script>

<style lang="scss" scoped>
  .preloader {
    margin-bottom: 4em;
  }

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
      .wrapper {
        width: 100%;
        position: relative;
        .title {
          position: absolute;
          top: calc(-100% - 40px);
          font-size: 2.5em;
          font-weight: 600;
          line-height: 1.1em;
        }
        .hint {
          position: absolute;
          margin-top: 15px;
        }
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

  @media (max-width: 950px) {
    .search-section .content {
      .wrapper {
        .title, .hint {
          position: relative;
          top: 0;
          left: 0;
        }
        .title {
          margin-bottom: 12px;
          line-height: auto;
        }
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

