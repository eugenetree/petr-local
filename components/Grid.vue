<template>
        <div class="grid">
          <div class="grid-item overlay">
            <div class="bg-img">
              <img src="~assets/img/home/popular-1.png" alt="">
            </div>
            <span class="top">Safety in</span>
            <span class="bottom">Costa Rica</span>
          </div>
         <div class="grid-item overlay">
            <div class="bg-img">
              <img src="~assets/img/home/popular-1.png" alt="">
            </div>
            <span class="top">Safety in</span>
            <span class="bottom">Costa Rica</span>
          </div>
           <div class="grid-item overlay">
            <div class="bg-img">
              <img src="~assets/img/home/popular-1.png" alt="">
            </div>
            <span class="top">Safety in</span>
            <span class="bottom">Costa Rica</span>
          </div>
           <div class="grid-item overlay">
            <div class="bg-img">
              <img src="~assets/img/home/popular-1.png" alt="">
            </div>
            <span class="top">Safety in</span>
            <span class="bottom">Costa Rica</span>
          </div>
           <div class="grid-item overlay">
            <div class="bg-img">
              <img src="~assets/img/home/popular-1.png" alt="">
            </div>
            <span class="top">Safety in</span>
            <span class="bottom">Costa Rica</span>
          </div>
           <div class="grid-item overlay">
            <div class="bg-img">
              <img src="~assets/img/home/popular-1.png" alt="">
            </div>
            <span class="top">Safety in</span>
            <span class="bottom">Costa Rica</span>
          </div>
           <div class="grid-item overlay">
            <div class="bg-img">
              <img src="~assets/img/home/popular-1.png" alt="">
            </div>
            <span class="top">Safety in</span>
            <span class="bottom">Costa Rica</span>
          </div>
           <div class="grid-item overlay">
            <div class="bg-img">
              <img src="~assets/img/home/popular-1.png" alt="">
            </div>
            <span class="top">Safety in</span>
            <span class="bottom">Costa Rica</span>
          </div>
        </div>
</template>

<script>
  export default {
    
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

  @media (max-width: 1150px) {
    .grid {
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

  @media (max-width: 800px) {
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