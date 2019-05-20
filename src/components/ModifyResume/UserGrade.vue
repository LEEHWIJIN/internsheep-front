<template>
  <div class="row">
    <!-- 대제목 -->
    <div class="col-lg-12 text-center">
      <p class="subtitle">Grade</p>
      <h2 class="section-title mb-2">주요 전공과목 학습 성취도</h2>
      <h5 class="mb-4">다음 과목들에 대해 본인의 학점을 체크해 주세요.</h5>
    </div>
    <!-- 이력서 내용 -->
    <div class="col-lg-12 p-0">
        <form class="row" v-on:submit.prevent='submitResume'>
            <div class="col-lg-6">
                <div class="apply-list  rounded-xl  bg-white mb-4">
                    <h6 style="font-weight:bold">컴퓨터프로그래밍</h6>
                    <input class="inp-cbx" id="cbx1" value="미수강" type="radio" name="programming" style="display: none;">
                    <label class="cbx" for="cbx1">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>미수강</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx2" value="C+ 및 이하" type="radio" name="programming" style="display: none;">
                    <label class="cbx" for="cbx2">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>C+ 및 이하</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx3" value="B+,B0" type="radio" name="programming" style="display: none;">
                    <label class="cbx" for="cbx3">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>B+,B0</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx4" value="A+,A0" type="radio" name="programming" style="display: none;">
                    <label class="cbx" for="cbx4">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>A+,A0</span>
                    </label><br>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="apply-list  rounded-xl  bg-white mb-4">
                    <h6 style="font-weight:bold">이산수학</h6>
                    <input class="inp-cbx" id="cbx5" value="미수강" type="radio" name="math" style="display: none;">
                    <label class="cbx" for="cbx5">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>미수강</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx6" value="C+ 및 이하" type="radio" name="math" style="display: none;">
                    <label class="cbx" for="cbx6">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>C+ 및 이하</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx7" value="B+,B0" type="radio" name="math" style="display: none;">
                    <label class="cbx" for="cbx7">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>B+,B0</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx8" value="A+,A0" type="radio" name="math" style="display: none;">
                    <label class="cbx" for="cbx8">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>A+,A0</span>
                    </label><br>
                </div>
            </div>
            <br>
            <div class="col-lg-6">
                <div class="apply-list  rounded-xl  bg-white mb-4">
                    <h6 style="font-weight:bold">자료구조 및 실습</h6>
                    <input class="inp-cbx" id="cbx9" value="미수강" type="radio" name="structure" style="display: none;">
                    <label class="cbx" for="cbx9">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>미수강</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx10" value="C+ 및 이하" type="radio" name="structure" style="display: none;">
                    <label class="cbx" for="cbx10">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>C+ 및 이하</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx11" value="B+,B0" type="radio" name="structure" style="display: none;">
                    <label class="cbx" for="cbx11">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>B+,B0</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx12" value="A+,A0" type="radio" name="structure" style="display: none;">
                    <label class="cbx" for="cbx12">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>A+,A0</span>
                    </label><br>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="apply-list  rounded-xl  bg-white mb-4">
                    <h6 style="font-weight:bold">객체지향프로그래밍</h6>
                    <input class="inp-cbx" id="cbx13" value="미수강" type="radio" name="objective" style="display: none;">
                    <label class="cbx" for="cbx13">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>미수강</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx14" value="C+ 및 이하" type="radio" name="objective" style="display: none;">
                    <label class="cbx" for="cbx14">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>C+ 및 이하</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx15" value="B+,B0" type="radio" name="objective" style="display: none;">
                    <label class="cbx" for="cbx15">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>B+,B0</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx16" value="A+,A0" type="radio" name="objective" style="display: none;">
                    <label class="cbx" for="cbx16">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>A+,A0</span>
                    </label><br>
                </div>
            </div>
            <br>
            <div class="col-lg-6">
                <div class="apply-list  rounded-xl  bg-white mb-4">
                    <h6 style="font-weight:bold">컴퓨터구조</h6>
                    <input class="inp-cbx" id="cbx17" value="미수강" type="radio" name="cs" style="display: none;">
                    <label class="cbx" for="cbx17">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>미수강</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx18" value="C+ 및 이하" type="radio" name="cs" style="display: none;">
                    <label class="cbx" for="cbx18">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>C+ 및 이하</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx19" value="B+,B0" type="radio" name="cs" style="display: none;">
                    <label class="cbx" for="cbx19">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>B+,B0</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx20" value="A+,A0" type="radio" name="cs" style="display: none;">
                    <label class="cbx" for="cbx20">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>A+,A0</span>
                    </label><br>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="apply-list  rounded-xl  bg-white mb-4">
                    <h6 style="font-weight:bold">알고리즘</h6>
                    <input class="inp-cbx" id="cbx21" value="미수강" type="radio" name="al" style="display: none;">
                    <label class="cbx" for="cbx21">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>미수강</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx22" value="C+ 및 이하" type="radio" name="al" style="display: none;">
                    <label class="cbx" for="cbx22">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>C+ 및 이하</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx23" value="B+,B0" type="radio" name="al" style="display: none;">
                    <label class="cbx" for="cbx23">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>B+,B0</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx24" value="A+,A0" type="radio" name="al" style="display: none;">
                    <label class="cbx" for="cbx24">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>A+,A0</span>
                    </label><br>
                </div>
            </div>
            <br>
            <div class="col-lg-6">
                <div class="apply-list  rounded-xl  bg-white mb-4">
                    <h6 style="font-weight:bold">시스템프로그래밍</h6>
                    <input class="inp-cbx" id="cbx25" value="미수강" type="radio" name="system" style="display: none;">
                    <label class="cbx" for="cbx25">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>미수강</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx26" value="C+ 및 이하" type="radio" name="system" style="display: none;">
                    <label class="cbx" for="cbx26">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>C+ 및 이하</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx27" value="B+,B0" type="radio" name="system" style="display: none;">
                    <label class="cbx" for="cbx27">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>B+,B0</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx28" value="A+,A0" type="radio" name="system" style="display: none;">
                    <label class="cbx" for="cbx28">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>A+,A0</span>
                    </label><br>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="apply-list  rounded-xl  bg-white mb-4">
                    <h6 style="font-weight:bold">운영체제</h6>
                    <input class="inp-cbx" id="cbx29" value="미수강" type="radio" name="operate" style="display: none;">
                    <label class="cbx" for="cbx29">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>미수강</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx30" value="C+ 및 이하" type="radio" name="operate" style="display: none;">
                    <label class="cbx" for="cbx30">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>C+ 및 이하</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx31" value="B+,B0" type="radio" name="operate" style="display: none;">
                    <label class="cbx" for="cbx31">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>B+,B0</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx32" value="A+,A0" type="radio" name="operate" style="display: none;">
                    <label class="cbx" for="cbx32">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>A+,A0</span>
                    </label><br>
                </div>
            </div>
            <br>
            <div class="col-lg-6">
                <div class="apply-list  rounded-xl  bg-white mb-4">
                    <h6 style="font-weight:bold">데이터베이스</h6>
                    <input class="inp-cbx" id="cbx33" value="미수강" type="radio" name="db" style="display: none;">
                    <label class="cbx" for="cbx33">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>미수강</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx34" value="C+ 및 이하" type="radio" name="db" style="display: none;">
                    <label class="cbx" for="cbx34">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>C+ 및 이하</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx35" value="B+,B0" type="radio" name="db" style="display: none;">
                    <label class="cbx" for="cbx35">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>B+,B0</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx36" value="A+,A0" type="radio" name="db" style="display: none;">
                    <label class="cbx" for="cbx36">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>A+,A0</span>
                    </label><br>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="apply-list  rounded-xl  bg-white mb-4">
                    <h6 style="font-weight:bold">컴퓨터네트워크</h6>
                    <input class="inp-cbx" id="cbx37" value="미수강" type="radio" name="nt" style="display: none;">
                    <label class="cbx" for="cbx37">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>미수강</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx38" value="C+ 및 이하" type="radio" name="nt" style="display: none;">
                    <label class="cbx" for="cbx38">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>C+ 및 이하</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx39" value="B+,B0" type="radio" name="nt" style="display: none;">
                    <label class="cbx" for="cbx39">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>B+,B0</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx40" value="A+,A0" type="radio" name="nt" style="display: none;">
                    <label class="cbx" for="cbx40">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>A+,A0</span>
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
      name: 'UserGrade',
      data() {
        return {
          user:{},
          computerprogramming : [],
          discretemath : [],
          datastructure : [],
          objectiveprogramming : [],
          computerstructure : [],
          algorithm : [],
          systemprogramming : [],
          os : [],
          database : [],
          network : [],
        }
      },
      components: {
        // VBase,
      },
      async beforeMount(){
        await this.$http.get('http://localhost:8888/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
            //console.log(res.data.user);
            this.user = res.data.user;
            return this.user;
        });
        await this.$http.get('http://localhost:8888/std/mypage/watchResume',{params:{sLoginID : this.user.loginId}}).then(res =>{
            var sScore = JSON.parse(res.data.sScore);
            var computerprogramming = sScore.computerprogramming;
            var discretemath = sScore.discretemath;
            var datastructure = sScore.datastructure;
            var objectiveprogramming = sScore.objectiveprogramming;
            var computerstructure = sScore.computerstructure;
            var algorithm = sScore.algorithm;
            var systemprogramming = sScore.systemprogramming;
            var os = sScore.os;
            var database = sScore.database;
            var network = sScore.network;

            var chkcompro = document.getElementsByName('programming').length;
            var chkcommat = document.getElementsByName('math').length;
            var chkcomstr = document.getElementsByName('structure').length;
            var chkcomobj = document.getElementsByName('objective').length;
            var chkcomcs = document.getElementsByName('cs').length;
            var chkcomal = document.getElementsByName('al').length;
            var chkcomsystem = document.getElementsByName('system').length;
            var chkcomoperate = document.getElementsByName('operate').length;
            var chkcomdb = document.getElementsByName('db').length;
            var chkcomnt = document.getElementsByName('nt').length;
            var docheck = [];
            for(var i=0;i<chkcompro;i++){
              docheck.push(document.getElementsByName('programming')[i].value);
              if(computerprogramming==docheck[i]){
                document.getElementsByName('programming')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkcommat;i++){
              docheck.push(document.getElementsByName('math')[i].value);
              if(discretemath==docheck[i]){
                document.getElementsByName('math')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkcomstr;i++){
              docheck.push(document.getElementsByName('structure')[i].value);
              if(datastructure==docheck[i]){
                document.getElementsByName('structure')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkcomobj;i++){
              docheck.push(document.getElementsByName('objective')[i].value);
              if(objectiveprogramming==docheck[i]){
                document.getElementsByName('objective')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkcomcs;i++){
              docheck.push(document.getElementsByName('cs')[i].value);
              if(computerstructure==docheck[i]){
                document.getElementsByName('cs')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkcomal;i++){
              docheck.push(document.getElementsByName('al')[i].value);
              if(algorithm==docheck[i]){
                document.getElementsByName('al')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkcomsystem;i++){
              docheck.push(document.getElementsByName('system')[i].value);
              if(systemprogramming==docheck[i]){
                document.getElementsByName('system')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkcomoperate;i++){
              docheck.push(document.getElementsByName('operate')[i].value);
              if(os==docheck[i]){
                document.getElementsByName('operate')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkcomdb;i++){
              docheck.push(document.getElementsByName('db')[i].value);
              if(database==docheck[i]){
                document.getElementsByName('db')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkcomnt;i++){
              docheck.push(document.getElementsByName('nt')[i].value);
              if(network==docheck[i]){
                document.getElementsByName('nt')[i].checked = true;
              }
            };
          });
      },
      created(){

      },
      methods: {
        submitResume(){
            var chklen = document.getElementsByName('programming').length;
            for(var i=0;i<chklen;i++){
                if(document.getElementsByName('programming')[i].checked == true){
                    this.computerprogramming = document.getElementsByName('programming')[i].value;
                };
            }
            for(var i=0;i<chklen;i++){
                if(document.getElementsByName('math')[i].checked == true){
                    this.discretemath = document.getElementsByName('math')[i].value;
                };
            }
            for(var i=0;i<chklen;i++){
                if(document.getElementsByName('structure')[i].checked == true){
                    this.datastructure = document.getElementsByName('structure')[i].value;
                };
            }
            for(var i=0;i<chklen;i++){
                if(document.getElementsByName('objective')[i].checked == true){
                    this.objectiveprogramming = document.getElementsByName('objective')[i].value;
                };
            }
            for(var i=0;i<chklen;i++){
                if(document.getElementsByName('cs')[i].checked == true){
                    this.computerstructure = document.getElementsByName('cs')[i].value;
                };
            }
            for(var i=0;i<chklen;i++){
                if(document.getElementsByName('al')[i].checked == true){
                    this.algorithm = document.getElementsByName('al')[i].value;
                };
            }
            for(var i=0;i<chklen;i++){
                if(document.getElementsByName('system')[i].checked == true){
                    this.systemprogramming = document.getElementsByName('system')[i].value;
                };
            }
            for(var i=0;i<chklen;i++){
                if(document.getElementsByName('operate')[i].checked == true){
                    this.os = document.getElementsByName('operate')[i].value;
                };
            }
            for(var i=0;i<chklen;i++){
                 if(document.getElementsByName('db')[i].checked == true){
                    this.database = document.getElementsByName('db')[i].value;
                };
            }
            for(var i=0;i<chklen;i++){
                if(document.getElementsByName('nt')[i].checked == true){
                    this.network = document.getElementsByName('nt')[i].value;
                };
            }

            var data =[{
                computerprogramming : this.computerprogramming,
                discretemath : this.discretemath,
                datastructure : this.datastructure,
                objectiveprogramming : this.objectiveprogramming,
                computerstructure : this.computerstructure,
                algorithm : this.algorithm,
                systemprogramming : this.systemprogramming,
                os : this.os,
                database : this.database,
                network : this.network,
            }];
            this.$store.dispatch('resume/submit_userGrade', data);
            this.$store.dispatch('resume/setResumeState',9);
        },
      }
  }
</script>

<style scoped>
</style>
