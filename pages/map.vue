<template>
  <div>
    <div id="map-wrap">
      <client-only>
        <l-map :zoom=13 :center="[47.413220, -1.219482]">
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
          <div class="markers_wrap">
            <l-marker @popupopen="console" :zIndexOffset="1" :lat-lng="[47.413220, -1.219482]" :draggable="true" @move="console">
            <l-icon
                :icon-size="[30,37]"
                :icon-anchor="[14,0]"
                :icon-url="require('assets/img/map/icon.png')"
              />
            <l-popup>
              <MapPopup/>
            </l-popup>
          </l-marker>

          <l-marker :lat-lng="[47.413220, -1.219482]" :draggable="true" @move="console">
            <l-icon
              :icon-size="[50,50]"
              :icon-anchor="[24,0]"
            >
              <div class="bg-icon">
              </div>
            </l-icon>
          </l-marker>
          </div>
          
        </l-map>
      </client-only>
    </div>
  </div>
</template>

<script>
  import gsap from 'gsap'
  import MapPopup from '@/components/map/MapPopup.vue'

  export default {
    components: {
      MapPopup
    },
    methods: {
      console(e) {
        let marker = e.popup._source.getElement()
        console.log(marker.nextElementSibling.querySelector('.bg-icon'))
        // let transform = marker.style.transform;
        // let left = +transform.split('p')[0].split('(')[1]
        // let top = parseInt(transform.split(',')[1])
        // let circle = document.createElement('div');
        // circle.classList.add('custom-circle');
        // circle.style.left = left - 25 + 'px';
        // circle.style.top = top - 6 + 'px';
        // marker.parentNode.appendChild(circle);
      },
          close(e) {
      console.log(e.popup._source.getElement())
    }
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
  }
</style>
