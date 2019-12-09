<template>
  <div>
    <Navbar/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
  
  export default {
    components: {
      Navbar,
      Footer
    },
    mounted() {
    },
  }
</script>

<style lang="scss" scoped>
  
</style>