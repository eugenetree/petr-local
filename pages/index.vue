<template>
  <div>
    <section class="search-section">
      <div class="bg-img overlay">
        <img src="/home/bg-main.png" alt="">
      </div>
      <div class="content">
        <h2 class="title white">
          Check for unsafe spots at your destination
        </h2>
        <SearchBox/>
        <div class="hint">
          <span class="white">Or search by</span>
          <span class="green"> continents, countries, regions</span>
          <span class="white"> and</span>
          <span class="green"> cities.</span>
        </div>
      </div>
    </section>

    <section class="popular-section">
      <div class="content">
        <h3>Popular searches</h3>
        <div class="grid">
          <div class="grid-item overlay">
            <div class="bg-img">
              <img src="/home/popular-1.png" alt="">
            </div>
            <span class="top">Safety in</span>
            <span class="bottom">Costa Rica</span>
          </div>
         <div class="grid-item overlay">
            <div class="bg-img">
              <img src="/home/popular-1.png" alt="">
            </div>
            <span class="top">Safety in</span>
            <span class="bottom">Costa Rica</span>
          </div>
           <div class="grid-item overlay">
            <div class="bg-img">
              <img src="/home/popular-1.png" alt="">
            </div>
            <span class="top">Safety in</span>
            <span class="bottom">Costa Rica</span>
          </div>
           <div class="grid-item overlay">
            <div class="bg-img">
              <img src="/home/popular-1.png" alt="">
            </div>
            <span class="top">Safety in</span>
            <span class="bottom">Costa Rica</span>
          </div>
           <div class="grid-item overlay">
            <div class="bg-img">
              <img src="/home/popular-1.png" alt="">
            </div>
            <span class="top">Safety in</span>
            <span class="bottom">Costa Rica</span>
          </div>
           <div class="grid-item overlay">
            <div class="bg-img">
              <img src="/home/popular-1.png" alt="">
            </div>
            <span class="top">Safety in</span>
            <span class="bottom">Costa Rica</span>
          </div>
           <div class="grid-item overlay">
            <div class="bg-img">
              <img src="/home/popular-1.png" alt="">
            </div>
            <span class="top">Safety in</span>
            <span class="bottom">Costa Rica</span>
          </div>
           <div class="grid-item overlay">
            <div class="bg-img">
              <img src="/home/popular-1.png" alt="">
            </div>
            <span class="top">Safety in</span>
            <span class="bottom">Costa Rica</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue'

export default {
  components: {
    SearchBox
  }
}
</script>

<style lang="scss" scoped>
  .search-section {
    height: 100vh;
    max-height: 700px;
    position: relative;
    margin-bottom: 70px;
    .bg-img {
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      &::after {
        background-color: rgba(0, 0, 0, .5);
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: left;
      width: 100%;
      max-width: 800px;
      .title {
        font-size: 2.5em;
        font-weight: 600;
        margin-bottom: 15px;
      }
      .hint {
        margin-top: 15px;
      }
    }
  }

  .popular-section {
    margin-bottom: 70px;
    .content {
      h3 {
        font-size: 1.6em;
        margin-bottom: 35px;
      }
      .grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .grid-item {
          cursor: pointer;
          position: relative;
          height: 340px;
          width: calc((100% - 75px) / 4);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-right: 25px;
          margin-bottom: 25px;
          background-color: black;
          transition: .3s;
          &:nth-child(4n) {
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
            width: 100%;
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
            font-size: 1.25em;
          }
          .bottom {
            font-size: 1.5em;
            font-weight: bold;
            letter-spacing: .9px;
            border-bottom: 1px solid transparent;
            transition: .3s;
          }
        }
      }
    }
  }

  @media (max-width: 1350px) {
    .content {
      padding: 0 20px;
    }
  }

  @media (max-width: 1150px) {
    .popular-section .content .grid {
      .grid-item {
        width: calc((100% - 50px) / 3);
        &:nth-child(4n) {
          margin-right: 25px;
        }
        &:nth-child(3n) {
          margin-right: 0;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .popular-section .content .grid {
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

  @media (max-width: 800px) {
    .popular-section .content .grid {
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

