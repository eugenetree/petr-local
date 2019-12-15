<template>
  <div style="width: 50%">
     <client-only>
		<slick-slide 
    class="test"
			ref="slick"
			:options="slickOptions">
		  <img src="@/assets/img/map/slide-1.png" alt="">
			<img src="@/assets/img/map/slide-2.png" alt="">
			<img src="@/assets/img/map/slide-3.png" alt="">
			<img src="@/assets/img/map/slide-4.png" alt="">
			<img src="@/assets/img/map/slide-5.png" alt="">
		</slick-slide>

    <slick-slide 
    class="testt"
			:options="slickOptions2">
		  <img src="@/assets/img/map/slide-1.png" alt="">
			<img src="@/assets/img/map/slide-2.png" alt="">
			<img src="@/assets/img/map/slide-3.png" alt="">
			<img src="@/assets/img/map/slide-4.png" alt="">
			<img src="@/assets/img/map/slide-5.png" alt="">
		</slick-slide>
	</client-only>
    <div id="map-wrap">
      <!-- <client-only>
        <l-map :zoom=13 :center="[47, -1]">
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>

          <div class="markers-wrap" v-for="(item, index) in coords" :key="index">
            <l-marker :key="index" @popupopen="circleHandler($event, {id: index, display: true})" @popupclose="circleHandler($event, {id: index, display: false})" :zIndexOffset="1" :lat-lng="item.latLng" :draggable="true">
            <l-icon
                :icon-size="[30,37]"
                :icon-anchor="[14,0]"
                :icon-url="require('assets/img/map/icon.png')"
              />
            <l-popup>
              <MapPopup/>
            </l-popup>
          </l-marker>

            <l-marker :key="index + 'circle'" :lat-lng="item.latLng" :draggable="true">
                <l-icon
                  :icon-size="[50,50]"
                  :icon-anchor="[24,0]"
                >
                <div class="bg-icon" :data-id="index">
                </div>
              </l-icon>
            </l-marker>
          </div>
          
        </l-map>
      </client-only> -->
      <Map :coords="coords"/>
    </div>
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
        slickOptions: {
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: '.testt',
          arrows: false,
        },
                slickOptions2: {
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.test',
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
  .bg-icon {
    width: 100%;
    height: 100%;
    background: radial-gradient($green, rgba(53,205,184,.2));
    border-radius: 50%;
    border: 2px dashed $green;
    opacity: 0;;
  }

  .testt {
    .slick-slide {
      height:200px;
    }

    .slick-slide img {
      height:200px;
    }
  }

  .test {
    .slick-slide {
      height:500px;
    }

    .slick-slide img {
      height:500px;
    }
  }
</style>
