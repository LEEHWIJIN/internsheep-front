<template>
  <div id="resumeIndex">
    <v-base></v-base>
    <v-user-info v-if="$store.state.resume.resume_state==0"></v-user-info>
    
    
  </div>
</template>


<script>
//import Vue from 'vue';
 import VBase from '../Base/Index.vue'
 import VUserInfo from './UserInfo.vue'
  export default{
      name: 'Resume',
      data() {
        return {
          checkedNames:[],
          sName:[],
          sNum:[],
          email:[],
          user:{},
        }
      },
      components: {
        VBase,
        VUserInfo,
      },
      beforeMount(){
        this.$http.get('http://localhost:8888/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
            //console.log(res.data.user);
            this.user = res.data.user;
        });
        this.$store.dispatch('resume/setResumeState',0);//맨 첫장
        },
      created(){
        
      },
      methods: {
        submitResume(){
          this.$http.post('http://localhost:8888/std/mypage/resume',{sNum:this.sNum,sName: this.sName}).then((response) => {
              this.sName = "";
              this.sNum="";
            })
        },
      }
  }
</script>

<style scoped>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */


</style>
