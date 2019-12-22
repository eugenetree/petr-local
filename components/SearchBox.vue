<template>
  <div class="search-box" v-click-outside="() => searchSuggestList = []">
    <input @focus="getSuggestList" @input="getSuggestList" v-model="searchPhrase" type="text" placeholder="Type in and select your destination from the list ">
    <div class="search-suggest-list" v-if="searchSuggestList.length">
      <div class="search-suggest-item" v-for="item in searchSuggestList" :key="item.resultType" @click="$router.push(item.url)">
        <span v-html="highlight(item.suggestion)"></span> <span class="type">{{ ` (${item.resultType})` }}</span>
      </div>
    </div>
    <button>Search</button>
    <div class="search-icon">
      <img src="~assets/img/search.png" alt="">
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import vClickOutside from 'v-click-outside'

  export default {
    directives: {
      clickOutside: vClickOutside.directive
    },


    data() {
      return {
        searchPhrase: '',
        searchSuggestList: [],
        debouncedTimeout: null
      }
    },


    methods: {
      getSuggestList() {
        clearTimeout(this.debouncedTimeout);
        if (this.searchPhrase.length < 3 || this.throttled) {this.searchSuggestList = []; return};
        this.debouncedTimeout = setTimeout(async () => {
          let response = await axios.get('https://safelocationapi.azurewebsites.net/api/AutoComplete/' + this.searchPhrase)
          this.searchSuggestList = response.data.data;
        }, 1000);
      },

      highlight(word) {
        return `<span class="highlighted">${word.slice(0, this.searchPhrase.length)}</span>${word.slice(this.searchPhrase.length)}`
      }
    },


    mounted() {
      console.log(axios)
    },
  }
</script>

<style lang="scss" scoped>
  .search-box {
    display: flex;
    height: 68px;
    width: 100%;
    position: relative;
    input {
      position: relative;
      border: 1px solid #e4e4e4;
      font-size: 1.125em;
      font-family: 'Muli', sans-serif;
      height: 100%;
      width: calc(100% - 190px);
      padding: 0 23px;
      background-color: $light-grey;
      &::placeholder {
        color: $dark-grey;
      }
    }
    .search-suggest-list {
      width: calc(100% - 190px);
      background-color: $white;
      left: 0;
      top: calc(100% + 5px);
      position: absolute;
      z-index: 1;
      padding: 10px 0;
    }
    .search-suggest-item {
      color: $dark;
      padding: 5px 20px;
      .type {
        color: #999999;
      }
      &:hover {
        background-color: #E4E4E4;
        cursor: pointer;
      }
    }
    button {
      cursor: pointer;
      font-size: 1.25em;
      font-weight: bold;
      color: $white;
      width: 190px;
      height: 100%;
      padding: 0 50px;
      background-color: $green;
      transition: .2s;
      &:hover {
        background-color: $green-hover;
      }
    }
    .search-icon {
      display: none;
    }
  }

  @media (max-width: 650px) {
    .search-box {
      height: 50px;
      input {
        width: 100%;
        padding-left: 30px;
      }
      button {
        display: none;
      }
      .search-icon {
        display: block;
        position: absolute;
        left: 5px;
        top: 50%;
        transform: translateY(-50%);
        height: 20px;
        width: 20px;
        img {
          object-fit: none;
        }
      }
    }
  }
</style>

<style lang="scss">
  .search-suggest-item .highlighted {
    font-weight: bold;
  }
</style>
