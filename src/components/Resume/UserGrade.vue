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
                    <input class="inp-cbx" id="cbx1" value="미수강" type="radio" v-model="computerprogramming" style="display: none;">
                    <label class="cbx" for="cbx1">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>미수강</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx2" value="C+ 및 이하" type="radio" v-model="computerprogramming" style="display: none;">
                    <label class="cbx" for="cbx2">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>C+ 및 이하</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx3" value="B+,B0" type="radio" v-model="computerprogramming" style="display: none;">
                    <label class="cbx" for="cbx3">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>B+,B0</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx4" value="A+,A0" type="radio" v-model="computerprogramming" style="display: none;">
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
                    <input class="inp-cbx" id="cbx5" value="미수강" type="radio" v-model="discretemath" style="display: none;">
                    <label class="cbx" for="cbx5">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>미수강</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx6" value="C+ 및 이하" type="radio" v-model="discretemath" style="display: none;">
                    <label class="cbx" for="cbx6">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>C+ 및 이하</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx7" value="B+,B0" type="radio" v-model="discretemath" style="display: none;">
                    <label class="cbx" for="cbx7">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>B+,B0</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx8" value="A+,A0" type="radio" v-model="discretemath" style="display: none;">
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
                    <input class="inp-cbx" id="cbx9" value="미수강" type="radio" v-model="datastructure" style="display: none;">
                    <label class="cbx" for="cbx9">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>미수강</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx10" value="C+ 및 이하" type="radio" v-model="datastructure" style="display: none;">
                    <label class="cbx" for="cbx10">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>C+ 및 이하</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx11" value="B+,B0" type="radio" v-model="datastructure" style="display: none;">
                    <label class="cbx" for="cbx11">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>B+,B0</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx12" value="A+,A0" type="radio" v-model="datastructure" style="display: none;">
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
                    <input class="inp-cbx" id="cbx13" value="미수강" type="radio" v-model="objectiveprogramming" style="display: none;">
                    <label class="cbx" for="cbx13">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>미수강</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx14" value="C+ 및 이하" type="radio" v-model="objectiveprogramming" style="display: none;">
                    <label class="cbx" for="cbx14">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>C+ 및 이하</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx15" value="B+,B0" type="radio" v-model="objectiveprogramming" style="display: none;">
                    <label class="cbx" for="cbx15">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>B+,B0</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx16" value="A+,A0" type="radio" v-model="objectiveprogramming" style="display: none;">
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
                    <input class="inp-cbx" id="cbx17" value="미수강" type="radio" v-model="computerstructure" style="display: none;">
                    <label class="cbx" for="cbx17">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>미수강</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx18" value="C+ 및 이하" type="radio" v-model="computerstructure" style="display: none;">
                    <label class="cbx" for="cbx18">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>C+ 및 이하</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx19" value="B+,B0" type="radio" v-model="computerstructure" style="display: none;">
                    <label class="cbx" for="cbx19">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>B+,B0</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx20" value="A+,A0" type="radio" v-model="computerstructure" style="display: none;">
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
                    <input class="inp-cbx" id="cbx21" value="미수강" type="radio" v-model="algorithm" style="display: none;">
                    <label class="cbx" for="cbx21">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>미수강</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx22" value="C+ 및 이하" type="radio" v-model="algorithm" style="display: none;">
                    <label class="cbx" for="cbx22">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>C+ 및 이하</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx23" value="B+,B0" type="radio" v-model="algorithm" style="display: none;">
                    <label class="cbx" for="cbx23">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>B+,B0</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx24" value="A+,A0" type="radio" v-model="algorithm" style="display: none;">
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
                    <input class="inp-cbx" id="cbx25" value="미수강" type="radio" v-model="systemprogramming" style="display: none;">
                    <label class="cbx" for="cbx25">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>미수강</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx26" value="C+ 및 이하" type="radio" v-model="systemprogramming" style="display: none;">
                    <label class="cbx" for="cbx26">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>C+ 및 이하</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx27" value="B+,B0" type="radio" v-model="systemprogramming" style="display: none;">
                    <label class="cbx" for="cbx27">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>B+,B0</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx28" value="A+,A0" type="radio" v-model="systemprogramming" style="display: none;">
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
                    <input class="inp-cbx" id="cbx29" value="미수강" type="radio" v-model="os" style="display: none;">
                    <label class="cbx" for="cbx29">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>미수강</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx30" value="C+ 및 이하" type="radio" v-model="os" style="display: none;">
                    <label class="cbx" for="cbx30">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>C+ 및 이하</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx31" value="B+,B0" type="radio" v-model="os" style="display: none;">
                    <label class="cbx" for="cbx31">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>B+,B0</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx32" value="A+,A0" type="radio" v-model="os" style="display: none;">
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
                    <input class="inp-cbx" id="cbx33" value="미수강" type="radio" v-model="database" style="display: none;">
                    <label class="cbx" for="cbx33">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>미수강</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx34" value="C+ 및 이하" type="radio" v-model="database" style="display: none;">
                    <label class="cbx" for="cbx34">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>C+ 및 이하</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx35" value="B+,B0" type="radio" v-model="database" style="display: none;">
                    <label class="cbx" for="cbx35">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>B+,B0</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx36" value="A+,A0" type="radio" v-model="database" style="display: none;">
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
                    <input class="inp-cbx" id="cbx37" value="미수강" type="radio" v-model="network" style="display: none;">
                    <label class="cbx" for="cbx37">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>미수강</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx38" value="C+ 및 이하" type="radio" v-model="network" style="display: none;">
                    <label class="cbx" for="cbx38">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>C+ 및 이하</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx39" value="B+,B0" type="radio" v-model="network" style="display: none;">
                    <label class="cbx" for="cbx39">
                        <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                        </span>
                        <span>B+,B0</span>
                    </label><br>
                    <input class="inp-cbx" id="cbx40" value="A+,A0" type="radio" v-model="network" style="display: none;">
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
                <button class="btn btn-light" type="submit">다음</button>
            </div>
        </form>
        <button class="btn btn-light mr-4" @click="before">이전</button>
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
    beforeMount(){
    this.$http.get('API_SERVER/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
        //console.log(res.data.user);
        this.user = res.data.user;
    })
    },
    created(){

    },
    methods: {
        submitResume(){
            if(this.computerprogramming.length==0){
                alert("전부 작성 해 주세요.")
                return;
            }
            if(this.discretemath.length==0){
                alert("전부 작성 해 주세요.")
                return;
            }
            if(this.datastructure.length==0){
                alert("전부 작성 해 주세요.")
                return;
            }
            if(this.objectiveprogramming.length==0){
                alert("전부 작성 해 주세요.")
                return;
            }
            if(this.computerstructure.length==0){
                alert("전부 작성 해 주세요.")
                return;
            }
            if(this.algorithm.length==0){
                alert("전부 작성 해 주세요.")
                return;
            }
            if(this.systemprogramming.length==0){
                alert("전부 작성 해 주세요.")
                return;
            }
            if(this.os.length==0){
                alert("전부 작성 해 주세요.")
                return;
            } 
            if(this.database.length==0){
                alert("전부 작성 해 주세요.")
                return;
            }
            if(this.network.length==0){
                alert("전부 작성 해 주세요.")
                return;
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
            this.$store.dispatch('resume/setResumeState',3);
        },
        before(){
            this.$store.dispatch('resume/setResumeState',1);
        },
    }
}
</script>

<style scoped>
</style>
