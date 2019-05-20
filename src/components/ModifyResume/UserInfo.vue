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
          <input class="form-control mb-4" v-model="sEmail" placeholder="e-mail">
          <!-- <input class="form-control mb-4" v-model="sEmail" placeholder="e-mail" > -->
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
              <input class="inp-cbx" id="cbx1" value=" 3학년 1학기" type="radio" name="grade" style="display: none;" >

              <label class="cbx" for="cbx1">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>3학년 1학기</span>
              </label><br>
              <input class="inp-cbx" id="cbx2" name="grade" value="3학년 2학기" type="radio" style="display: none;">
              <label class="cbx" for="cbx2">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>3학년 2학기</span>
              </label><br>
              <input class="inp-cbx" id="cbx3" name="grade" value="4학년 1학기" type="radio" style="display: none;">
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
              <input class="inp-cbx" id="cbx4" value="SW 개발" name="hope" type="radio" style="display: none;">
              <label class="cbx" for="cbx4">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>SW 개발</span>
              </label><br>
              <input class="inp-cbx" id="cbx5" value="데이터 분석" name="hope" type="radio" style="display: none;">
              <label class="cbx" for="cbx5">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>데이터 분석</span>
              </label><br>
              <input class="inp-cbx" id="cbx6" value="SW 테스트 및 품질관리" name="hope" type="radio" style="display: none;">
              <label class="cbx" for="cbx6">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>SW 테스트 및 품질관리</span>
              </label><br>
              <input class="inp-cbx" id="cbx7" value="IT시스템 운영" type="radio" name="hope" style="display: none;">
              <label class="cbx" for="cbx7">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>IT시스템 운영</span>
              </label><br>
              <input class="inp-cbx" id="cbx8" value="마켓팅 혹은 기획" type="radio" name="hope" style="display: none;">
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
              <input class="inp-cbx" id="cbx9" value="8주" type="radio" name="hopeterm" style="display: none;">
              <label class="cbx" for="cbx9">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>8주</span>
              </label><br>
              <input class="inp-cbx" id="cbx10" value="12주 이상(장기)" name="hopeterm" type="radio" style="display: none;">
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
          <button class="btn btn-light" type="submit">다음</button>
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
      async beforeMount(){
        await this.$http.get('http://localhost:8888/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
            //console.log(res.data.user);
            this.user = res.data.user;
            return this.user
        });
        await this.$http.get('http://localhost:8888/std/mypage/watchResume',{params:{sLoginID : this.user.loginId}}).then(res =>{
            // console.log(res)
            this.sEmail = res.data.sEmail;
            this.sPhone = res.data.sPhone;
            var grade = res.data.sGrade;
            var hope = res.data.sHope;
            var hopeterm = res.data.sHopeTerm;
            var chkbox = document.getElementsByName('grade').length;
            var chkboxhp = document.getElementsByName('hope').length;
            var chkboxhpterm = document.getElementsByName('hopeterm').length;
            var docheck = [];
            for(var i=0;i<chkbox;i++){
              docheck.push(document.getElementsByName('grade')[i].value);
              if(grade==docheck[i]){
                document.getElementsByName('grade')[i].checked = true;
              }
            }
            docheck = [];
            for(var i=0;i<chkboxhp;i++){
              docheck.push(document.getElementsByName('hope')[i].value);
              if(hope==docheck[i]){
                document.getElementsByName('hope')[i].checked = true;
              }
            }
            docheck = [];
            for(var i=0;i<chkboxhpterm;i++){
              docheck.push(document.getElementsByName('hopeterm')[i].value);
              if(hopeterm==docheck[i]){
                document.getElementsByName('hopeterm')[i].checked = true;
              }
            }
            // if(res.data != false){
            //     // this.$store.dispatch('resume/setResumeState',4);
            // }
            // else this.$store.dispatch('resume/setResumeState',0);//맨 첫장
          });
      },
      created(){

      },
      methods: {
        submitResume(){
          var chkbox = document.getElementsByName('grade').length;
          var chkboxhp = document.getElementsByName('hope').length;
          var chkboxhpterm = document.getElementsByName('hopeterm').length;
          for(var i=0;i<chkbox;i++){
            if(document.getElementsByName('grade')[i].checked == true){
              this.sGrade = document.getElementsByName('grade')[i].value;
            };
          }
          for(var i=0;i<chkboxhp;i++){
            if(document.getElementsByName('hope')[i].checked == true){
              this.sHope = document.getElementsByName('hope')[i].value;
            };
          }
          for(var i=0;i<chkboxhpterm;i++){
            if(document.getElementsByName('hopeterm')[i].checked == true){
              this.sHopeTerm = document.getElementsByName('hopeterm')[i].value;
            };
          }
          var data =[{
            sEmail: this.sEmail,
            sPhone : this.sPhone,
            sGrade : this.sGrade,
            sHopeTerm : this.sHopeTerm,
            sHope : this.sHope,
          }];

          this.$store.dispatch('resume/submit_userInfo', data);
          this.$store.dispatch('resume/setResumeState',7);
        },
      }
  }
</script>

<style scoped>
</style>
