<template>
  <div id="reportreview">
    <b-form-file
      v-model="file"
      :state="Boolean(file)"
      placeholder="Choose a file..."
      drop-placeholder="Drop file here..."
      @change="upload($event)"
      enctype="multipart/form-data"
    ></b-form-file>
    <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
    <label>후기를 작성해주세요</label><br>
    <textarea v-model="review" placeholder="후기를 작성해주세요"></textarea>
    <input class="hello" type="submit" value="확인" @click="submitFileAndReview">
    <br/>
    <a v-bind:href="url" v-bind:download="fileName" type = "application/unknown">다운로드</a>
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
</template>

<script>
import 'bootstrap-vue/dist/bootstrap-vue.css'
  export default{
      name: 'reportreview',
      data() {
        return {
          sName : "박수연",
          file : null,
          uploadFile : null,
          review : 0,
          cName : "고비포선라이즈",
          url : "",
          fileName : ""
          //uploads: [],
		      //colors: ["#24bddf", "#5fcc9c", "#6a65d8"],
        }
      },
      components: {
          
      },
      created(){
        this.downloadButton()
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
          downloadButton(){
              this.$http.get('http://localhost:8888/std/mypage/downloadReport',{params:{sName : this.sName}}).then((response)=>{
                  console.log(decodeURIComponent(response.data.filePath))
                  this.url=response.data.filePath;
                  this.fileName = response.data.fileName;
              })
          },
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
#reportreview{
  margin-left: 200px;
  margin-top: 200px;
}
body {
	background-color: #bff4ed;
	display: flex;
	height: 100vh;
	font-family: Arial;
}

#container {
	width: 60%;
	background-color: white;
	margin: auto;
	box-shadow: 0px 40px 25px 0px rgba(132, 223, 220, 0.3);
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 16px;
}

#uploader {
	width: calc(100% - 32px);
	height: 100px;
	border: 2px dashed #d9f0ef;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	text-align: center;
	padding: 0px 16px;

	input {
		display: none;
	}

	p {
		font-size: 18px;
		color: #b6b6b6;

		span {
			color: #59dada;
			font-weight: bold;
		}
	}
}

.upload {
	margin-bottom: 24px;
	display: flex;
	align-items: center;

	.ext {
		width: 56px;
		height: 48px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		margin-right: 16px;

		p {
			font-size: 14px;
			color: white;
			font-weight: bold;
		}
	}

	.name-container {
		display: flex;
		justify-content: space-between;
		font-size: 15px;

		.filename {
			color: #424242;
			font-weight: bold;
			margin-right: 16px;
		}

		div {
			display: flex;
			align-items: center;

			p:nth-child(1) {
				color: #9d9d9d;
			}

			p:nth-child(2) {
				margin-left: 16px;
				cursor: pointer;
				color: #e4e4e4;
			}
		}
	}

	.upload-details {
		width: 100%;
	}

	.upload-bar {
		width: 100%;
		margin-top: 8px;
		border-radius: 5px;
		background-color: #ebf6f4;

		.upload-progress {
			height: 10px;
			background-color: #04cd8e;
			border-radius: 5px;
		}
	}
}

@media screen and (max-width: 567px){
	#container{
		width: 85%;
	}
}
</style>
