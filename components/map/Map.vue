<template>
    <client-only>
        <l-map :zoom="zoom" :center="center">
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
          <div class="markers-wrap" v-for="(item, index) in hotels" :key="index">
            <l-marker :key="index" :zIndexOffset="1" :lat-lng="[item.lat, item.lng]">
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
                <div 
                  :style="{
                    background: getColor({type: 'bg', value: (item.area + item.location) / 20}), 
                    border: `2px dashed ${getColor({type: 'border', value: (item.area + item.location) / 20})}`
                  }" 
                  class="bg-icon" 
                  :data-id="index"
                >
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
      getColor({type, value}) {
        let hue=((value)*180).toString(10);
        let opacity = .5;
        if (type == 'border') opacity = 1;
        return `hsl(${hue}, 60%, 50%, ${opacity}`;
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
    // background: radial-gradient($green, rgba(53,205,184,.2));
    border-radius: 50%;
    // border: 1px dashed $green;
    // opacity: .5;
  }
</style>