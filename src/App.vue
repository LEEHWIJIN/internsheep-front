<template>
  <div id="app">
    이력서 예시 입니다. 이런식으로 만들어 주시면 됩니다.
    2. build job 과 deploy job 나누기.
    <v-resume></v-resume>
  </div>
</template>


<script>
  //import Vue from 'vue';
  import VResume from './components/Resume/Index.vue';
  export default{
    name: 'app',
    data() {
      return {
       
      }
    },
    components: {
        VResume
    },
    created(){
        
    },
    methods: {
      
    }
  }
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
