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
      document.body.style.margin = 0;
      document.body.style.fontFamily = `"Muli", sans-serif`;
    },
  }
</script>

<style lang="scss" scoped>
  
</style>