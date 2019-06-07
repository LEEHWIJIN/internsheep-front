<!-- 회원 정보 수정 페이지  -->
<template>
    <!-- 회원 정보 -->
    <div class="col-lg-8">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="text-right">
            <button class="btn btn-light btn-sm" @click="modifyProfile">수정하기</button>
          </div>
          <p class="subtitle">Profile</p>
          <h2 class="section-title">Read a Profile</h2>
        </div>
        <div class="col-lg-12 text-center p-0">
        <form class="row" v-on:submit.prevent='submitNotice' >
         <div class="col-lg-6">
            <input class="form-control mb-4" v-model="userData.sName" placeholder="이름" readonly="readonly">
          </div>
          <div class="col-lg-6">
            <input class="form-control mb-4" v-model="userData.sNum" placeholder="학번" readonly="readonly">
          </div>
        </form>
        </div>
      </div>
    </div>
</template>

<script>
import Const from '../../constant/constant';
  export default{
      name: 'ReadProfile',
      data() {
        return {
          sName:[],
          cManagerName:[],
          cLocation:[],
          cBenefit:[],
          userData : [],
        }
      },
      components: {
      },
      async created(){
        await this.$http.get('Const.API_SERVER/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
          this.user = res.data.user;
          return ;
        });
        await this.$http.get('Const.API_SERVER/std/mypage/showStudentInfo',{params:{sLoginID:this.user.loginId}}).then(res=>{
          this.userData=res.data[0];
        });
      },
      methods: {
        modifyProfile(){
          this.$store.dispatch('profile/setProfileState',1);
        },
      }
  }
</script>

<style scoped>
</style>
<!-- Main Stylesheet -->
<link href="css/style.css" rel="stylesheet">
