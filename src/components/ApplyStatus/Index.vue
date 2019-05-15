<template>
  <section class="section section-lg-bottom bg-light">
    <div class="container" id="applystatus">
      <v-base></v-base>
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
                     <h6 class="mt-0">회사명이 들어갈 자리입니다. {{cName}}</h6>
                     <p class="mb-0 text-gray"> 모집 직군이 들어갈 자리입니다. </p>
                   </div>
                   <a href="career-details.html" class="btn btn-outline-primary">합격여부 {{YN}}</a>
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
  export default{
    name: 'Applystatus',
    data() {
      return {
        user:{},
        cName : "",
        YN : "",
      }
    },
    components: {
        VBase,
        VFooter,
    },
    created(){
        // this.getApplyStatus();
        this.$http.get('http://localhost:8888/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
              this.user={};
              this.user = res.data.user;
              this.getApplyStatus(this.user.name);
          })
    },
    methods: {
      getApplyStatus(name) {
        this.$http.get('http://localhost:8888/std/mypage/applyStatus',{params:{sName : name}}).then((response)=>{
          this.cName = response.data[0].cName;
          if(response.data[0].YN) this.YN = "합격입니다.";
          else this.YN = "심사중입니다."
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
  padding-bottom: 110px;
}
</style>
