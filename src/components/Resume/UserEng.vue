<template>
  <div class="row">
    <!-- 대제목 -->
    <div class="col-lg-12 text-center">
    <p class="subtitle">Languages</p>
    <h2 class="section-title">영어 및 기타 외국어 활용 역량 질문</h2>
    </div>
    <!-- 이력서 내용 -->
    <div class="col-lg-12 p-0">
      <form class="row" v-on:submit.prevent='submitResume'>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">영어 정보 검색 및 활용 역량*</h6>
                <input class="inp-cbx" id="cbx1" value="영어로 구글링을 하는데 불편함을 많이 느낀다." type="checkbox" v-model="EnglishSearch" style="display: none;">
                <label class="cbx" for="cbx1">
                    <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                    </span>
                    영어로 구글링을 하는데 불편함을 많이 느낀다.
                </label><br>
                <input class="inp-cbx" id="cbx2" value="조금 불편하긴 하지만 영어로 구글링을 자주 하는 편이다." type="checkbox" v-model="EnglishSearch" style="display: none;">
                <label class="cbx" for="cbx2">
                    <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                    </span>
                    조금 불편하긴 하지만 영어로 구글링을 자주 하는 편이다.
                </label><br>
                <input class="inp-cbx" id="cbx3" value="Stackoverflow나 Quora같은 사이트에 질문을 올리거나 답을 다는 것에 크게 불편을 느끼지 않는다." type="checkbox" v-model="EnglishSearch" style="display: none;">
                <label class="cbx" for="cbx3">
                    <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                    </span>
                    Stackoverflow나 Quora같은 사이트에 질문을 올리거나 답을 다는 것에 크게 불편을 느끼지 않는다.
                </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">영어 대화*</h6>
                <input class="inp-cbx" id="cbx4" value="외국인만 보면 말문이 막힌다." type="checkbox" v-model="EnglishCommunication" style="display: none;">
                <label class="cbx" for="cbx4">
                    <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                    </span>
                    외국인만 보면 말문이 막힌다.
                </label><br>
                <input class="inp-cbx" id="cbx5" value="간단한 일상 대화 및 전공분야 대화는 가능한 수준이다." type="checkbox" v-model="EnglishCommunication" style="display: none;">
                <label class="cbx" for="cbx5">
                    <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                    </span>
                    간단한 일상 대화 및 전공분야 대화는 가능한 수준이다.
                </label><br>
                <input class="inp-cbx" id="cbx6" value="일상 대화 및 전공분야 대화를 하는데 큰 불편을 느끼지 않는다." type="checkbox" v-model="EnglishCommunication" style="display: none;">
                <label class="cbx" for="cbx6">
                    <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                    </span>
                    일상 대화 및 전공분야 대화를 하는데 큰 불편을 느끼지 않는다.
                </label><br>
                 <input class="inp-cbx" id="cbx7" value="원어민 수준의 대화가 가능하다." type="checkbox" v-model="EnglishCommunication" style="display: none;">
                <label class="cbx" for="cbx7">
                    <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                    </span>
                    원어민 수준의 대화가 가능하다.
                </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">영어 프레젠테이션*</h6>
                <input class="inp-cbx" id="cbx8" value="불가능하다." type="checkbox" v-model="EnglishPresentation" style="display: none;">
                <label class="cbx" for="cbx8">
                    <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                    </span>
                    불가능하다.
                </label><br>
                <input class="inp-cbx" id="cbx9" value="원고가 있으면 읽으면서 가능하다." type="checkbox" v-model="EnglishPresentation" style="display: none;">
                <label class="cbx" for="cbx9">
                    <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                    </span>
                    원고가 있으면 읽으면서 가능하다.
                </label><br>
                <input class="inp-cbx" id="cbx10" value="원고는 없어도 발표 자료와 함께 프레젠테이션이 가능하다." type="checkbox" v-model="EnglishPresentation" style="display: none;">
                <label class="cbx" for="cbx10">
                    <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                    </span>
                    원고는 없어도 발표 자료와 함께 프레젠테이션이 가능하다.
                </label><br>
                 <input class="inp-cbx" id="cbx11" value="원고나 발표 자료가 없어도 충분히 프레젠테이션이 가능하다." type="checkbox" v-model="EnglishPresentation" style="display: none;">
                <label class="cbx" for="cbx11">
                    <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                    </span>
                    원고나 발표 자료가 없어도 충분히 프레젠테이션이 가능하다.
                </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">영어 보고서 및 문서 작성*</h6>
                <input class="inp-cbx" id="cbx12" value="영어로 문서를 작성해 본 경험이 전혀 없다." type="checkbox" v-model="EnglishReport" style="display: none;">
                <label class="cbx" for="cbx12">
                    <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                    </span>
                    영어로 문서를 작성해 본 경험이 전혀 없다.
                </label><br>
                <input class="inp-cbx" id="cbx14" value="보고서나 논문을 작성해 본적이 있지만 아직 타인의 교정 및 점수가 절실하다." type="checkbox" v-model="EnglishReport" style="display: none;">
                <label class="cbx" for="cbx14">
                    <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                    </span>
                    보고서나 논문을 작성해 본적이 있지만 아직 타인의 교정 및 점수가 절실하다.
                </label><br>
                <input class="inp-cbx" id="cbx15" value="보고서나 논문 작성에 큰 불편을 느끼지는 않지만 표현 방식이나 문법이 부족 한 편이다." type="checkbox" v-model="EnglishReport" style="display: none;">
                <label class="cbx" for="cbx15">
                    <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                    </span>
                    보고서나 논문 작성에 큰 불편을 느끼지는 않지만 표현 방식이나 문법이 부족 한 편이다.
                </label><br>
                 <input class="inp-cbx" id="cbx16" value="모국어와 동일한 수준으로 보고서 및 논문 작성이 가능하다." type="checkbox" v-model="EnglishReport" style="display: none;">
                <label class="cbx" for="cbx16">
                    <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                    </span>
                    모국어와 동일한 수준으로 보고서 및 논문 작성이 가능하다.
                </label><br>
            </div>
        </div>
        <br>
        <div class="col-12 text-center">
            <button class="btn btn-primary mr-4" @click="before">이전</button>
            <button class="btn btn-primary" type="submit">다음</button>
        </div>
        </form>
    </div>
  </div>
</template>

<script>
  export default{
      name: 'UserEng',
      data() {
        return {
            user:{},
            EnglishSearch : [],
            EnglishCommunication : [],
            EnglishPresentation : [],
            EnglishReport : [],
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
            EnglishSearch : this.EnglishSearch,
            EnglishCommunication : this.EnglishCommunication,
            EnglishPresentation : this.EnglishPresentation,
            EnglishReport : this.EnglishReport,
          }];
          this.$store.dispatch('resume/submit_userEng', data);
          this.$store.dispatch('resume/setResumeState',2);
        },
          before(){
              this.$store.dispatch('resume/setResumeState',0);
          }
      }
  }
</script>

<style scoped>
</style>
