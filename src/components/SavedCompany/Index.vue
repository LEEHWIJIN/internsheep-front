<template>
  <section class="section section-lg-bottom bg-light">
    <div class="container" id="applystatus">
      <v-base></v-base>
      <div class="row">
        <!-- 카테고리란 -->
        <div class="col-lg-3">
          <v-category></v-category>
        </div>
        <!-- 공백 -->
        <div class="col-lg-1">
        </div>
        <!-- 지원 현황 -->
        <div class="col-lg-8">
          <div class="row">
            <!-- 대 제목 -->
            <div class="col-lg-12 text-center">
              <p class="subtitle">Saved</p>
              <h2 class="section-title">Saved Company</h2>
            </div>

            <div class="col-lg-12 p-0">
              <li><label style="font-weight:bold;">찜한 기업 목록</label></li>
              <div v-for="(pc,index) in pickCoList" class="col-lg-12 bg-white p-4 rounded shadow my-3">
                <div class="media align-items-center flex-column flex-sm-row">
                  <img src="images/career/logo-1.png" class="mr-sm-3 mb-4 mb-sm-0 border rounded p-2" alt="logo-1">
                  <div class="media-body text-center text-sm-left mb-4 mb-sm-0">
                    <h6 class="mt-0">{{pc.cName}}</h6>
                    <p class="mb-0 text-gray"> {{pc.cOccupation}}</p>
                  </div>
                  <div>
                    <b-button v-b-modal="modalId(index)">공고 보기</b-button>
                    <b-modal :id="'modal'+index" title="공고 세부내용">
                      <div class="row">
                        <div class="col-lg-12 text-center">
                          <img src="images/career/logo-5.png" class="img shadow-sm mr-sm-3 m-3 p-0" alt="logo-1">
                        </div>
                      </div>
                      <p class="my-1">
                        회사 이름: {{pc.cName}}
                      </p>
                      <p class="my-1">
                        모집 분야: {{pc.cOccupation}}
                      </p>
                      <p class="my-1">
                        태그: {{pc.cTag}}
                      </p>
                      <p class="my-1">
                        모집 인원/지원 인원: {{pc.cNumOfPeople}}/{{pc.applyStdNum}}
                      </p>
                      <p class="my-1">
                        회사 소개: {{pc.cInfo}}
                      </p>
                      <p class="my-1">
                        급여: {{pc.cPay}}
                      </p>
                      <p class="my-1">
                        복리 후생: {{pc.cBenefit}}
                      </p>
                      <p class="my-1">
                        실습 기간: {{pc.internTermStart.split('T')[0]}} ~ {{pc.internTermEnd.split('T')[0]}}
                      </p>
                      <p class="my-1">
                        주소: {{pc.cLocation}}
                      </p>
                      <p class="my-1">
                        Email: {{pc.cEmail}}
                      </p>
                      <p class="my-1">
                        담당자 성함 및 연락처: {{pc.cManagerName}} {{pc.cManagerPhone}}
                      </p>
                      <button class="btn btn-primary btn-sm" @click="applyStd(pc.cName)">지원하기</button>
                    </b-modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </section>
</template>

<script>
import myModal from './myModal'
 import VBase from '../Base/Index.vue'
 import VFooter from '../Footer/Index.vue'
 import VCategory from '../Category/Index.vue'
 import Const from '../../constant/constant';
  export default{
    name: 'Applystatus',
    data() {
      return {
        user:{},
        cName : "",
        applylist : [],
        applyTerm:{},
        confirm : 0,
        cName : "",
        cOccupation: "",
        YN : "",
        current : 0,
        pickCoList : [],
      }
    },
    components: {
        VBase,
        VFooter,
        VCategory,
    },
    async created(){
        // this.getApplyStatus();
      await this.$http.get(Const.API_SERVER+'/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
          this.user = res.data.user;
          return this.user.loginId;
      });
      await this.getApplyTerm();
      await this.getPickCoList();

    },
    methods: {
      modalId(i) {
          console.log(i);
          return 'modal' + i;
      },
      async getApplyTerm(){
        await this.$http.get(Const.API_SERVER+'/admin/recentApplyTerm').then((response) => {
            this.applyTerm = {
                applyStart : response.data.applyStart,
                applyEnd : response.data.applyEnd,
                applySemester : response.data.applySemester,
                applyOrder : response.data.applyOrder
            }
            return this.applyTerm;
        })
      },
      async getPickCoList(){
        await this.$http.get(Const.API_SERVER+'/std/mypage/watchStdPickCo',{params:{sLoginID : this.user.loginId, applySemester:this.applyTerm.applySemester, applyOrder:this.applyTerm.applyOrder}}).then((response) => {
          for(var i=0; i<response.data.length;i++){
            this.pickCoList.push(response.data[i]);
          }
          return;
        })
      },
      applyStd(cName){
        this.$http.get(Const.API_SERVER+'/std/mypage/applyStatus',{params:{sLoginID : this.user.loginId, applySemester : this.applyTerm.applySemester}}).then((response)=>{
        if(response.data == '합격하거나 심사중 상태'){
            alert("이미 지원을 한 상태 입니다.")
        }
        else{
            this.$http.post(Const.API_SERVER+'/std/mypage/applyCo',{cName : cName, sLoginID : this.user.loginId,applySemester: this.applyTerm.applySemester,applyOrder:this.applyTerm.applyOrder}).then((response) => {
                if(response.data == '0'){
                    alert("이력서가 없습니다. 이력서를 작성해주세요")
                }
                else {
                    alert("지원을 성공 하셨습니다.!")
                }
            })
        }
        })
    },
    }
  }
</script>
<style scoped>

.section {
  padding-top: 130px;
  padding-bottom: 0px;
}

.container {
  padding-bottom: 200px;
}

.pretty {
  width:100%;
  height:100%;
  margin: 40px auto;
}
.outer {
  display: table;
  width: 100%;
  height: 100%;
}

.inner {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.centered {
  position: relative;
  display: inline-block;
  width: 70%;
  padding: 1em;
}
</style>
