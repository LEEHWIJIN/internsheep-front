<template>
<section class="section section-lg-bottom bg-light">
  <div class="container" id="resume">
    <div class="row">
      <div class="col-lg-12 text-center">
        <p class="subtitle">Notice</p>
        <h2 class="section-title">Write a Notice</h2>
      </div>
    <div class="col-lg-12 p-0">
      <form class="row" v-on:submit.prevent='submitResume'>
        <div class="col-lg-6">
          <input class="form-control mb-4" v-model="sName" placeholder="이름*">
        </div>
        <div class="col-lg-6">
          <input class="form-control mb-4" v-model="email" placeholder="e-mail">
        </div>
        <div class="col-lg-6">
          <input class="form-control mb-4" v-model="sNum" placeholder="학번*">
        </div>
        <div class="col-lg-6">
          <input class="form-control mb-4" v-model="email" placeholder="전화번호*">
        </div>
        <div class="col-lg-6">
          <div class="apply-list  rounded-xl  bg-white mb-4">
              <h6 style="font-weight:bold">학년정보(현재 학기 기준)*</h6>
              <!--
              <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
              <label for="jack">3학년 1학기</label><br>
              <input type="checkbox" id="john" value="John" v-model="checkedNames">
              <label for="john">3학년 2학기</label><br>
              <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
              <label for="mike">4학년 1학기</label><br>
              -->
              <input class="inp-cbx" id="cbx" value="1" type="checkbox" v-model="checkedNames3" style="display: none;">
              <label class="cbx" for="cbx">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>3학년 1학기</span>
              </label><br>
              <input class="inp-cbx" id="cbx" value="1" type="checkbox" v-model="checkedNames3" style="display: none;">
              <label class="cbx" for="cbx">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>3학년 2학기</span>
              </label><br>
              <input class="inp-cbx" id="cbx" value="1" type="checkbox" v-model="checkedNames3" style="display: none;">
              <label class="cbx" for="cbx">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>4학년 1학기</span>
              </label><br>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="apply-list rounded-xl  bg-white mb-4">
            <h6 style="font-weight:bold">소속학과*</h6>
            <!--
            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames0">
            <label for="jack">소프트웨어학과</label><br>
            <input type="checkbox" id="john" value="John" v-model="checkedNames0">
            <label for="john">ICT융합전공</label><br>
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames0">
            <label for="mike">기타</label><br>
            -->
            <input class="inp-cbx" id="cbx" value="1" type="checkbox" v-model="checkedNames3" style="display: none;">
            <label class="cbx" for="cbx">
              <span>
                <svg width="12px" height="10px" viewbox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
              <span>소프트웨어학과</span>
            </label><br>
            <input class="inp-cbx" id="cbx" value="1" type="checkbox" v-model="checkedNames3" style="display: none;">
            <label class="cbx" for="cbx">
              <span>
                <svg width="12px" height="10px" viewbox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
              <span>ICT융합전공</span>
            </label><br>
            <input class="inp-cbx" id="cbx" value="1" type="checkbox" v-model="checkedNames3" style="display: none;">
            <label class="cbx" for="cbx">
              <span>
                <svg width="12px" height="10px" viewbox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
              <span>기타</span>
            </label><br>

          </div>
        </div>
        <br>
        <div class="col-12 text-center">
          <button class="btn btn-primary" type="submit">이력서 저장하기</button>
        </div>
    </form>
    </div>
    </div>
  </div>
</section>
</template>


<script>
//import Vue from 'vue';
  export default{
      name: 'Resume',
      data() {
        return {
          checkedNames:[],
          sName:[],
          sNum:[],
          email:[],
        }
      },
      components: {

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
