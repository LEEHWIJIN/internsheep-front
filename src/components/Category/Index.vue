<template>
  <div class="rounded-sm shadow bg-white pb-4">
      <div class="widget">
          <h4>Category</h4>
          <ul class="list-styled list-bordered">
          <li><a class="text-color d-block py-3" href="#" @click="goResume">이력서 관리</a></li>
          <li><a class="text-color d-block py-3" href="#" @click="goApplyStatus">지원 현황</a></li>
          <li><a class="text-color d-block py-3" href="#" @click="goReportreview">보고서 및 후기관리</a></li>
          <li><a class="text-color d-block py-3" href="#">찜한 기업 목록</a></li>
          <li><a class="text-color d-block py-3" href="#">회원정보 수정</a></li>
          </ul>
      </div>
  </div>
</template>

<script>
  export default{
    name: 'app',
    data() {
      return {
      }
    },
    components: {
        //VResume
    },
    methods: {
      goResume(){
      this.$router.push({name: "Resume"})
      },
      goHome(){
          this.$router.push({name: "Home"})
      },
      goApplyStatus(){
          this.$router.push({name: "Applystatus"})
      },
      goApplyList(){
          this.$router.push({name: "Apply"})
      },
      goReportreview(){
          this.$router.push({name: "Reportreview"})
      },
      goLogin(){
          this.$router.push({name: "login"})
      },
      logout(){
      localStorage.removeItem('token')
      this.auth = 0;
      this.$router.push('login')
      },
      goAdminPage(){
        this.$router.push({name: "Admin"})
      },
    }
  }
</script>

<style>
</style>
