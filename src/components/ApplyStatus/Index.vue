<template>
  <div id="applystatus">
    <v-base></v-base>
    내 지원현황<br><br>
     회사명 : {{cName}}<br>
     합격여부 : {{YN}}
  </div>
</template>

<script>
 import VBase from '../Base/Index.vue'
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
#applystatus{
  margin-left: 200px;
  margin-top: 200px;
}
</style>