<template>
  <div id="applystatus">
    내 지원현황<br><br>
     회사명 : {{cName}}<br>
     합격여부 : {{YN}}
  </div>
</template>

<script>
  export default{
    name: 'Applystatus',
    data() {
      return {
        sName : "이모씨",
        cName : "",
        YN : "",
      }
    },
    components: {
        
    },
    created(){
        this.getApplyStatus();
    },
    methods: {
      getApplyStatus() {
        this.$http.get('http://localhost:8888/std/mypage/applyStatus',{params:{sName : this.sName}}).then((response)=>{
          this.cName = response.data[0].cName;  
          if(response.data[0].YN) this.YN = "합격입니다.";
          else this.YN = "심사중입니다."
        })
      }
    }
  }
</script>
<style scoped>
#applystatus{
  margin-left: 200px;
  margin-top: 200px;
}
</style>