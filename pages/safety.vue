<template>
  <div>
    <section class="safety-section">
      <div class="content">
        <h1 class="title">Safety by continents</h1>
        <span class="hint">Pick a location to search for (un)safe hotspots</span>
        <div class="grid-wrapper">
          <Grid/>
        </div>
        <h2 class="info-title">Odstavec textu</h2>
        <p class="info-desc">
          Street crime is low risk and incidents happen very rarely. But travellers should 
          take extra care when in unfamiliar neighbourhoods or venturing away from 
          main tourist tracks. In the past, when muggings have occurred, the assailants 
          have been unarmed. Armed robberies are more common on the Turkish side in 
          the North, whilst being very rare in the South.
        </p>
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
  import Grid from '@/components/Grid.vue'
  import SearchBox from '@/components/SearchBox.vue'

  export default {
    components: {
      Grid,
      SearchBox
    },
    data() {
      return {
        safetyList: [
          {
            name: 'Africa',
            img: require('@/assets/img/safety/1.png')
          },
          {
            name: 'Antarctica',
            img: require('@/assets/img/safety/2.png')
          },
          {
            name: 'Asia',
            img: require('@/assets/img/safety/3.png')
          },
          {
            name: 'Australia',
            img: require('@/assets/img/safety/4.png')
          },
          {
            name: 'Europe',
            img: require('@/assets/img/safety/5.png')
          },
          {
            name: 'North America',
            img: require('@/assets/img/safety/6.png')
          },
          {
            name: 'South America',
            img: require('@/assets/img/safety/7.png')
          },
        ] 
      }
    },
  }
</script>

<style lang="scss" scoped>
  .safety-section {
    margin-top: 80px;
    color: $dark;
    .title {
      margin-bottom: 10px;
      font-size: 2.375em;
    }
    .hint {
      margin-bottom: 50px;
    }
    .title, .hint {
      display: block;
      text-align: center;
    }
    .grid-wrapper {
      margin-bottom: 3.8em;
    }
    .info-title, .info-desc {
      display: block;
      margin: auto;
      text-align: center;
      max-width: 580px;
    }
    .info-title {
      font-size: 1.625em;
      margin-bottom: 1.2rem;
    }
    .info-desc {
      line-height: 1.75em;
      padding-bottom: 175px;
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
      margin-bottom: 35px;
    }
  }

  @media (max-width: 600px) {
    .safety-section {
      margin-top: 15px;
      .info-desc, .info-title {
        display: none;
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