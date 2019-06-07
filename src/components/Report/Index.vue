<!-- Report 보고서 관리 페이지 -->
<template>
  <section class="section section-lg-bottom bg-light">
    <v-base></v-base>
    <div class="container" id="report">
      <div class="row">
        <!-- 카테고리란 -->
        <div class="col-lg-3">
          <v-category></v-category>
        </div>
        <!-- 공백 -->
        <div class="col-lg-1">
        </div>
        <v-error v-if="report_status==-1"></v-error>
        <!-- 보고서 및 후기 작성란 -->
        <div v-if="report_status==1" class="col-lg-8">
            <div class="row">
              <!-- 대제목 -->
              <div class="col-lg-12 text-center">
                <p class="subtitle">Report</p>
                <h2 class="section-title">Write a Report</h2>
              </div>
              <!-- 보고서 첨부 -->
              <div class="col-lg-12">
                <li><label style="font-weight:bold;">보고서</label></li>
              </div>

              <div class="col-lg-12 mb-0">
                <b-form-file
                  v-model="file"
                  :state="Boolean(file)"
                  placeholder="Choose a file..."
                  drop-placeholder="Drop file here..."
                  @change="upload($event)"
                ></b-form-file>
              </div>

              <div class="col-lg-12 mb-4">
                <div >Selected file: {{ file ? file.name : '' }}</div>
              </div>

              <div class="col-lg-12 mb-4">
                <li><label style="font-weight:bold;">이전 보고서</label>
                  <br/><a v-bind:href="url" download>{{fileName}}</a></li>
              </div>
              <div class="col-12 text-center">
                <button class="btn btn-primary" type="submit" @click="submitFileAndReview">저장하기</button>
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
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Const from '../../constant/constant';
import VError from './Error.vue'
  export default{
      name: 'report',
      data() {
        return {
            user:{},
            file : null,
            uploadFile : null,
            url : "",
            fileName : "",
            applyTerm :{},
            report_status : -1,
          //uploads: [],
		      //colors: ["#24bddf", "#5fcc9c", "#6a65d8"],
        }
      },
      components: {
          VBase,
          VFooter,
          VCategory,
          VError
      },
      async created(){
          await this.$http.get('Const.API_SERVER/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
              this.user = res.data.user;
              return this.user.loginId
          })
          //  await this.$http.get('Const.API_SERVER/std/mypage/checkReportTerm',{params:{sLoginID : this.user.loginId}}).then(res => {
          //     if(res.data == 1){//보고서 작성기간 입니다.
          //       this.report_status = 1;
          //     }
          //     else{//작성 기간이 아닙니다.
          //       this.report_status = -1;
          //     }
          await this.$http.get('Const.API_SERVER/admin/recentApplyTerm').then((response) => {
              this.applyTerm = {
                  applyStart : response.data.applyStart,
                  applyEnd : response.data.applyEnd,
                  applySemester : response.data.applySemester,
                  applyOrder : response.data.applyOrder
              }
              this.downloadButton(this.user.loginId)
              this.loadFileName(this.user.loginId)
              return this.applyTerm
          })
           await this.$http.get('Const.API_SERVER/std/mypage/checkReportTerm',{params:{sLoginID : this.user.loginId, applySemester: this.applyTerm.applySemester}}).then(res => {
               console.log('sdfsdf'+res.data)
              if(res.data =='실습한 기업 없음'){
                  alert('실습한 기업이 없습니다.')
                  this.$router.push({name: "Apply"})
              }
              else if(res.data == 0){
                   alert('보고서 작성기간이 아닙니다.')
                  this.$router.push({name: "Apply"})
               }
               else{this.report_status = 1;}
          })

      },
      methods: {
          downloadButton(loginId){
              this.url = 'Const.API_SERVER/std/mypage/downloadReport?sLoginID='+loginId
              this.loadFileName(loginId)
          },
          loadFileName(loginId){
              this.$http.get('Const.API_SERVER/co/mypage/uploadImage',{params:{sLoginID : loginId}}).then((response)=>{
                  if(response.data == '0'){
                      this.fileName = ""
                  }
                  else {this.fileName = response.data}
              })
          },
          upload(event){
            this.uploadFile = event.target.files[0];
          },
          submitFileAndReview(){
              var data = new FormData();
              data.append('name', this.uploadFile.name)
              data.append('sLoginID',this.user.loginId)
              data.append('file', this.uploadFile)
              data.append('applySemester', this.applyTerm.applySemester)//formdata 는 console.log를 찍어도 확인 할 수 없다.
            // for (var key of data.keys()) {
            //   console.log(key);
            // }
            // for (var value of data.values()) {
            //   console.log(value);

            // } //이렇게 key 값과 value값을 확인하면 확인 가능하다.
            let config = {
              header : {
                'Content-Type' : 'multipart/form-data'
              }
            }
            if(this.fileName == '') {
                this.$http.post('Const.API_SERVER/std/mypage/postReport', data, config).then(
                    response => {
                        alert('저장되었습니다.')
                    }
                )
            }
            else{
                this.$http.post('Const.API_SERVER/std/mypage/modifyReport', data, config).then(
                    response => {
                        alert('수정되었습니다.')
                    }
                )
            }
          },
        }
    }
</script>

<style scoped lang="scss">

.section {
  padding-top: 130px;
  padding-bottom: 0px;
}

.container {
  padding-bottom: 110px;
}
</style>
