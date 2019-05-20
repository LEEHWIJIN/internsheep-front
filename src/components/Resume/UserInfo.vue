<template>
  <div class="row">
    <!-- 대제목 -->
    <div class="col-lg-12 text-center">
      <p class="subtitle">Profile</p>
      <h2 class="section-title">Edit Profile</h2>
    </div>
    <!-- 이력서 내용 -->
    <div class="col-lg-12 p-0">
      <form class="row" v-on:submit.prevent='submitResume'>
        <!-- <div class="col-lg-6">
          <input class="form-control mb-4" v-model="sName" placeholder="이름*">
        </div> -->
        <div class="col-lg-6">
          <!-- <input class="form-control mb-4" v-model="sEmail" placeholder="e-mail" readonly="readonly"> -->
          <input class="form-control mb-4" v-model="sEmail" placeholder="e-mail" >
        </div>
        <!-- <div class="col-lg-6">
          <input class="form-control mb-4" v-model="sNum" placeholder="학번*">
        </div> -->
        <div class="col-lg-6">
          <input class="form-control mb-4" v-model="sPhone" placeholder="전화번호*">
        </div>
        <div class="col-lg-6">
          <div class="apply-list  rounded-xl  bg-white mb-4">
              <h6 style="font-weight:bold">학년정보(현재 학기 기준)*</h6>

              <!--
              <input type="radio" id="jack" value="Jack" v-model="checkedNames">
              <label for="jack">3학년 1학기</label><br>
              <input type="radio" id="john" value="John" v-model="checkedNames">
              <label for="john">3학년 2학기</label><br>
              <input type="radio" id="mike" value="Mike" v-model="checkedNames">
              <label for="mike">4학년 1학기</label><br>
              -->
              <input class="inp-cbx" id="cbx1" value="3학년 1학기" type="radio" v-model="sGrade" style="display: none;">
              <label class="cbx" for="cbx1">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>3학년 1학기</span>
              </label><br>
              <input class="inp-cbx" id="cbx2" value="3학년 2학기" type="radio" v-model="sGrade" style="display: none;">
              <label class="cbx" for="cbx2">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>3학년 2학기</span>
              </label><br>
              <input class="inp-cbx" id="cbx3" value="4학년 1학기" type="radio" v-model="sGrade" style="display: none;">
              <label class="cbx" for="cbx3">
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
          <div class="apply-list  rounded-xl  bg-white mb-4">
              <h6 style="font-weight:bold">희망하는 현장실습 업무 분야(복수체크 가능)*</h6>
              <input class="inp-cbx" id="cbx4" value="SW 개발" type="radio" v-model="sHope" style="display: none;">
              <label class="cbx" for="cbx4">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>SW 개발</span>
              </label><br>
              <input class="inp-cbx" id="cbx5" value="데이터 분석" type="radio" v-model="sHope" style="display: none;">
              <label class="cbx" for="cbx5">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>데이터 분석</span>
              </label><br>
              <input class="inp-cbx" id="cbx6" value="SW 테스트 및 품질관리" type="radio" v-model="sHope" style="display: none;">
              <label class="cbx" for="cbx6">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>SW 테스트 및 품질관리</span>
              </label><br>
              <input class="inp-cbx" id="cbx7" value="IT시스템 운영" type="radio" v-model="sHope" style="display: none;">
              <label class="cbx" for="cbx7">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>IT시스템 운영</span>
              </label><br>
              <input class="inp-cbx" id="cbx8" value="마켓팅 혹은 기획" type="radio" v-model="sHope" style="display: none;">
              <label class="cbx" for="cbx8">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>마켓팅 혹은 기획</span>
              </label><br>
          </div>
        </div>
        <br>
        <div class="col-lg-6">
          <div class="apply-list  rounded-xl  bg-white mb-4">
              <h6 style="font-weight:bold">희망 실습기간 및 형태*</h6>
              <input class="inp-cbx" id="cbx9" value="8주" type="radio" v-model="sHopeTerm" style="display: none;">
              <label class="cbx" for="cbx9">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>8주</span>
              </label><br>
              <input class="inp-cbx" id="cbx10" value="12주 이상(장기)" type="radio" v-model="sHopeTerm" style="display: none;">
              <label class="cbx" for="cbx10">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>12주 이상(장기)</span>
              </label><br>
          </div>
        </div>
        <br>
        <div class="col-12 text-center">
          <button class="btn btn-primary" type="submit">다음</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
  export default{
      name: 'UserInfo',
      data() {
        return {
          sHope : [],
          sHopeTerm : [],
          sPhone:[],
          sEmail:[],
          user:{},
          sGrade : [],
        }
      },
      components: {
        // VBase,
      },
      beforeMount(){
        this.$http.get('http://106.10.46.121:10022/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
            //console.log(res.data.user);
            this.user = res.data.user;
        })
      },
      created(){

      },
      methods: {
        submitResume(){
          var data =[{
            sEmail: this.sEmail,
            sPhone : this.sPhone,
            sGrade : this.sGrade,
            sHopeTerm : this.sHopeTerm,
            sHope : this.sHope,
          }];
          this.$store.dispatch('resume/submit_userInfo', data);
          this.$store.dispatch('resume/setResumeState',1);
        },
      }
  }
</script>

<style scoped>
</style>
