<template>
  <div>
    <section class="safety-section">
      <div class="content">
        <h1 class="title">Safety by {{ title }}</h1>
        <span class="hint">Pick a location to search for (un)safe hotspots</span>
        <Preloader v-if="fetchDataLoading"/>
        <div class="grid-wrapper">
          <Grid :gridList="fetchData.relatedAresas" />
        </div>
        <div class="info-desc" :style="{paddingBottom: fetchDataLoading ? '0' : '175px'}" v-html="fetchData.areaText" />
      </div>
      <div class="exact-location">
        <div class="bg-img overlay">
          <img src="~assets/img/home/bg-main.jpg" alt="">
        </div>
        <div class="content">
          <h3>Or search for exact location</h3>
          <SearchBox/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Grid from '@/components/Grid.vue'
  import SearchBox from '@/components/SearchBox.vue'
  import Preloader from '@/components/Preloader.vue'

  import axios from 'axios'

  export default {
    components: {
      Grid,
      SearchBox,
      Preloader
    },


    head() {
      return {
        title: this.title
      }
    },


    validate ({ params }) {
      return params.ppFalse.slice(0,5) == 'area-';
    },


    data() {
      return {
        fetchData: {}
      }
    },


    computed: {
      title() {
        let title = this.$route.params.ppFalse.slice(5)
        return title[0].toUpperCase() + title.slice(1)
      },

      fetchDataLoading() {
        return !Object.keys(this.fetchData).length
      }
    },


    created() {
      axios.get(`${this.$store.state.apiDomain}/api/areas/t-${this.title}`)
        .then(response => {
          this.fetchData = response.data.data[0]
        })
        .catch(error => {
          this.$router.push('/404')
        })
    },
  }
</script>

<style lang="scss" scoped>
  .safety-section {
    padding-top: 80px;
    color: $dark;
    .title {
      margin-bottom: 10px;
      font-size: 2.375em;
    }
    .hint {
      margin-bottom: 50px;
    }
    .title, .hint {
      display: block;
      text-align: center;
    }
    .grid-wrapper {
      margin-bottom: 3.8em;
    }
    .info-title, .info-desc {
      display: block;
      margin: auto;
      text-align: center;
      max-width: 580px;
    }
    .info-title {
      font-size: 1.625em;
      margin-bottom: 1.2rem;
    }
    .info-desc {
      line-height: 1.75em;
      // padding-bottom: 175px;
      &::v-deep a {
        color: $green;
        text-decoration: underline;
      }
    }
    .exact-location {
      position: relative;
      height: 320px;
      display: flex;
      justify-content: center;
      align-items: center;
      .content {
        max-width: 700px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h3 {
          color: $white;
          font-size: 1.9em;
          margin-bottom: 35px;
        }
      }
      margin-bottom: 35px;
    }
  }

  @media (max-width: 600px) {
    .safety-section {
      margin-top: 15px;
      .info-desc, .info-title {
        display: none;
      }
      .exact-location {
        height: 150px;
        .content {
          h3 {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
</style>