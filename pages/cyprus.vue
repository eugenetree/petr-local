<template>
  <div>
    <section class="slider-map-section">
      <div class="content">
        <div class="route">
          <span class="continent">Europe
            <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']"/>    
          <span class="country green">Cyprus</span></span>
        </div>
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
                <img src="@/assets/img/map/slide-1.png" alt="">
                <img src="@/assets/img/map/slide-2.png" alt="">
                <img src="@/assets/img/map/slide-3.png" alt="">
                <img src="@/assets/img/map/slide-4.png" alt="">
                <img src="@/assets/img/map/slide-5.png" alt="">
              </slick-slide>

              <slick-slide 
                v-if="sliderSubOpt.display"
                class="slider-sub"
                ref="slider-sub"
                :options="sliderSubOpt">
                <img src="@/assets/img/map/slide-1.png" alt="">
                <img src="@/assets/img/map/slide-2.png" alt="">
                <img src="@/assets/img/map/slide-3.png" alt="">
                <img src="@/assets/img/map/slide-4.png" alt="">
                <img src="@/assets/img/map/slide-5.png" alt="">
              </slick-slide>
            </client-only>
          </div>
          <div class="map">
            <Map :center="[35, 33]" :zoom="8"/>
          </div>
        </div>
      </div>
    </section>

    <section class="text-section">
      <div class="content">
        <h2 class="title">How safe is Cyprus</h2>
        <p>
          Street crime is low risk and incidents happen very rarely. But travellers should 
          take extra care when in unfamiliar neighbourhoods or venturing away from 
          main <a href="#">tourist tracks.</a> In the past, when muggings have occurred, the assailants 
          have been unarmed. Armed robberies are more common on the Turkish side in 
          the North, whilst being very rare in the South.<br><br>

          Pickpocketing however, can be a problem in many of the busy tourist areas. 
          Whilst it’s not an overly common occurrence, it does happen, as with any 
          holiday destination in the world. So it is advised that money and valuables are 
          kept out of view, and expensive jewellery and watches are left at home.<br><br>

          Scams can also be an issue if you’re not careful. The risk of this increases 
          during peak tourist periods, such as the busy summer season. Try to negotiate 
          trips, excursions and travel in advance if possible, or book activities and taxis 
          with your hotel. It can be tempting to go for the cheapest prices on the street, 
          but organising everything through your hotel ensures that you are dealing with 
          official companies.<br><br>

          Other common scams that you may come across on the street include inferior 
          quality cigarettes (often sold in genuine-looking multipacks) and nightclub and 
          cabaret scams that lure you into a venue with promises of entertainment and 
          great food, but the reality is quite the opposite. To avoid being tricked to part 
          with your cash, do your research before you head out for the night.
        </p>
      </div>
    </section>

    <section class="search-section">
      <div class="content">
        <div class="map">
          <Map :coords="coords" :center="coords[0].latLng" :zoom="10"/>
        </div>

        <div class="refine-search">
          <h3>Refine search by <span class="green">district</span> or <span class="green">major towns</span> and <span class="green">cities</span> in Cyprus</h3>
          <div class="cities">
            <h5>Cities</h5>
            <a class="city" href="#" v-for="(item, index) in cities" :key="index">{{ item }}</a>
          </div>

          <div class="districts">
            <h5>Districts</h5>
            <a class="district" href="#" v-for="(item, index) in districts" :key="index">{{ item }}</a>
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
  import Map from '@/components/map/Map.vue'
  import SearchBox from '@/components/SearchBox.vue'

  export default {
    components: {
      Map,
      SearchBox
    },


    data() {
      return {
        sliderResizeTimeout: null,
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
          display: true,
          isActive: false
			  },
        coords: [
          {latLng: [47, -1]},
          {latLng: [47.2, -1]}
        ],
        cities: ['Modica', 'Avellino', 'Teramo', 'Avellino', 'Teramo', 'Modica', 'Avellino', 'Teramo'],
        districts: ['Modica', 'Avellino', 'Teramo', 'Avellino', 'Teramo', 'Modica', 'Avellino', 'Teramo', 'Modica', 'Avellino', 'Teramo', 'Avellino', 'Teramo', 'Modica', 'Avellino', 'Teramo']
      }
    },


    methods: {
      test(e) {
        e.stopPropagation();
      },
      sliderReload() {
        this.sliderSubOpt.display = false;
        this.$nextTick(() => this.sliderSubOpt.display = true)
      },

      debounce(func, timeout) {
        let timer;
        return function debounced() {
          clearTimeout(timer);
          timer = setTimeout(func, timeout)
        }
      }
    },
   

    mounted() {
      this.sliderReload = this.debounce(this.sliderReload, 100);
      window.addEventListener('resize', this.sliderReload)
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
      }

      .slider {
        position: relative;
        width: 60%;
        .slider-nav {
          display: none;
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
            width: 20px;
            height: 20px;
            &::after, &::before {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              width: 2px;
              height: 20px;
              background-color: rgb(255, 255, 255);
            }
            &::after {
              transform: translate(10px, -6.4px) rotate(45deg);
            }
            &::before {
              transform: translate(10px, 6.4px) rotate(-45deg);
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
      .cities, .districts {
        padding-bottom: 2.3rem;
        max-width: 940px;
        text-align: center;
      }
      .city, .district {
        display: inline-block;
        font-size: .9em;
        font-weight: 700;
        border-radius: 4px;
        padding: 5px 12px;
        border: 1px solid $green;
        transition: .2s;
        margin-bottom: 10px;
        margin-right: 10px;
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
          display: block;
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