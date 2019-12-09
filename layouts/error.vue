<template>
  <div>
    <section class="text">
      <div class="content">
        <h1>Sorry, we are not there yet :(  </h1>
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
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "@/assets/css/main.scss";

  .content {
    max-width: 600px;
    ol {
      padding-left: 20px;
    }
  }
</style>