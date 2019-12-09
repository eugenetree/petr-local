<template>
  <div class="navbar">
    <div class="content">
      <Logo fontSize='1.5em'/>
      <div class="menu-list">
        <nuxt-link class="menu-item" to="/">Home</nuxt-link>
        <nuxt-link class="menu-item" to="/">Travel Insurance</nuxt-link>
        <nuxt-link class="menu-item" to="/">About Us</nuxt-link>
        <nuxt-link class="menu-item" to="/">Contact Us</nuxt-link>
        <nuxt-link class="menu-item" to="/">Blog</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from '@/components/Logo.vue';

  export default {
    components: {
      Logo
    }  
  }
</script>

<style lang="scss" scoped>
  .navbar {
    height: 64px;
    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .menu-list {
      .menu-item {
        color: $dark;
        margin-right: 1.8em;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>