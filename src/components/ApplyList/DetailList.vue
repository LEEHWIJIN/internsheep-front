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
            sName:"이모씨"
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
            //지원하기 전에 이 학생이 지원했는지에 대한 여부를 판단하는 것(get)도 필요함.
            this.$http.post('http://localhost:8888/std/mypage/applyCo',{cName : cName, sName : this.sName}).then((response) => {
              //팝업을 띄우던 그런식으로 해야 할 것 같음.
            })
        },
      }
  }
</script>

<style scoped>
#applyList{
  margin-left: 600px;
  margin-top: 600px;
}
</style>