<template>
  <div class="navbar">
    <div class="content">
      <nuxt-link to="/"><Logo fontSize='1.5em'/></nuxt-link>
      <div class="menu-list" ref="menuList" v-click-outside="closeMenu">
        <nuxt-link class="menu-item" to="/" @click.native="closeMenu">Home</nuxt-link>
        <nuxt-link class="menu-item" to="/" @click.native="closeMenu">Travel Insurance</nuxt-link>
        <nuxt-link class="menu-item" to="/" @click.native="closeMenu">About Us</nuxt-link>
        <nuxt-link class="menu-item" to="/" @click.native="closeMenu">Contact Us</nuxt-link>
        <nuxt-link class="menu-item" to="/" @click.native="closeMenu">Blog</nuxt-link>
        <nuxt-link class="menu-item" to="/1" @click.native="closeMenu">Error</nuxt-link>
      </div>
      <div class="burger" :class="{'burger-is-opened': burgerIsOpened}" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
  import gsap from 'gsap'
  import vClickOutside from 'v-click-outside'
  import Logo from '@/components/Logo.vue';

  export default {
    components: {
      Logo
    },
    directives: {
      clickOutside: vClickOutside.directive
    },
    data() {
      return {
        burgerIsOpened: false,
        burger: {
          animating: false,
          duration: 500
        }
      }
    },
    methods: {
      toggleMenu() {
        if (this.burger.animating) return;
        this.burgerIsOpened = !this.burgerIsOpened;
        this.burger.animating = true;
        setTimeout(() => {
          this.burger.animating = false;
        }, this.burger.duration);
      },
      closeMenu(e) {
        if (e.target.closest('.burger') || this.burger.animating) return;
        this.burgerIsOpened = false;
        this.burger.animating = true;
        setTimeout(() => {
          this.burger.animating = false;
        }, this.burger.duration);
      }
    },
    watch: {
      burgerIsOpened() {
        if (this.burgerIsOpened) {
          gsap.set(this.$refs.menuList, {autoAlpha: 1})
          gsap.fromTo(this.$refs.menuList, {height: 0}, {height: "auto"})} 
        else {
          gsap.to(this.$refs.menuList, {height: 0})
        }
      }
    },
    mounted() {
    },  
  }
</script>

<style lang="scss" scoped>

  @media (max-width: 1350px) {
    .content {
      padding: $content-padding;
    }
  }

  .navbar {
    height: $navbar-height;
    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .menu-list {
      height: auto;
      .menu-item {
        color: $dark;
        margin-right: 1.8em;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .burger {
      display: none;
      cursor: pointer;
      span {
        display: block;
        width: 18px;
        height: 3px;
        margin-bottom: 4px;
        background-color: $green;
        transition: .3s;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .burger-is-opened {
      span {
        &:first-child {
          transform: translateY(7px) rotate(45deg);
        }
        &:last-child {
          transform: translateY(-7px) rotate(-45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
      }
    }
  }

  @media (min-width: 950px) {
    .menu-list {
      height: auto !important;
    }
  }

  @media (max-width: 950px) {
    .content {
      .burger {
        display: block;
      }
      .menu-list {
        visibility: hidden;
        display: flex;
        flex-direction: column;
        position: fixed;
        z-index: 1;
        top: $navbar-height;
        left: 0;
        width: 100%;
        overflow: hidden;
        .menu-item {
          text-align: center;
          background-color: $white;
          font-weight: 700;
          margin: 0;
          padding: 15px 0;
        }
      }
    }
  }
</style>