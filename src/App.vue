<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  //import Vue from 'vue';
  //import VResume from './components/Resume/Index.vue';
  //import Vtest from '../test/test.vue'
  export default{
    name: 'app',
    data() {
      return {
        user:{},
        auth : 0,
      }
    },
    components: {
        //VResume
    },
    created(){

    },
    methods: {
    }
  }
</script>

<style scoped>
#app {
 /* background-image: url('../public/images/background/banner.png'); */
}
</style>
