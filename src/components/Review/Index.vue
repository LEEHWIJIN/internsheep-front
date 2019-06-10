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
                <span v-model="cOccupation"><span style="font-weight:bold;">{{cOccupation}}<br></span></span>
              </div>
            </div>

            <form class="row" v-on:submit.prevent='submitFileAndReview'>
            <div class="col-lg-12 mb-3">
              <li><label style="font-weight:bold;"> 별점</label></li>
              <fieldset class="rating ml-3">
                <input type="radio" id="star5" name="rating" value="5"/><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                <!--<input type="radio" id="star4half" name="rating" value="4 and a half" onclick="return false"/><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>-->
                <input type="radio" id="star4" name="rating" value="4"/><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                <!--<input type="radio" id="star3half" name="rating" value="3 and a half" onclick="return false"/><label class="half" for="star3half" title="Meh - 3.5 stars"></label>-->
                <input type="radio" id="star3" name="rating" value="3"/><label class = "full" for="star3" title="Meh - 3 stars"></label>
                <!--<input type="radio" id="star2half" name="rating" value="2 and a half" onclick="return false"/><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>-->
                <input type="radio" id="star2" name="rating" value="2"/><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                <!--<input type="radio" id="star1half" name="rating" value="1 and a half" onclick="return false"/><label class="half" for="star1half" title="Meh - 1.5 stars"></label>-->
                <input type="radio" id="star1" name="rating" value="1"/><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                <!--<input type="radio" id="starhalf" name="rating" value="half" onclick="return false"/><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>-->
              </fieldset>
            </div>

            <!-- 후기 작성란 -->
            <div class="col-lg-12 mb-4">
              <li><label style="font-weight:bold;"> 실습 후기 제목</label></li>
            </div>

            <div class="col-lg-12 mb-4">
              <textarea class="form-control mb-4" v-model="reviewTitle" placeholder="실습 제목을 써주세요."></textarea>
            </div>

            <div class="col-lg-12">
              <li><label style="font-weight:bold;"> 실습 후기 내용 </label></li>
            </div>

            <div class="col-lg-12 mb-4">
              <textarea class="form-control mb-4" v-model="review" placeholder="실습 내용, 사내문화 등을 자유롭게 평가해주세요."></textarea>
            </div>

            <div class="col-12 text-center">
              <button class="btn btn-primary" type="submit">저장하기</button>
            </div>
            </form>
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
  export default{
      name: 'review',
      data() {
        return {
          user:{},
          review : "",
          reviewTitle : "",
          cName : "",
          cOccupation : "",
          confirm : 0
        }
      },
      components: {
          VBase,
          VFooter,
          VCategory,
      },
      async created(){
          await this.$http.get(Const.API_SERVER+'/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
              this.user = res.data.user;
              return this.user.loginId
          })
          await this.$http.get(Const.API_SERVER+'/admin/recentApplyTerm').then((response) => {
                  this.applyTerm = {
                      applyStart : response.data.applyStart,
                      applyEnd : response.data.applyEnd,
                      applySemester : response.data.applySemester,
                      applyOrder : response.data.applyOrder
                  }
              })
          await this.$http.get(Const.API_SERVER+'/std/mypage/checkReportTerm',{params:{sLoginID : this.user.loginId, applySemester: this.applyTerm.applySemester}}).then(res => {
              if(res.data =='실습한 기업 없음'){
                  alert('실습한 기업이 없습니다.')
                  this.$router.push({name: "Home"})
              }
              else if(res.data == 0){
                  alert('후기 작성기간이 아닙니다.')
                  this.$router.push({name: "Home"})
              }
          })
          await this.loadReview();
      },
      methods: {
          loadReview(){
              this.$http.get(Const.API_SERVER+'/std/mypage/watchReview',{params:{sLoginID : this.user.loginId}}).then((response)=>{
                  if(response.data != '0'){
                      this.confirm = 1
                      this.cName = response.data.cName
                      this.reviewTitle = response.data.reviewTitle
                      this.starScore = response.data.starScore
                      this.review = response.data.reviewContent
                      this.cOccupation = response.data.cOccupation
                  }
                  var starScore = document.getElementsByName("rating").length;
                  for(var i=0;i<starScore;i++){
                      if(this.starScore==document.getElementsByName("rating")[i].value){
                          document.getElementsByName("rating")[i].checked = true;
                      }
                  }
              })
          },
          submitFileAndReview(){
              var starScore = document.getElementsByName("rating").length;
              for(var i=0;i<starScore;i++){
                  if(document.getElementsByName("rating")[i].checked == true) {
                      var startScoreValue = document.getElementsByName("rating")[i].value;
                  }
              }
              if(this.confirm == 0) {
                  this.$http.post(Const.API_SERVER+'/std/mypage/postReview',{sLoginID : this.user.loginId, starScore : startScoreValue, reviewContent : this.review, reviewTitle : this.reviewTitle}).then(
                      response => {
                        alert("후기가 작성되었습니다.");
                        location.reload();
                      }
                  )
              }
              else{
                  this.$http.post(Const.API_SERVER+'/std/mypage/modifyReview', {sLoginID : this.user.loginId, starScore :  startScoreValue, reviewContent : this.review, reviewTitle : this.reviewTitle}).then(
                      response => {
                        alert("후기가 수정되었습니다.");
                        location.reload();
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
