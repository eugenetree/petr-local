<template>
  <div>
    <section class="slider-map-section">
      <div class="content">
        <div class="route" v-html="fetchData.breadcrumb" />
        <h1 class="title">How safe is Cyprus</h1>
        <div class="flex">
          <div class="slider">
            <div class="slider-nav">
              <div class="arrow left-arrow" @click="$refs['slider-main'].next()"></div>
              <div class="arrow right-arrow" @click="$refs['slider-main'].prev()"></div>
            </div>
            <client-only>
              <slick-slide 
                class="slider-main"
                ref="slider-main"
                :options="sliderMainOpt">
                <img v-for="(item, index) in fetchData.images" :key="index" :src="item.link" alt="">
              </slick-slide>

              <slick-slide 
                @setPosition="handleSetPosition"
                class="slider-sub"
                ref="slider-sub"
                :options="sliderSubOpt">
                <img @click="imgClickHandler" v-for="(item, index) in fetchData.images" :key="index" :src="item.link" alt="">
              </slick-slide>
            </client-only>
          </div>
          <div class="map">
            <Map :center="fetchData.gps.split(',')" :zoom="8"/>
          </div>
        </div>
      </div>
    </section>

    <section class="text-section">
      <div class="content">
        <h2 class="title">How safe is Cyprus</h2>
        <div v-html="fetchData.pageText"></div>
      </div>
    </section>

    <section class="search-section">
      <div class="content">
        <div class="map">
          <Map :coords="coords" :center="coords[0].latLng" :zoom="10"/>
        </div>

        <div class="refine-search">
          <h3>Refine search by 
            <span class="green" v-for="(value, name, index) in subAreas" :key="index">{{ name }} <span v-if="Object.keys(subAreas).length != index + 1">and </span> </span>  
          in Cyprus</h3>

          <div class="sub-areas" v-for="(value, name, index) in subAreas" :key="index">
            <h5>{{ name }}</h5>
            <nuxt-link class="sub-area-item" v-for="(item, index) in value" :key="index" :to="`/en/${item.areaType}/${item.name}`">{{ item.name }}</nuxt-link>
          </div>
        </div>
      </div>

      <div class="exact-location">
        <div class="bg-img overlay">
          <img src="~assets/img/home/bg-main.png" alt="">
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
  import gsap from 'gsap'
  import axios from 'axios';

  import Map from '@/components/map/Map.vue'
  import SearchBox from '@/components/SearchBox.vue'

  export default {
    components: {
      Map,
      SearchBox
    },

    async asyncData ({ params }) {
      let { data } = await axios.get(`https://safelocationapi.azurewebsites.net/api/PortalPage/t-${params.location}`)
      data.pageText = data.pageText.replace(/<img[^>]*>/g,"");
      return { fetchData: data }
    },

    data() {
      return {
        sliderSetPosCounter: 0,
        sliderResizeTimeout: null,
        sliderImagesLoad: 0,
        sliderMainOpt: {
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: '.slider-sub',
          arrows: false,
        },
        sliderSubOpt: {
          slidesToShow: 5,
          slidesToScroll: 1,
          asNavFor: '.slider-main',
          arrows: false,
          focusOnSelect: true,
          loaded: false,
          isActive: false,
        },
        images: [
          require('@/assets/img/map/slide-1.png'),
          require('@/assets/img/map/slide-2.png'),
          require('@/assets/img/map/slide-3.png'),
          require('@/assets/img/map/slide-4.png'),
          require('@/assets/img/map/slide-5.png'),
        ],
        coords: [
          {latLng: [47, -1]},
          {latLng: [47.2, -1]}
        ],
        subAreas: {},
      }
    },


    methods: {
      handleSetPosition(event, slick) {
        if (this.fetchData.images.length > 5) return;

        // this method fix bug when you click on sub-slider after it have already loaded, but other elements
        // are still loading and after their load, sub-slier will bug-jump

        this.sliderSetPosCounter++;
        if (this.sliderSetPosCounter == 3) this.reInit()
      },

      reInit() {
        this.$nextTick(() => {
          this.$refs['slider-sub'].reSlick();
        });
      },

      sliderReload() {
        this.$refs['slider-sub'].reSlick();
      },

      debounce(func, timeout) {
        let timer;
        return function debounced() {
          clearTimeout(timer);
          timer = setTimeout(func, timeout)
        }
      },

      imagesLoad(array) {
        if (array.length > 5) {
          this.sliderSubOpt.loaded = true;
          return;
        }

        array.forEach(item => {
          let img = new Image();
          img.src = item.link;

          img.onload = () => {
            this.sliderImagesLoad++;
          }
        })
      },

      imgClickHandler(e) {
        if (!this.sliderSubOpt.loaded) e.stopPropagation();
      }
    },
   

    watch: {
      sliderImagesLoad(newVal) {
        console.log(newVal, this.images.length)
        if (newVal == this.fetchData.images.length) setTimeout(() => this.sliderSubOpt.loaded = true, 500);
      }
    },

    async created() {
      this.fetchData.areas.forEach(item => {
        if (!this.subAreas[item.areaType]) this.subAreas[item.areaType] = []

        this.subAreas[item.areaType].push({
          name: item.name,
          areaType: item.areaType
        })
      })
    },

    mounted() {
      this.imagesLoad(this.fetchData.images);
      this.sliderReload = this.debounce(this.sliderReload, 100);
      window.addEventListener('resize', this.sliderReload);
    },


    beforeDestroy() {
      window.removeEventListener('resize', this.sliderReload)
    }
  }
