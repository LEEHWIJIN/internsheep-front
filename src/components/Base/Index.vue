<template>
  <div id="base">
    <!-- navigation -->
      <div class="naviagtion fixed-top transition">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-dark p-1">
            <!-- <a class="navbar-brand p-0" href="index.html"><img src="images/logo/logo.png" alt="Agico"></a> -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation"
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse text-center" id="navigation">
              <ul class="navbar-nav mr-auto">
                <!-- <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle text-white active text-capitalize" href="#"  data-toggle="dropdown"
                  aria-haspopup="true" aria-expan
                  ded="false" @click="goHome()">Home</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item text-color" href="homepage2.html">Homepage 2</a>
                    <a class="dropdown-item text-color" href="homepage3.html">Homepage 3</a>
                  </div>
                </li> -->
                <li class="nav-item">
                  <a class="nav-link text-white text-capitalize" href="#" @click="goApplyList">기업 목록</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white text-capitalize" href="#">공지 사항</a>

                </li>
              </ul>

              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a v-if="auth == 2" class="name nav-link text-white text-capitalize" href="#" @click="goAdminPage">관리자페이지</a>
                </li>
                <li v-if="auth!=0" class="nav-item dropdown">
                  <a class="name nav-link text-white text-capitalize dropdown-toggle" href="#" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false"><i class="fas fa-user-graduate mr-1"></i> {{user.name}}님</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item text-color" href="#" @click="goResume">이력서 관리</a>
                    <a class="dropdown-item text-color" href="#" @click="goApplyStatus">지원 현황</a>
                    <a class="dropdown-item text-color" href="#" @click="goReportreview">보고서 및 후기관리</a>
                    <a class="dropdown-item text-color" href="team.html">찜한 기업 목록</a>
                    <a class="dropdown-item text-color" href="pricing.html">회원 정보 수정</a>
                  </div>
                </li>
                <a v-if="auth == 0" href="#" class="btn btn-outline-primary text-white ml-3" @click="goLogin">log in</a>
                <button v-if="auth !=0" class="btn btn-outline-primary text-white ml-3" @click="logout">log out</button>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <!-- nav part end -->
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
        if(localStorage.token){
          this.$http.get('http://localhost:8888/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
              if(res.data.result==1){
                localStorage.removeItem('token')
                this.user={};
                this.auth=0;//로그인이 안 되어있는 상태
                return;
              }
              this.user={};
              this.user = res.data.user;
              if(this.user.loginId=="admin1234"){
                this.auth = 2;//admin인 상태
                return;
              }
              this.auth = 1;//로그인이 되어있는 상태

          })
        }
        else{
          this.user={};
          this.auth=0;
        }
    },
    beforeMount(){

    },
    methods: {
        goResume(){
        this.$router.push({name: "Resume"})
        },
        goHome(){
            this.$router.push({name: "Home"})
        },
        goApplyStatus(){
            this.$router.push({name: "Applystatus"})
        },
        goApplyList(){
            this.$router.push({name: "Apply"})
        },
        goReportreview(){
            this.$router.push({name: "Reportreview"})
        },
        goLogin(){
            this.$router.push({name: "login"})
        },
        logout(){
        localStorage.removeItem('token')
        this.auth = 0;
        this.$router.push('login')
        },
        goAdminPage(){
          this.$router.push({name: "Admin"})
        },
    }
  }
</script>

<style>
.naviagtion {
  background: linear-gradient(80deg, #0030cc 0%, #00a4db 100%);
  padding: 10px 0;
}
.naviagtion.nav-bg {
  background: linear-gradient(80deg, #0030cc 0%, #00a4db 100%);
  padding: 1px 0;
}

.ul{
   list-style:none;
   padding-left:0px;
}
</style>
