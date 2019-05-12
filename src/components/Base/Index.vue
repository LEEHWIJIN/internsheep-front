<template>
  <div id="base">
    <!-- navigation -->
      <div class="naviagtion fixed-top transition">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-dark p-0">
            <!-- <a class="navbar-brand p-0" href="index.html"><img src="images/logo/logo.png" alt="Agico"></a> -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation"
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
      
            <div class="collapse navbar-collapse text-center" id="navigation">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle text-white active text-capitalize" href="#"  data-toggle="dropdown"
                  aria-haspopup="true" aria-expan
                  ded="false" @click="goHome()">Home</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item text-color" href="homepage2.html">Homepage 2</a>
                    <a class="dropdown-item text-color" href="homepage3.html">Homepage 3</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white text-capitalize" href="about.html">about</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white text-capitalize" href="services.html">services</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link text-white text-capitalize dropdown-toggle" href="#" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">pages</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item text-color" href="team.html">Our Team</a>
                    <a class="dropdown-item text-color" href="pricing.html">Our Pricing</a>
                    <a class="dropdown-item text-color" href="career.html">Our Career</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white text-capitalize" href="blog.html">blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white text-capitalize" href="contact.html">contact</a>
                </li>
                <li v-if="auth!=0" class="nav-item dropdown">
                  <a class="nav-link text-white text-capitalize dropdown-toggle" href="#" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">{{user.name}}</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item text-color" href="#" @click="goResume">이력서 관리</a>
                    <a class="dropdown-item text-color" href="#" @click="goApplyStatus">지원 현황</a>
                    <a class="dropdown-item text-color" href="#" @click="goReportreview">보고서 및 후기관리</a>
                    <a class="dropdown-item text-color" href="team.html">찜한 기업 목록</a>
                    <a class="dropdown-item text-color" href="pricing.html">회원 정보 수정</a>
                    <a class="dropdown-item text-color" href="career.html">보고서 및 후기관리</a>
                  </div>
                </li>
              </ul>
              <a v-if="auth == 0" href="#" class="btn btn-outline-primary text-white ml-3" @click="goLogin">log in</a>
              <button v-if="auth !=0" class="btn btn-outline-primary text-white ml-3" @click="logout">log out</button>
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
                this.auth=0;
                return;
              }
              this.user={};
              this.user = res.data.user;
              this.auth = 1;
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
        goApplyStatus(){
            this.$router.push({name: "Applystatus"})
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

    }
  }
</script>

<style scoped>
#app {
 /* background-image: url('../public/images/background/banner.png'); */
}
</style>