</script>

<style lang="scss" scoped>
  #map-wrap {
    height: 100vh;
  }
</style>

<style lang="scss">
  .slider-map-section {
    margin-bottom: 3em;
    * {
      outline: none;
    }
    .slider-sub {
      .slick-slide {
        height:100px;
      }

      .slick-slide img {
        height:100px;
      }
    }

    .slider-main {
      .slick-slide {
        height:360px;
      }

      .slick-slide img {
        height:360px;
      }
    }

    .content {
      .title {
        font-size: 2.3em;
        margin-bottom: 2rem;
      }

      .route {
        font-size: 14px; 
        color: #888888; 
        margin-top: 25px; 
        margin-bottom: 15px; 
        display: block;
        .current {
          color: $green;
        }
      }

      .slider {
        position: relative;
        width: 60%;
        .slider-nav {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: calc(100% - 100px);
          .left-arrow {
            left: 10px;
            transform: translateY(-50%);
          }
          .right-arrow {
            right: 10px;
            transform: translateY(-50%) rotate(180deg);
          }
          .arrow {
            position: absolute;
            top: 50%;
            z-index: 1;
            width: 50px;
            height: 50px;
            background-color: rgba(255, 255, 255, 0.404);
            border-radius: 50%;
            cursor: pointer;
            &::after, &::before {
              content: '';
              position: absolute;
              left: 50%;
              top: 50%;
              width: 2px;
              height: 10px;
              background-color: rgb(255, 255, 255);
            }
            &::after {
              transform: translate(-50%, calc(-50% + 3px)) rotate(-45deg);
            }
            &::before {
              transform: translate(-50%, calc(-50% - 3px)) rotate(45deg);
            }
          }
        }
      }
      .map {
        width: 40%;
        height: 460px;
      }
    }
  }

  .text-section {
    margin-bottom: 3em;
    .content {
      max-width: 600px;
      .title {
        font-size: 1.8em;
        margin-bottom: .6em;
      }
      p {
        line-height: 1.7em;
        a {
          color: $green;
          text-decoration: underline;
        }
      }
    }
  }

  .search-section {
    margin-bottom: 4em;
    .map {
      height: 650px;
      width: 100%;    
      margin-bottom: 50px;
    }
    .refine-search {
      * {
        width: fit-content;
        margin: 0 auto;
      }
      h3 {
        font-size: 1.6em;
        margin-bottom: 2rem;
        text-align: center;
      }
      h5 {
        font-size: 1.3em;
        margin-bottom: .6rem;
      }
      .sub-areas {
        padding-bottom: 2.3rem;
        max-width: 940px;
        text-align: center;
      }

      .sub-area-item {
        display: inline-block;
        font-size: .9em;
        font-weight: 700;
        border-radius: 4px;
        padding: 5px 12px;
        border: 1px solid $green;
        transition: .2s;
        margin-bottom: 10px;
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          color: $white;
          background-color: $green;
        }
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
    }
  }

  @media (max-width: 800px) {
   .slider-map-section .content {
      .slider {
        margin-left: -20px;
        width: calc(100% + 40px);
        .slider-nav {
          height: 100%;
        }
      }
      .map {
        display: none;
      }
      .slider-sub {
        display: none;
      }
    }
  }

  @media (max-width: 600px) {
    .slider-map-section .content {
      .slider-main {
        .slick-slide {
          height:250px;
        }

        .slick-slide img {
          height:250px;
        }
      }
    }

    .search-section {
      .map {
        margin-left: -20px;
        width: calc(100% + 40px);
        height: 400px;
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