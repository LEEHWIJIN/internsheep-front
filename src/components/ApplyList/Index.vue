<template>
  <div id="apply">
    <!-- <v-CoList :applylist="applylist" @clickCo="clickCo"></v-CoList> -->
    <div class="comanyList">
        <div v-for='(AL,index) in applylist' :key="AL.cNoticeID" @click="clickCo(index)">
          {{index+1}}.
          기업명 : {{AL.cName}}<br>
          매니저 : {{AL.cManagerName}}<br><br>
        </div>
    </div>
    <v-detail-list :selectedCo="selectedCo"></v-detail-list>
  </div>
</template>


<script>
// import VCoList from "./CoList.vue"
 import VDetailList from "./DetailList.vue"
  export default{
      name: 'Apply',
      data() {
        return {
          applylist:[],
          selectedCo:[],
        }
      },
      components: {
          //VCoList,
          VDetailList,
      },
      created(){
        this.applyList();
      
      },
      methods: {
        applyList(){
          this.$http.get('http://localhost:8888/std/list').then((response) => {
              for(var i=0; i<response.data.length;i++){
                  this.applylist.push({
                    cManagerName : response.data[i].cManagerName,
                    cName : response.data[i].cName,
                    cNoticeID : response.data[i].cNoticeID
                  })
              }
            })
        },
        clickCo(selectedNum){
          this.selectedCo=[]
          console.log(selectedNum)
          this.selectedCo.push({
            cManagerName : this.applylist[selectedNum].cManagerName,
            cName : this.applylist[selectedNum].cName,
            cNoticeID : this.applylist[selectedNum].cNoticeID
          })
        },
      }
  }
</script>

<style scoped>
#apply{
  margin-left: 200px;
  margin-top: 200px;
}
</style>
