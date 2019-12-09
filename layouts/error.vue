<template>
  <div>
    <section class="text-section">
      <div class="content">
        <h1>Sorry, we are not there yet <span class="green">:(</span>  </h1>
        <p class="desc">
          It seems like you have typed in a destination for which we don’t 
          have any data yet. Sorry for that!
        </p>
        <h3>What to do now?</h3>
        <ol>
          <li>
            Check that you have typed in correct URL. Maybe you have just 
            misspelled a word?
          </li>
          <li>
            Check back in few days. We are pushing ahead and adding new cities, 
            regions and countries on daily basis. If you would like us to prioritize 
            the location you have been searching for, just send us an email to 
            hello@staysafe.in.
          </li>
        </ol>
      </div>
    </section>

    <section class="popular-section">
      <div class="content">
        <h3>Popular searches</h3>
        <Grid/>
      </div>
    </section>
  </div>
</template>

<script>
import Grid from '@/components/Grid.vue'

export default {
  components: {
    Grid
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/css/main.scss";

  .text-section .content {
    margin-top: 15px;
    max-width: 600px;
    height: auto;
    h1 {
      font-size: 2.6em;
      margin-bottom: .2em;
    }
    .desc {
      margin-bottom: 1.5em;
    }
    h3 {
      margin-bottom: .7rem;
    }
    ol {
      padding-left: 0;
      list-style: none;
      counter-reset: counter;
      margin-bottom: 3em;
      li {
        counter-increment: counter;
        &::before {
          content: counter(counter) ". ";
          color: $green;
          font-weight: bold;
        }
      }
    }
  }

  .popular-section {
    margin-bottom: 4em;
    .content {
      h3 {
        font-size: 1.6em;
        margin-bottom: 35px;
      }
    }
  }

  @media (max-width: 1350px) {
    .text-section .content {
      padding: 0;
    }
  } 

  @media (max-width: 800px) {
    .popular-section .content{
      h3 {
        margin-bottom: 15px;
      }
    }
  }

  @media (max-width: 650px) {
    .text-section .content {
      padding: $content-padding;
    }
  } 
</style>