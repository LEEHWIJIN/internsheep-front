<template>
  <section class="section section-lg-bottom bg-light">
    <v-base></v-base>
    <div class="container" id="reportreview">
      <div class="row">
        <!-- 카테고리란 -->
        <div class="col-lg-3">
          <v-category></v-category>
        </div>
        <!-- 공백 -->
        <div class="col-lg-1">
        </div>
        <!-- 보고서 및 후기 작성란 -->
        <div class="col-lg-8">
            <div class="row">
              <!-- 대제목 -->
              <div class="col-lg-12 text-center">
                <p class="subtitle">Review</p>
                <h2 class="section-title">Write a Review</h2>
              </div>
              <!-- 보고서 첨부 -->
              <div class="row">
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

                <div class="col-lg-12">
                  <li><label style="font-weight:bold;">실습 후기</label></li>
                </div>

                <div class="col-lg-12 mb-4">
                  <textarea class="form-control mb-4" v-model="review" placeholder="실습 내용, 사내문화 등을 자유롭게 평가해주세요."></textarea>
                </div>

                <div class="col-12 text-center">
                  <button class="btn btn-primary" type="submit" @click="submitFileAndReview">저장하기</button>
                </div>
                <!-- <div id="container">
                  <div>
                    <div class="upload" v-for="(upload, index) in uploads" :key="index">
                        <div class="ext" :style="{'background-color': upload.color}">
                          <p>{{upload.ext.toUpperCase()}}</p>
                        </div>
                        <div class="upload-details">
                          <div class="name-container">
                            <p class="filename">{{upload.name}}</p>
                            <div>
                              <p class="filesize">{{upload.size}}</p>
                              <p @click="removeUpload(index)" class="cancel-btn" v-if="upload.progress !== '100%'">x</p>
                            </div>
                          </div>
                          <div class="upload-bar" v-if="upload.progress !== '100%'">
                            <div class="upload-progress" :style="{width: upload.progress}"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div @click="openFilePicker" id="uploader">
                      <p><span>Click</span> to choose a file to upload :)</p>
                      <input type="file" ref="filepicker" @change="uploadFile" />
                    </div>
                </div> -->
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
  export default{
      name: 'reportreview',
      data() {
        return {
            user:{},
          file : null,
          uploadFile : null,
          review : "",
            url : "",
            fileName : ""
          //uploads: [],
		      //colors: ["#24bddf", "#5fcc9c", "#6a65d8"],
        }
      },
      components: {
          VBase,
          VFooter,
          VCategory,
      },
      created(){
          this.$http.get('http://localhost:8888/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
              this.user = res.data.user;
              console.log("유저입니다 : ",this.user.loginId)
              this.downloadButton(this.user.loginId)
              this.loadFileName(this.user.loginId)
              this.loadReview(this.user.loginId)
              return this.user.loginId
          })
      },
      methods: {
          downloadButton(loginId){
              this.url = 'http://localhost:8888/std/mypage/downloadReport?sLoginID='+loginId
              this.loadFileName(loginId)
          },
          loadFileName(loginId){
              this.$http.get('http://localhost:8888/std/mypage/loadFileName',{params:{sLoginID : loginId}}).then((response)=>{
                  if(response.data == '0'){
                      this.fileName = ""
                  }
                  else {this.fileName = response.data}
              })
          },
          loadReview(loginId){
              this.$http.get('http://localhost:8888/std/mypage/watchReview',{params:{sLoginID : loginId}}).then((response)=>{
                  if(response.data != '0'){
                      this.review = response.data.reviewContent
                  }
              })
          },
          // getRandomColor() { //나중에 사용할 ux/ui
          //   const randomIndex = Math.floor(Math.random() * 2);
          //     return this.colors[randomIndex];
          // },
          // removeUpload(index) {
          //   clearInterval(this.uploads[index].progressTimer);
          //   this.uploads.splice(index, 1);
          // },
          // openFilePicker() {
          //   this.$refs.filepicker.click();
          // },
          // uploadFile() {
          //   const input = this.$refs.filepicker;
          //   const file = input.files[0];

          //   const upload = {
          //     id: this.uploads.length + 1,
          //     name: file.name,
          //     size: this.getFileSize(file.size),
          //     progress: "0%",
          //     ext: file.name.substring(file.name.lastIndexOf(".") + 1, file.name.length),
          //     progressTimer: null,
          //     color: this.getRandomColor()
          //   };
          //   console.log(upload)
          //   this.uploads.push(upload);
          //   const timer = setInterval(this.updateProgress, 300, upload.id);
          //   upload.progressTimer = timer;
          // },
          // getFileSize(size) {
          //   if (size < 1000000) return `${Math.ceil(size / 1024)} kb`;
          //   else if (size >= 1000000) return `${Math.ceil(size / 1024000)} mb`;
          // },
          // updateProgress(id) {
          //   const index = id - 1;
          //   const progress = Number.parseInt(
          //     this.uploads[index].progress.replace("%", "")
          //   );

          //   this.$set(this.uploads[index], "progress", `${progress + 10}%`);
          //   if (progress + 10 === 100) clearInterval(this.uploads[index].progressTimer);
          // }
          upload(event){
            this.uploadFile = event.target.files[0];
          },
          submitFileAndReview(){
            var data = new FormData();
            data.append('name', this.uploadFile.name)
            data.append('cName',this.cName)
            data.append('sLoginID',this.user.loginId)
            data.append('reviewContent',this.review)
            data.append('file', this.uploadFile) //formdata 는 console.log를 찍어도 확인 할 수 없다.
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
              if(this.fileName=='' && this.review == ""){
                  this.$http.post('http://localhost:8888/std/mypage/postReportAndReview', data, config).then(
                      (response) => {
                          this.$router.push({name: "Reportreview"})
                      }
                  )
              }
              else{
                  this.$http.post('http://localhost:8888/std/mypage/modifyReportAndReview', data, config).then(
                      (response) => {
                          this.$router.push({name: "Reportreview"})
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
  padding-bottom: 50px;
}
</style>
