<template>
        <div class="grid">
            
          <div v-for="(item, index) in gridList" :key="index" class="grid-item overlay">
            <nuxt-link :to="handleLink(item)">
              <div class="bg-img">
                <img :src="item.url ? item.url : require(`assets/img/home/popular-1.png`)" alt="">
              </div>
              <span class="top">Safety in</span>
              <span class="bottom">{{ item.name }}</span>
            </nuxt-link>
          </div>
        </div>
</template>

<script>
  export default {
    props: {
      gridList: {
        type: Array,
        default() {
          return []
        }
      }
    },


    methods: {
      handleLink(item) {
        if (item.portalPage == null) return `/en/${item.areaType}/${item.name}`
        return item.portalPage ? `/en/${item.area}/${item.nameToken}` : `/en/area-${item.nameToken}`
      }
    },


    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
      .grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .grid-item {
          cursor: pointer;
          position: relative;
          height: 340px;
          width: calc((100% - 75px) / 4);
          border-radius: 6px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-right: 25px;
          margin-bottom: 25px;
          background-color: black;
          transition: .3s;
          &:nth-child(4n), &:last-child {
            margin-right: 0;
          }
          &::after {
            background-color: rgba(0, 0, 0, .2);
          }
          .bg-img {
            position: absolute;
            z-index: 0;
            left: 0;
            top: 0;
            width: 101%;
            height: 100%;
          }
          &:hover {
            .bottom {
              border-bottom: 1px solid white;
            }
            &::after {
              background-color: rgba(0, 0, 0, .5);
            }
          }
          span {
            color: $white;
            position: relative;
            z-index: 1;
          }
          .top {
            display: block;
            font-size: 1.25em;
            text-align: center;
          }
          .bottom {
            font-size: 1.5em;
            font-weight: bold;
            text-align: center;
            letter-spacing: .9px;
            border-bottom: 1px solid transparent;
            transition: .3s;
          }
        }
      }

  @media (max-width: 1000px) {
    .grid {
      .grid-item {
        width: calc((100% - 25px) / 2);
        &:nth-child(3n) {
          margin-right: 25px;
        }
        &:nth-child(2n) {
          margin-right: 0;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .grid {
      .grid-item {
        margin-right: 0;
        width: 100%;
        &:nth-child(3n) {
          margin-right: 0;
        }
      }
    }
  }
</style>