<template>
  <div>
    <div id="map-wrap">
      <no-ssr>
        <l-map :zoom=13 :center="[47.413220, -1.219482]">
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
          <l-marker @popupopen="console" :lat-lng="[47.413220, -1.219482]" :draggable="true" @move="console">
            <l-icon
                :icon-size="[20,30]"
                :icon-anchor="[9,-2]"
                :icon-url="require('assets/img/map/icon.png')"
              />
            <l-popup>
              <span>Hotel Ebersbach</span>
              <MapPopup/>
            </l-popup>
          </l-marker>
        </l-map>
      </no-ssr>
    </div>
  </div>
</template>

<script>
  import MapPopup from '@/components/map/MapPopup.vue'

  export default {
    components: {
      MapPopup
    },
    methods: {
      console() {
        console.log('console')
      }
    },
  }
</script>

<style lang="scss" scoped>
  #map-wrap {
    height: 100vh;
  }
</style>