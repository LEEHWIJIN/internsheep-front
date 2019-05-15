<template>
    <section class="section section-lg-bottom bg-light">
        <div class="container" id="userEng">
            <div class="row">
            <!-- 카테고리란 -->
            <div class="col-lg-3">
                <div class="rounded-sm shadow bg-white pb-4">
                    <div class="widget">
                        <h4>Category</h4>
                        <ul class="list-styled list-bordered">
                        <li><a class="text-color d-block py-3" href="blog-details.html">이력서 관리</a></li>
                        <li><a class="text-color d-block py-3" href="blog-details.html">지원 현황</a></li>
                        <li><a class="text-color d-block py-3" href="blog-details.html">보고서 및 후기관리</a></li>
                        <li><a class="text-color d-block py-3" href="blog-details.html">찜한 기업 목록</a></li>
                        <li><a class="text-color d-block py-3" href="blog-details.html">보고서 및 후기 관리</a></li>
                        <li><a class="text-color d-block py-3" href="blog-details.html">회원정보 수정</a></li>
                        </ul>
                    </div>
                </div>
            </div>
                <!-- 공백 -->
            <div class="col-lg-1">
            </div>
                <div class="col-lg-8">
                <div class="row">
                    <!-- 대제목 -->
                    <div class="col-lg-12 text-center">
                    <p class="subtitle">Notice</p>
                    <h2 class="section-title">주요 전공과목 학습 성취도</h2>
                    <h3>다음 과목들에 대해 본인의 학점을 체크해 주세요.*</h3>
                    </div>
                        <div class="col-lg-12 p-0">
                            <form class="row" v-on:submit.prevent='submitResume'>
                                <div class="col-lg-6">
                                    <div class="apply-list  rounded-xl  bg-white mb-4">
                                        <h6 style="font-weight:bold">컴퓨터프로그래밍</h6>
                                        <input class="inp-cbx" id="cbx1" value="미수강" type="checkbox" v-model="computerprogramming" style="display: none;">
                                        <label class="cbx" for="cbx1">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>미수강</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx2" value="C+ 및 이하" type="checkbox" v-model="computerprogramming" style="display: none;">
                                        <label class="cbx" for="cbx2">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>C+ 및 이하</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx3" value="B+,B0" type="checkbox" v-model="computerprogramming" style="display: none;">
                                        <label class="cbx" for="cbx3">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>B+,B0</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx4" value="A+,A0" type="checkbox" v-model="computerprogramming" style="display: none;">
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
                                        <input class="inp-cbx" id="cbx5" value="미수강" type="checkbox" v-model="discretemath" style="display: none;">
                                        <label class="cbx" for="cbx5">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>미수강</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx6" value="C+ 및 이하" type="checkbox" v-model="discretemath" style="display: none;">
                                        <label class="cbx" for="cbx6">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>C+ 및 이하</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx7" value="B+,B0" type="checkbox" v-model="discretemath" style="display: none;">
                                        <label class="cbx" for="cbx7">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>B+,B0</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx8" value="A+,A0" type="checkbox" v-model="discretemath" style="display: none;">
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
                                        <input class="inp-cbx" id="cbx9" value="미수강" type="checkbox" v-model="datastructure" style="display: none;">
                                        <label class="cbx" for="cbx9">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>미수강</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx10" value="C+ 및 이하" type="checkbox" v-model="datastructure" style="display: none;">
                                        <label class="cbx" for="cbx10">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>C+ 및 이하</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx11" value="B+,B0" type="checkbox" v-model="datastructure" style="display: none;">
                                        <label class="cbx" for="cbx11">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>B+,B0</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx12" value="A+,A0" type="checkbox" v-model="datastructure" style="display: none;">
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
                                        <input class="inp-cbx" id="cbx13" value="미수강" type="checkbox" v-model="objectiveprogramming" style="display: none;">
                                        <label class="cbx" for="cbx13">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>미수강</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx14" value="C+ 및 이하" type="checkbox" v-model="objectiveprogramming" style="display: none;">
                                        <label class="cbx" for="cbx14">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>C+ 및 이하</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx15" value="B+,B0" type="checkbox" v-model="objectiveprogramming" style="display: none;">
                                        <label class="cbx" for="cbx15">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>B+,B0</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx16" value="A+,A0" type="checkbox" v-model="objectiveprogramming" style="display: none;">
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
                                        <input class="inp-cbx" id="cbx17" value="미수강" type="checkbox" v-model="computerstructure" style="display: none;">
                                        <label class="cbx" for="cbx17">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>미수강</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx18" value="C+ 및 이하" type="checkbox" v-model="computerstructure" style="display: none;">
                                        <label class="cbx" for="cbx18">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>C+ 및 이하</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx19" value="B+,B0" type="checkbox" v-model="computerstructure" style="display: none;">
                                        <label class="cbx" for="cbx19">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>B+,B0</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx20" value="A+,A0" type="checkbox" v-model="computerstructure" style="display: none;">
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
                                        <input class="inp-cbx" id="cbx21" value="미수강" type="checkbox" v-model="algorithm" style="display: none;">
                                        <label class="cbx" for="cbx21">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>미수강</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx22" value="C+ 및 이하" type="checkbox" v-model="algorithm" style="display: none;">
                                        <label class="cbx" for="cbx22">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>C+ 및 이하</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx23" value="B+,B0" type="checkbox" v-model="algorithm" style="display: none;">
                                        <label class="cbx" for="cbx23">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>B+,B0</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx24" value="A+,A0" type="checkbox" v-model="algorithm" style="display: none;">
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
                                        <input class="inp-cbx" id="cbx25" value="미수강" type="checkbox" v-model="systemprogramming" style="display: none;">
                                        <label class="cbx" for="cbx25">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>미수강</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx26" value="C+ 및 이하" type="checkbox" v-model="systemprogramming" style="display: none;">
                                        <label class="cbx" for="cbx26">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>C+ 및 이하</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx27" value="B+,B0" type="checkbox" v-model="systemprogramming" style="display: none;">
                                        <label class="cbx" for="cbx27">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>B+,B0</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx28" value="A+,A0" type="checkbox" v-model="systemprogramming" style="display: none;">
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
                                        <input class="inp-cbx" id="cbx29" value="미수강" type="checkbox" v-model="os" style="display: none;">
                                        <label class="cbx" for="cbx29">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>미수강</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx30" value="C+ 및 이하" type="checkbox" v-model="os" style="display: none;">
                                        <label class="cbx" for="cbx30">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>C+ 및 이하</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx31" value="B+,B0" type="checkbox" v-model="os" style="display: none;">
                                        <label class="cbx" for="cbx31">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>B+,B0</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx32" value="A+,A0" type="checkbox" v-model="os" style="display: none;">
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
                                        <input class="inp-cbx" id="cbx33" value="미수강" type="checkbox" v-model="database" style="display: none;">
                                        <label class="cbx" for="cbx33">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>미수강</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx34" value="C+ 및 이하" type="checkbox" v-model="database" style="display: none;">
                                        <label class="cbx" for="cbx34">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>C+ 및 이하</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx35" value="B+,B0" type="checkbox" v-model="database" style="display: none;">
                                        <label class="cbx" for="cbx35">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>B+,B0</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx36" value="A+,A0" type="checkbox" v-model="database" style="display: none;">
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
                                        <input class="inp-cbx" id="cbx37" value="미수강" type="checkbox" v-model="network" style="display: none;">
                                        <label class="cbx" for="cbx37">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>미수강</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx38" value="C+ 및 이하" type="checkbox" v-model="network" style="display: none;">
                                        <label class="cbx" for="cbx38">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>C+ 및 이하</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx39" value="B+,B0" type="checkbox" v-model="network" style="display: none;">
                                        <label class="cbx" for="cbx39">
                                            <span>
                                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                            </svg>
                                            </span>
                                            <span>B+,B0</span>
                                        </label><br>
                                        <input class="inp-cbx" id="cbx40" value="A+,A0" type="checkbox" v-model="network" style="display: none;">
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
                </div>
            </div>
        </div>
    </section>
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
        this.$http.get('http://localhost:8888/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
            //console.log(res.data.user);
            this.user = res.data.user;
        })
      },
      created(){
        
      },
      methods: {
        submitResume(){
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
      }
  }
</script>

<style scoped>
</style>