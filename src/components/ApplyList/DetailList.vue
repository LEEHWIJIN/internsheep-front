<template>
  <div id="applyList">
    <div class="comanyList">
        <div v-for='sc in selectedCo' :key="sc.cNoticeID">
          기업명 : {{sc.cName}}<br>
          매니저 : {{sc.cManagerName}}<br><br>
          <button @click="applyStd(sc.cName)">지원하기</button>
        </div>
    </div>
  </div>
</template>


<script>
  export default{
      name: 'applyList',
      data() {
        return {
            sName:"박모양"
        }
      },
      components: {

      },
      props:{
        selectedCo:{
            type:Array,
            required: true,
        },
      },
      created(){

    },
      methods: {
        applyStd(cName){
            this.$http.get('http://localhost:8888/std/mypage/applyStatus',{params:{sName : this.sName}}).then((response)=>{
            if(response.data != false){
                alert("이미 지원을 한 상태 입니다.")
            }
            else{
                this.$http.post('http://localhost:8888/std/mypage/applyCo',{cName : cName, sName : this.sName}).then((response) => {
                    alert("지원을 성공 하셨습니다.!")
                })
            }
            })
        },
      }
  }
</script>

<style scoped>

</style>
