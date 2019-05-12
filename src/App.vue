<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    name: 'app',
    data() {
      return {
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
.naviagtion {
  background: linear-gradient(80deg, #0030cc 0%, #00a4db 100%);
  padding: 15px 0;
}
</style>
