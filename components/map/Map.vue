<template>
    <client-only>
        <l-map :zoom="zoom" :center="center">
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
          <div class="markers-wrap" v-for="(item, index) in hotels" :key="index">
            <l-marker :key="index" @popupopen="circleHandler($event, {id: index, display: true})" @popupclose="circleHandler($event, {id: index, display: false})" :zIndexOffset="1" :lat-lng="[item.lat, item.lng]">
            <l-icon
                :icon-size="[30,37]"
                :icon-anchor="[14,0]"
                :icon-url="require('assets/img/map/icon.png')"
              />
            <l-popup style="max-width: 200px">
              <MapPopup :value="item" />
            </l-popup>
          </l-marker>

            <l-marker :key="index + 'circle'" :lat-lng="[item.lat, item.lng]">
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
    </client-only>
</template>

<script>
  import gsap from 'gsap'
  import MapPopup from '@/components/map/MapPopup.vue'
  export default {
    components: {
      MapPopup
    },
    props: ['hotels', 'center', 'zoom'],
    methods: {
      circleHandler(e, payload) {
      },
          close(e) {
    }
    },
    mounted() {
    }
  }
</script>

<style lang="scss">
  .bg-icon {
    width: 100%;
    height: 100%;
    background: radial-gradient($green, rgba(53,205,184,.2));
    border-radius: 50%;
    border: 1px dashed $green;
    // opacity: 0;
  }
</style>