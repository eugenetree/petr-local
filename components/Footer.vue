<template>
  <div class="footer">
    <div class="content">
      <Logo/>
      <span class="rights">© 2020 Stay.in All rights reserved</span>
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
  .footer {
    max-width: 1450px;
    width: 100%;
    height: 80px;
    margin: 0 auto;
    border-top: 1px solid #E0E0E0;
    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .rights {
        color: $dark-grey;
      }
    }
  }

  @media (max-width: 1500px) {
    .footer {
      width: calc(100% - 40px);
    }
  }

  @media (max-width: 450px) {
    .footer .content{
      flex-direction: column;
      justify-content: center;
    }
  }

</style>