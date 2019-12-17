<template>
  <div>
    <modal class="modale" height="auto" width="90%" :max-width="380" :adaptive="true" name="missing">
      <h1 class="green">Missing anything?</h1>
      <p>
        We are still developing the product and 
        would love your feedback on its current 
        state as well as future features you 
        would like to see.
        <br><br>
        Please email us at xxx@xxx.xx with any 
        concerns you might have.
      </p>
      <button>Get in touch with us</button>
    </modal>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" >
  .modale .v--modal-box {
    padding: 1.9em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1.8em;
    border-radius: 8px;
    color: $dark;

    h1 {
      margin-bottom: 1rem;
    }

    p {
      text-align: center;
      margin-bottom: 1rem;
    }

    button {
      text-transform: uppercase;
      padding: 1em 1.6em;
      font-family: Muli;
      font-size: 1em;
      background-color: $green;
      color: $white;
      border-radius: 8px;
      cursor: pointer;
    }
  }
</style>