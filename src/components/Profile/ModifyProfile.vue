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
          <div>비밀번호 변경을 원하시면 작성해주세요</div><br>
          <div class="col-lg-6">
            현재 비밀번호 : <input class="form-control mb-4" type="password" placeholder="현재 비밀번호" v-model="presentPw">
          </div>
          <div class="col-lg-6">
            변경하실 비밀번호 : <input class="form-control mb-4" type="password" placeholder="변경하실 비밀번호" v-model="changepw">
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
          presentPw:[],
          changepw:[],
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
          if(this.presentPw.length!=0&&this.changepw.length!=0){
              this.$http.post('http://localhost:8888/auth/std/changepw', {presentpw: this.presentPw, changepw: this.changepw, sLoginID: this.user.loginId}).then((res)=>{
                if(res.data.result == 1){
                  alert("현재 비밀번호가 틀렸습니다.")
                  return;
                }
                else if(res.data.result == 2){
                  alert("비밀번호가 성공적으로 변경되었습니다.");
                  this.submitData();
                  return ;
                }
            })
          }
          else if(this.presentPw.length==0&&this.changepw.length==0){//비밀번호 변경할 것이 없는 경우
            this.submitData();
          }
          else{//비밀번호 변경을 작성안한경우
            alert("비밀번호 변경 칸을 전부 채워주세요");
            return;
          }
          
        },
        submitData(){
          var data = {
              sName : this.userData.sName,
              sNum : this.userData.sNum,
            };
          this.$http.post('http://localhost:8888/std/mypage/modifyStudentInfo',{sLoginID:this.user.loginId,data:data}).then((response) => {
            if(response.data==1){
              alert("성공적으로 수정 되었습니다.");
              this.$store.dispatch('profile/setProfileState',0);
            }   
          });
        }
      }
  }
</script>

<style scoped>
</style>
<!-- Main Stylesheet -->
<link href="css/style.css" rel="stylesheet">
