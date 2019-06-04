<!-- 회원 정보 수정 페이지  -->
<template>
<section class="section section-lg-bottom bg-light">
  <div  class="container" id="modifyProfile">
    <!-- 회원 정보 -->
    <div class="col-lg-8">
      <div class="row">
        <div class="col-lg-12 text-center">
          <p class="subtitle">Profile</p>
          <h2 class="section-title">Modify a Profile</h2>
        </div>
        <div class="col-lg-12 text-center p-0">
        <form class="row" v-on:submit.prevent='submitProfile' >
          <div class="col-lg-6">
            <input class="form-control mb-4" v-model="userData.sName" placeholder="이름">
          </div>
          <div class="col-lg-6">
            <input class="form-control mb-4" v-model="userData.sNum" placeholder="학번">
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submitProfile">Submit Now</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
  export default{
      name: 'ModifyProfile',
      data() {
        return {
          userData:[],
        }
      },
      components: {
      },
      async created(){
        await this.$http.get('http://localhost:8888/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
          this.user = res.data.user;
          return ;
        });
        await this.$http.get('http://localhost:8888/std/mypage/showStudentInfo',{params:{sLoginID:this.user.loginId}}).then(res=>{
          return this.userData=res.data[0];
        })
      },
      methods: {
        submitProfile(){
          var data = {
            sName : this.userData.sName,
            sNum : this.userData.sNum,
          };
          this.$http.post('http://localhost:8888/std/mypage/modifyStudentInfo',{sLoginID:this.user.loginId,data:data}).then((response) => {
            if(response.data==1){
              alert("성공적으로 수정 되었습니다.");
              this.$store.dispatch('profile/setProfileState',0);
            }   
          })
        },
      }
  }
</script>

<style scoped>
</style>
<!-- Main Stylesheet -->
<link href="css/style.css" rel="stylesheet">
