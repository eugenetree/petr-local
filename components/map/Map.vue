<template>
    <client-only>
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
    </client-only>
</template>

<script>
  import gsap from 'gsap'
  import MapPopup from '@/components/map/MapPopup.vue'
  export default {
    components: {
      MapPopup
    },
    props: ['coords'],
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
      console.log('moundet');
    }
  }
</script>

<style lang="scss" scoped>

</style>