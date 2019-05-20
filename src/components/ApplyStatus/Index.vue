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
              <p class="subtitle">Status</p>
              <h2 class="section-title">Apply Status</h2>
            </div>

            <div v-if="current == 1" class="col-lg-12 p-0">
              <li><label style="font-weight:bold;">현재 지원</label></li>
              <div class="col-lg-12 bg-white p-4 rounded shadow my-3">
                <div class="media align-items-center flex-column flex-sm-row">
                  <img src="images/career/logo-1.png" class="mr-sm-3 mb-4 mb-sm-0 border rounded p-2" alt="logo-1">
                  <div class="media-body text-center text-sm-left mb-4 mb-sm-0">
                    <h6 class="mt-0">{{cName}}</h6>
                    <p class="mb-0 text-gray"> {{cOccupation}}</p>
                  </div>
                  <div class="btn btn-outline-primary">{{YN}}</div>
                </div>
              </div>
            </div>

            <!-- 회사 목록 (카드 형식)-->
            <div v-if="confirm == 1" class="col-lg-12 p-0">
              <li><label style="font-weight:bold;">이전 지원</label></li>
               <div v-for='(al,index) in applylist' class="col-lg-12 bg-white p-4 rounded shadow my-3">
                 <div class="media align-items-center flex-column flex-sm-row">
                   <img src="images/career/logo-1.png" class="mr-sm-3 mb-4 mb-sm-0 border rounded p-2" alt="logo-1">
                   <div class="media-body text-center text-sm-left mb-4 mb-sm-0">
                     <h6 class="mt-0">{{al.cName}}</h6>
                     <p class="mb-0 text-gray"> {{al.cOccupation}}</p>
                   </div>
                   <div class="btn btn-outline-primary">{{al.YN}}</div>
                 </div>
                 <div class="col-12 text-center">
                   <button class="btn btn-primary" @click="giveup(index)">포기하기</button>
                 </div>
               </div>
            </div>
            <div v-if="confirm == 2" class="col-lg-12 p-0">
              <div class="container pretty">
                  <div class="outer">
                    <div class="inner">
                      <div class="centered">
                        <!-- 보고서 작성 페이지  || 후기 작성 페이지일 경우-->
                        <h3 style="font-weight:bold;">어머나, <br>아직 지원한 기업이<br>없으시군요! </h3><br>
                        <h4 href="#" @click="goApplyList">지원하러 가기 -></h4>
                      </div>
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
 import VBase from '../Base/Index.vue'
 import VFooter from '../Footer/Index.vue'
 import VCategory from '../Category/Index.vue'
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
      }
    },
    components: {
        VBase,
        VFooter,
        VCategory,
    },
    created(){
        // this.getApplyStatus();
        this.$http.get('http://localhost:8888/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
            this.user = res.data.user;
            console.log("유저입니다 : ",this.user.loginId)
            this.getApplyTerm(this.user.loginId)
          })

    },
    methods: {
      goApplyList(){
          this.$router.push({name: "Apply"})
      },
      getApplyStatus(loginId) {
        this.$http.get('http://localhost:8888/std/mypage/applyStatus',{params:{sLoginID : loginId, applySemester : this.applyTerm.applySemester}}).then((response)=>{
            if(response.data=='0'){
                this.confirm = 2
            }
            else {
                for(var i=0; i<response.data.length;i++) {
                    if(this.applyTerm.applyOrder == response.data[i].applyOrder){
                        this.current = 1
                        this.cName = response.data[i].cName
                        this.cOccupation = response.data[i].cOccupation
                        if (response.data[i].YN == 1) this.YN = "합격";
                        else if (response.data[i].YN == -1) this.YN = "심사중";
                        else if (response.data[i].YN == 0) this.YN = "불합격";
                        else if (response.data[i].YN == 2) this.YN = "포기";
                    }
                    else {
                        this.confirm = 1
                        this.applylist.push({
                            cOccupation: response.data[i].cOccupation,
                            cImage: response.data[i].cImage,
                            YN: "",
                            cName: response.data[i].cName,
                            applyOrder: response.data[i].applyOrder
                        })
                        if (response.data[i].YN == 1) this.applylist[i].YN = "합격";
                        else if (response.data[i].YN == -1) this.applylist[i].YN = "심사중";
                        else if (response.data[i].YN == 0) this.applylist[i].YN = "불합격";
                        else if (response.data[i].YN == 2) this.applylist[i].YN = "포기";
                    }
                }
            }
        })
      },
        getApplyTerm(loginId){
            this.$http.get('http://localhost:8888/admin/recentApplyTerm').then((response) => {
                this.applyTerm = {
                    applyStart : response.data.applyStart,
                    applyEnd : response.data.applyEnd,
                    applySemester : response.data.applySemester,
                    applyOrder : response.data.applyOrder
                }
                this.getApplyStatus(loginId)
            })
        },
        giveup(index){
          console.log(this.applylist)
          if(this.applylist[index].YN == '심사중'){
            this.$http.post('http://localhost:8888/std/mypage/giveup',{sLoginID : this.user.loginId, applySemester : this.applyTerm.applySemester, applyOrder : this.applylist[index].applyOrder}).then((response) => {
                alert('포기되었습니다.')
                this.$router.push({name: "Home"})
            })
          }
          else{
              alert('포기할 수 없는 상태 입니다.')
          }
        }
    }
  }
</script>
<style scoped>

.section {
  padding-top: 130px;
  padding-bottom: 0px;
}

.container {
  padding-bottom: 170px;
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
