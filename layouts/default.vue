<template>
  <div>
    <Navbar/>
      <Nuxt class="default-wrapper" />
    <Footer/>
    <MissingModal/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
  import MissingModal from '@/components/modals/MissingModal.vue'

  export default {
    components: {
      Navbar,
      Footer,
      MissingModal
    },
    mounted() {
      // this.$modal.show('missing')
    },
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/css/main.scss";

  .default-wrapper {
    min-height: calc(100vh - 150px);
  }
</style>