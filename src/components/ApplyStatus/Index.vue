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
            <!-- 회사 목록 (카드 형식)-->
            <div class="col-lg-12 p-0">
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
        YN : "",
        cOccupation : "",
        cImage : ""
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
            this.getApplyStatus(this.user.loginId)
          })
    },
    methods: {
      getApplyStatus(loginId) {
          console.log(loginId)
        this.$http.get('http://localhost:8888/std/mypage/applyStatus',{params:{sLoginID : loginId}}).then((response)=>{
          this.cName = response.data[0].cName;
          if(response.data[0].YN==1) this.YN = "합격입니다.";
          else if(response.data[0].YN==-1) this.YN = "심사중입니다.";
          else this.YN = "불합격 입니다.";
          this.cOccupation =  response.data[0].cOccupation
        })
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
</style>
