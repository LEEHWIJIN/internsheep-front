<!-- Review 후기 관리 페이지 -->
<template>
  <section class="section section-lg-bottom bg-light">
    <v-base></v-base>
    <div class="container" id="review">
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

            <!-- 기업 기본 정보 -->
            <div class="col-lg-12 mb-4" style="position:relative;" >
              <!-- 사진 -->
              <div class="" style="float:left; width:30%; clear:both;">
                <img src="images/career/logo-1.png" class="img" alt="logo-1" >
              </div>
              <!-- 기업 기본 정보 -->
              <div class="ml-5 pl-5 bl-5" style="line-height:170%; position:absolute; bottom:0px; float:left; width:70%">
                <!-- 기업명 -->
                <span v-model="cName"><span style="color:#000000; font-weight:bold; font-size:20px; color:#242f3e;">{{cName}}</span> <br></span>
                <!-- 모집 직군 -->
                <span style="font-weight:bold;">실습 직군<br></span>
                <!-- 태그 -->
                <span>기업 여부 <br></span>
              </div>
            </div>

            <div class="col-lg-12 mb-3">
              <li><label style="font-weight:bold;"> 별점</label></li>
              <fieldset class="rating ml-3">
                  <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                  <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                  <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                  <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                  <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
                  <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                  <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                  <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                  <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                  <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
              </fieldset>
            </div>

            <!-- 후기 작성란 -->
            <div class="col-lg-12">
              <li><label style="font-weight:bold;"> 후기 한줄평</label></li>
            </div>

            <div class="col-lg-12 mb-4">
              <input class="form-control mb-0" v-model="ReviewTitle" placeholder="실습 후기를 한 줄로 표현해주세요.">
            </div>

            <div class="col-lg-12">
              <li><label style="font-weight:bold;"> 실습 상세 후기</label></li>
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
    <v-footer></v-footer>
  </section>




</template>

<script>
import VBase from '../Base/Index.vue'
import VFooter from '../Footer/Index.vue'
import VCategory from '../Category/Index.vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
  export default{
      name: 'review',
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

.img {
  height: 75px;
  border-radius: 50%;
}
@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);

fieldset, label { margin: 0; padding: 0; }
body{ margin: 20px; }
h1 { font-size: 1.5em; margin: 10px; }

/****** Style Star Rating Widget *****/

.rating {
  border: none;
  float: left;
}

.rating > input { display: none; }
.rating > label:before {
  margin: 5px;
  font-size: 1.25em;
  font-family: FontAwesome;
  display: inline-block;
  content: "\f005";
}

.rating > .half:before {
  content: "\f089";
  position: absolute;
}

.rating > label {
  color: #ddd;
 float: right;
}

/***** CSS Magic to Highlight Stars on Hover *****/

.rating > input:checked ~ label, /* show gold star when clicked */
.rating:not(:checked) > label:hover, /* hover current star */
.rating:not(:checked) > label:hover ~ label { color: #FFD700;  } /* hover previous stars in list */

.rating > input:checked + label:hover, /* hover current star when changing rating */
.rating > input:checked ~ label:hover,
.rating > label:hover ~ input:checked ~ label, /* lighten current selection */
.rating > input:checked ~ label:hover ~ label { color: #FFED85;  }
</style>
