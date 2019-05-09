<template>
  <div id="app">
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
                <li class="nav-item">
                  <a class="nav-link text-white text-capitalize" href="blog.html">공지사항</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white text-capitalize" href="contact.html">기업목록</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link text-white text-capitalize dropdown-toggle" href="#" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">이휘진</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item text-color" href="#"><router-link :to="{name: 'Resume'}">이력서 관리</router-link></a>
                    <a class="dropdown-item text-color" href="#"><router-link :to="{name: 'Applystatus'}">지원 현황</router-link></a>
                    <a class="dropdown-item text-color" href="#"><router-link :to="{name: 'Reportreview'}">보고서 및 후기관리</router-link></a>
                    <a class="dropdown-item text-color" href="team.html">찜한 기업 목록</a>
                    <a class="dropdown-item text-color" href="pricing.html">회원 정보 수정</a>
                    <a class="dropdown-item text-color" href="career.html">보고서 및 후기관리</a>
                  </div>
                </li>
              </ul>
              <!-- <a href="#" class="btn btn-outline-primary text-white ml-3">sign up</a> -->
            </div>
          </nav>
        </div>
      </div>
      <!-- nav part end -->
      <router-view/>

      <!-- banner -->
      <!-- <div class="hero-area bg-cover">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-lg-6 pl-lg-0 text-center text-lg-left">
              <h1 class="text-white position-relative">Build Your Business Together<span class="watermark">Build</span></h1>
              <p class="text-white pt-2 pb-3">Cupidatat non proident sunt culpa qui officia deserunt mollit <br> anim idest
                laborum sed ut perspiciatis.</p>
              <a href="#" class="btn btn-primary">Get Agico</a>
            </div>
            <div class="col-lg-5 pl-lg-0 pt-5 pt-lg-0 text-lg-right text-center">
              <img src="images/banner/banner-1.png" class="img-fluid" alt="">
            </div>
          </div>
        </div>
      </div> -->
      <!-- /banner -->

    <!-- 이력서 예시 입니다. 이런식으로 만들어 주시면 됩니다. 테스트 커밋
    2. build job 과 deploy job 나누기.
    -->
    <!-- <v-resume></v-resume> -->

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

      }
    },
    components: {
        //VResume
    },
    created(){

    },
    methods: {
      goResume(){
        this.$router.push({name: "Resume"})
      },
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
