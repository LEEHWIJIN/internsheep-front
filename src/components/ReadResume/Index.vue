<template>
  <section class="section section-lg-bottom bg-light">
    <v-base></v-base>
    <div class="container" id="resume">
        <div class="row">
          <!-- 카테고리란 -->
          <div class="col-lg-3">
            <v-category></v-category>
          </div>
          <!-- 공백 -->
          <div class="col-lg-1">
          </div>
          <!-- 이력서 정보 -->
          <div class="col-lg-8">

            <v-error v-if="$store.state.resume.resume_state==5"></v-error>
            <v-user-info v-else-if="$store.state.resume.resume_state==0" ></v-user-info>
            <v-user-eng v-else-if="$store.state.resume.resume_state==1"></v-user-eng>
            <v-user-grade v-else-if="$store.state.resume.resume_state==2"></v-user-grade>
            <v-user-s-w v-else-if="$store.state.resume.resume_state==3"></v-user-s-w>
            <v-modify-user-info v-else-if="$store.state.resume.resume_state==6"></v-modify-user-info>
            <v-modify-user-eng v-else-if="$store.state.resume.resume_state==7"></v-modify-user-eng>
            <v-modify-user-grade v-else-if="$store.state.resume.resume_state==8"></v-modify-user-grade>
            <v-modify-user-s-w v-else-if="$store.state.resume.resume_state==9"></v-modify-user-s-w>
          </div>
          수정 전용 정보
          <div class="col-lg-8">
          </div>
        </div>
    </div>
    <v-footer></v-footer>
  </section>
</template>


<script>
//import Vue from 'vue';
 import VBase from '../Base/Index.vue'
 import VFooter from '../Footer/Index.vue'
 import VCategory from '../Category/Index.vue'
 import VUserInfo from './UserInfo.vue'
 import VUserEng from './UserEng.vue'
 import VUserGrade from './UserGrade.vue'
 import VUserSW from './UserSW.vue'
 import VModifyUserInfo from '../ModifyResume/UserInfo.vue'
 import VModifyUserEng from '../ModifyResume/UserEng.vue'
 import VModifyUserGrade from '../ModifyResume/UserGrade.vue'
 import VModifyUserSW from '../ModifyResume/UserSW.vue'
 import VError from './Error.vue'
//  import { mapActions, mapGetters } from "vuex";
  export default{
      name: 'Resume',
      data() {
        return {
          user : {},
        }
      },
      components: {
        VBase,
        VFooter,
        VCategory,
        VUserInfo,
        VUserEng,
        VUserGrade,
        VUserSW,
        VModifyUserInfo,
        VModifyUserEng,
        VModifyUserGrade,
        VModifyUserSW,
        VError,
      },
      async created(){
        await this.$http.get('http://10.41.83.72:8888/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
          this.user = res.data.user;
          this.getResume(this.user.loginId);
        });
      },
      // created(){

      // },
      methods: {
        getResume(loginId){
          this.$http.get('http://10.41.83.72:8888/std/mypage/watchResume',{params:{sLoginID : loginId}}).then(res =>{
            if(res.data != false){//resume가 있을때 읽기전용
                  this.$store.dispatch('resume/setResumeState',0);
            }
            else this.$store.dispatch('resume/setResumeState',5);
          });

        },
        // submitResume(){
        //   this.$http.post('http://10.41.83.72:8888/std/mypage/resume',{sNum:this.sNum,sName: this.sName}).then((response) => {
        //       this.sName = "";
        //       this.sNum="";
        //     })
        // },
      }
  }
</script>

<style scoped>
.section {
  padding-top: 130px;
  padding-bottom: 0px;
}

.container {
  padding-bottom: 50px;
}
</style>
