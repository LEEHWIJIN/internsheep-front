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
        <!-- 보고서 및 후기 작성란 -->
        <div class="col-lg-8">
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
    <v-footer></v-footer>
  </section>




</template>

<script>
import VBase from '../Base/Index.vue'
import VFooter from '../Footer/Index.vue'
import VCategory from '../Category/Index.vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
  export default{
      name: 'report',
      data() {
        return {
          sName : "이휘진",
          file : null,
          uploadFile : null,
          review : "",
          cName : "고비포선라이즈",
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

      },
      methods: {
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
            data.append('sName',this.sName)
            data.append('starScore',this.review)
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
            this.$http.post('http://localhost:8888/std/mypage/postReportAndReview', data, config).then(
              response => {
              }
            )
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
