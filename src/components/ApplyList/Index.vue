<template>
  <div id="apply">
    <div class="comanyList">
        <div v-for='(AL,index) in applylist' :key="AL.cNoticeID">
          {{index+1}}.
          기업명 : {{AL.cName}}<br>
          매니저 : {{AL.cManagerName}}<br><br>
        </div>
    </div>
  </div>
</template>


<script>
  export default{
      name: 'Apply',
      data() {
        return {
            applylist:[],
        }
      },
      components: {
          
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
      }
  }
</script>

<style scoped>
#resume{
  margin-left: 200px;
  margin-top: 200px;
}
</style>
