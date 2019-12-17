<template>
  <div>
    <section class="slider-map-section">
      <div class="content">
        <h1>How safe is Cyprus</h1>
        <div class="flex">
          <div class="slider">
            <client-only>
              <slick-slide 
                class="slider-main"
                ref="slick"
                :options="sliderMainOpt">
                <img src="@/assets/img/map/slide-1.png" alt="">
                <img src="@/assets/img/map/slide-2.png" alt="">
                <img src="@/assets/img/map/slide-3.png" alt="">
                <img src="@/assets/img/map/slide-4.png" alt="">
                <img src="@/assets/img/map/slide-5.png" alt="">
              </slick-slide>

              <slick-slide 
                class="slider-sub"
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
        <h2>How safe is Cyprus</h2>
        <p>
          Street crime is low risk and incidents happen very rarely. But travellers should 
          take extra care when in unfamiliar neighbourhoods or venturing away from 
          main tourist tracks. In the past, when muggings have occurred, the assailants 
          have been unarmed. Armed robberies are more common on the Turkish side in 
          the North, whilst being very rare in the South.

          Pickpocketing however, can be a problem in many of the busy tourist areas. 
          Whilst it’s not an overly common occurrence, it does happen, as with any 
          holiday destination in the world. So it is advised that money and valuables are 
          kept out of view, and expensive jewellery and watches are left at home.

          Scams can also be an issue if you’re not careful. The risk of this increases 
          during peak tourist periods, such as the busy summer season. Try to negotiate 
          trips, excursions and travel in advance if possible, or book activities and taxis 
          with your hotel. It can be tempting to go for the cheapest prices on the street, 
          but organising everything through your hotel ensures that you are dealing with 
          official companies.

          Other common scams that you may come across on the street include inferior 
          quality cigarettes (often sold in genuine-looking multipacks) and nightclub and 
          cabaret scams that lure you into a venue with promises of entertainment and 
          great food, but the reality is quite the opposite. To avoid being tricked to part 
          with your cash, do your research before you head out for the night.
        </p>
      </div>
    </section>

    <section class="search-section">
      <div class="map">
        <Map :center="[35, 33]" :zoom="8"/>
      </div>
    </section>
  </div>
</template>

<script>
  import gsap from 'gsap'
  // import MapPopup from '@/components/map/MapPopup.vue'
  import Map from '@/components/map/Map.vue'

  export default {
    components: {
      // MapPopup,
      Map
    },
    data() {
      return {
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
          focusOnSelect: true
			  },
        coords: [
          {
            latLng: [47, -1],
          },
          {
            latLng: [47.2, -1],
          }
        ]
      }
    },
    methods: {
      circleHandler(e, payload) {
        console.log(e.popup._source.getElement());
        let marker = e.popup._source.getElement()
        let circle = marker.parentNode.querySelector(`.bg-icon[data-id='${payload.id}']`);

        if (payload.display) gsap.fromTo(circle, {autoAlpha: 0}, {autoAlpha: 1, duration: .5})
        else gsap.fromTo(circle, {autoAlpha: 1}, {autoAlpha: 0, duration: .5})
      },
          close(e) {
      console.log(e.popup._source.getElement())
    }
  },
  mounted() {
  },

  }
</script>

<style lang="scss" scoped>
  #map-wrap {
    height: 100vh;
  }
</style>

<style lang="scss">
  .slider-map-section {
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
      .slider {
        width: 60%;
      }
      .map {
        width: 40%;
      }
    }
  }

  .search-section {
    .map {
      height: 650px;
      width: 100%;    
    }
  }
</style>
