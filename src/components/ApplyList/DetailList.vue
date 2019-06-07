<template>
  <div id="applyList">
    <div class="companyList">
      <div v-for='sc in selectedCo' :key="sc.cNoticeID">
        <!-- 파란 사각형 -->
        <div class="topImage shadow-sm" style="line-height:130%">
          <div class="row">
            <div class="col-lg-12 mb-4">
              <div class="heart mr-sm-2 mt-sm-2">
                <!-- 만약 찜했을 경우 font-weight: bold; 로 바꾸면 됨. -->
                <i class="far fa-heart" style="margin-left: 18px;"><span @click="pickCo(sc.cName)" style="font-color:white; font-weight: bold;cursor:Pointer"> 기업 찜하기</span></i>
              </div>
              <div class="apply">
                <i class="fas fa-walking" ><span @click="applyStd(sc.cName)" style="font-color:white;cursor:Pointer;"> 지원하기</span></i>
              </div>
            </div>

            <div class="col-lg-12">
              <div class="job-intro media align-items-center flex-column flex-sm-row">
                <!-- 회사 사진 -->
                <img src="images/career/logo-1.png" class="img mr-sm-0 mb-4 mb-sm-0 rounded p-3" alt="logo-1">
                <div class="info media-body text-center text-sm-left mb-4 mb-sm-0" style="line-height:120%;">
                  <!-- 모집 직군 -->
                  <span class="text-white" style="font-size: 20px;">{{sc.cOccupation}}<br></span>
                  <!-- 기업명 -->
                  <span class="text-white" style="font-size: 13px;">{{sc.cName}}<br></span>
                  <!-- 태그 -->
                  <span class="text-white" style="font-size: 13px;">{{sc.cTag}}<br></span>
                </div>
                <!-- 경쟁률 -->
                <div class="" style="line-height:120%">
                  <br><br>
                  <a class="mr-sm-2 mb-sm-2 paragraph text-white">
                    <span class="text-white" style="font-size: 13px">모집:</span>{{sc.cNumOfPeople}}
                    <span class="h4 text-white"><span style="font-size: 13px">지원:</span>{{sc.applyStdNum}}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- 상세 정보  -->
        <ul class="list-unstyled pt-4 pl-3" >
          <li class="d-flex mb-4">
            <i class="fa fa-building icon-grey"></i>
            <div class="pl-3">
              <h6 style="font-weight:bold" class="text-dark">회사 소개</h6>
              <ul class="list-unstyled">
                <li style="font-size:14px;">{{sc.cInfo}}</li>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-briefcase icon-grey"></i>
            <div class="pl-3">
              <h6 style="font-weight:bold"  class="text-dark">모집 분야</h6>
              <ul class="list-unstyled">
                <li style="font-size:14px;">{{sc.cOccupation}}</li>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-users icon-grey"></i>
            <div class="pl-3">
              <h6 style="font-weight:bold"  class="text-dark">모집 인원</h6>
              <ul class="list-unstyled">
                <li style="font-size:14px;">{{sc.cNumOfPeople}}명</li>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-won-sign icon-grey"></i>
            <div class="pl-3">
              <h6 style="font-weight:bold"  class="text-dark">급여</h6>
              <ul class="list-unstyled">
                <li style="font-size:14px;">{{sc.cPay}}</li>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-coffee icon-grey"></i>
            <div class="pl-3">
              <h6 style="font-weight:bold"  class="text-dark">복리 후생</h6>
              <ul class="list-unstyled">
                <li style="font-size:14px;">{{sc.cBenefit}}</li>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-calendar icon-grey"></i>
            <div class="pl-3">
              <h6 style="font-weight:bold"  class="text-dark">실습 기간</h6>
              <ul class="list-unstyled">
                <li style="font-size:14px;">{{sc.internTermStart}} ~ {{sc.internTermEnd}}</li>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-map-o icon-grey"></i>
            <div class="pl-3">
              <h6 style="font-weight:bold"  class="text-dark">주소</h6>
              <ul class="list-unstyled">
                <li class="mb-1">{{sc.cLocation}}</li>
                <vue-daum-map :draggable="false" :appKey="appKey" :center.sync="center" :level.sync="level" :mapTypeId="mapTypeId" :libraries="libraries" @load="onLoad" style="width:520px;height:300px;">
                </vue-daum-map>
              </ul>
            </div>
          </li>

          <li class="d-flex mb-4">
            <i class="fa fa-envelope-o icon-grey"></i>
            <div class="pl-3">
              <h6 style="font-weight:bold"  class="text-dark">Email</h6>
              <ul class="list-unstyled">
                <li style="font-size:14px;">{{sc.cEmail}}</li>
              </ul>
            </div>
          </li>

        <li class="d-flex mb-4">
          <i class="fa fa-phone icon-grey"></i>
          <div class="pl-3">
            <h6 style="font-weight:bold"  class="text-dark">담당자 성함 및 연락처</h6>
            <ul class="list-unstyled">
              <li style="font-size:14px;">{{sc.cManagerName}} {{sc.cManagerPhone}}</li>
            </ul>
          </div>
        </li>

        <li class="d-flex ">
          <i class="fas fa-user-edit"></i>
          <div class="pl-3">
            <h6 style="font-weight:bold"  class="text-dark mb-3">기업 평가</h6>
          </div>
        </li>

        <div class="row text-center p-4 ml-3 mb-3 " style="line-height: 100%; border: 1px solid #bcbcbc; border-radius: 2rem; margin-right:50px; padding-left:50px; padding-bottom:0px; padding-top:20px;">
            <div class="col-lg-6">
              <div class="">
                <fieldset class="rating ">
                  <input type="radio" id="star5" name="rating" value="5" onclick="return false" checked="true"/><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                  <!--<input type="radio" id="star4half" name="rating" value="4 and a half" onclick="return false"/><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>-->
                  <input type="radio" id="star4" name="rating" value="4" onclick="return false"/><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                  <!--<input type="radio" id="star3half" name="rating" value="3 and a half" onclick="return false"/><label class="half" for="star3half" title="Meh - 3.5 stars"></label>-->
                  <input type="radio" id="star3" name="rating" value="3" onclick="return false"/><label class = "full" for="star3" title="Meh - 3 stars"></label>
                  <!--<input type="radio" id="star2half" name="rating" value="2 and a half" onclick="return false"/><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>-->
                  <input type="radio" id="star2" name="rating" value="2" onclick="return false"/><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                  <!--<input type="radio" id="star1half" name="rating" value="1 and a half" onclick="return false"/><label class="half" for="star1half" title="Meh - 1.5 stars"></label>-->
                  <input type="radio" id="star1" name="rating" value="1" onclick="return false"/><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                  <!--<input type="radio" id="starhalf" name="rating" value="half" onclick="return false"/><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>-->
                </fieldset> <span class="ml-3 pt-1" > {{starNum[5]}}명 </span><br>
              </div><br>
              <div class="">
                <fieldset class="rating ">
                  <input type="radio" id="star5-2" name="rating-2" value="5" onclick="return false"/><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                  <!--<input type="radio" id="star4half" name="rating" value="4 and a half" onclick="return false"/><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>-->
                  <input type="radio" id="star4-2" name="rating-2" value="4" onclick="return false" checked="true"/><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                  <!--<input type="radio" id="star3half" name="rating" value="3 and a half" onclick="return false"/><label class="half" for="star3half" title="Meh - 3.5 stars"></label>-->
                  <input type="radio" id="star3-2" name="rating-2" value="3" onclick="return false"/><label class = "full" for="star3" title="Meh - 3 stars"></label>
                  <!--<input type="radio" id="star2half" name="rating" value="2 and a half" onclick="return false"/><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>-->
                  <input type="radio" id="star2-2" name="rating-2" value="2" onclick="return false"/><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                  <!--<input type="radio" id="star1half" name="rating" value="1 and a half" onclick="return false"/><label class="half" for="star1half" title="Meh - 1.5 stars"></label>-->
                  <input type="radio" id="star1-2" name="rating-2" value="1" onclick="return false"/><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                  <!--<input type="radio" id="starhalf" name="rating" value="half" onclick="return false"/><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>-->
                </fieldset>  <span class="ml-3 pt-1" > {{starNum[4]}}명 </span><br>
              </div><br>
              <div class="">
                <fieldset class="rating">
                  <input type="radio" id="star5-3" name="rating-3" value="5" onclick="return false"/><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                  <!--<input type="radio" id="star4half" name="rating" value="4 and a half" onclick="return false"/><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>-->
                  <input type="radio" id="star4-3" name="rating-3" value="4" onclick="return false" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                  <!--<input type="radio" id="star3half" name="rating" value="3 and a half" onclick="return false"/><label class="half" for="star3half" title="Meh - 3.5 stars"></label>-->
                  <input type="radio" id="star3-3" name="rating-3" value="3" onclick="return false"checked="true"/><label class = "full" for="star3" title="Meh - 3 stars"></label>
                  <!--<input type="radio" id="star2half" name="rating" value="2 and a half" onclick="return false"/><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>-->
                  <input type="radio" id="star2-3" name="rating-3" value="2" onclick="return false"/><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                  <!--<input type="radio" id="star1half" name="rating" value="1 and a half" onclick="return false"/><label class="half" for="star1half" title="Meh - 1.5 stars"></label>-->
                  <input type="radio" id="star1-3" name="rating-3" value="1" onclick="return false"/><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                  <!--<input type="radio" id="starhalf" name="rating" value="half" onclick="return false"/><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>-->
                </fieldset>  <span class="ml-3 pt-1" > {{starNum[3]}}명 </span><br>
              </div><br>
              <div class="">
                <fieldset class="rating">
                  <input type="radio" id="star5-4" name="rating-4" value="5" onclick="return false"/><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                  <!--<input type="radio" id="star4half" name="rating" value="4 and a half" onclick="return false"/><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>-->
                  <input type="radio" id="star4-4" name="rating-4" value="4" onclick="return false" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                  <!--<input type="radio" id="star3half" name="rating" value="3 and a half" onclick="return false"/><label class="half" for="star3half" title="Meh - 3.5 stars"></label>-->
                  <input type="radio" id="star3-4" name="rating-4" value="3" onclick="return false"/><label class = "full" for="star3" title="Meh - 3 stars"></label>
                  <!--<input type="radio" id="star2half" name="rating" value="2 and a half" onclick="return false"/><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>-->
                  <input type="radio" id="star2-4" name="rating-4" value="2" onclick="return false" checked="true"/><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                  <!--<input type="radio" id="star1half" name="rating" value="1 and a half" onclick="return false"/><label class="half" for="star1half" title="Meh - 1.5 stars"></label>-->
                  <input type="radio" id="star1-4" name="rating-4" value="1" onclick="return false"/><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                  <!--<input type="radio" id="starhalf" name="rating" value="half" onclick="return false"/><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>-->
                </fieldset>  <span class="ml-3 pt-1" > {{starNum[2]}}명 </span><br>
              </div><br>
              <div class="">
                <fieldset class="rating">
                  <input type="radio" id="star5-5" name="rating-5" value="5" onclick="return false"/><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                  <!--<input type="radio" id="star4half" name="rating" value="4 and a half" onclick="return false"/><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>-->
                  <input type="radio" id="star4-5" name="rating-5" value="4" onclick="return false" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                  <!--<input type="radio" id="star3half" name="rating" value="3 and a half" onclick="return false"/><label class="half" for="star3half" title="Meh - 3.5 stars"></label>-->
                  <input type="radio" id="star3-5" name="rating-5" value="3" onclick="return false"/><label class = "full" for="star3" title="Meh - 3 stars"></label>
                  <!--<input type="radio" id="star2half" name="rating" value="2 and a half" onclick="return false"/><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>-->
                  <input type="radio" id="star2-5" name="rating-5" value="2" onclick="return false" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                  <!--<input type="radio" id="star1half" name="rating" value="1 and a half" onclick="return false"/><label class="half" for="star1half" title="Meh - 1.5 stars"></label>-->
                  <input type="radio" id="star1-5" name="rating-5" value="1" onclick="return false" checked="true"/><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                  <!--<input type="radio" id="starhalf" name="rating" value="half" onclick="return false"/><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>-->
                </fieldset> <span class="ml-3 pt-1" > {{starNum[1]}}명 </span><br>
              </div><br>
              <div class="">
                <fieldset class="rating">
                  <input type="radio" id="star5-6" name="rating-6" value="5" onclick="return false"/><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                  <!--<input type="radio" id="star4half" name="rating" value="4 and a half" onclick="return false"/><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>-->
                  <input type="radio" id="star4-6" name="rating-6" value="4" onclick="return false" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                  <!--<input type="radio" id="star3half" name="rating" value="3 and a half" onclick="return false"/><label class="half" for="star3half" title="Meh - 3.5 stars"></label>-->
                  <input type="radio" id="star3-6" name="rating-6" value="3" onclick="return false"/><label class = "full" for="star3" title="Meh - 3 stars"></label>
                  <!--<input type="radio" id="star2half" name="rating" value="2 and a half" onclick="return false"/><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>-->
                  <input type="radio" id="star2-6" name="rating-6" value="2" onclick="return false" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                  <!--<input type="radio" id="star1half" name="rating" value="1 and a half" onclick="return false"/><label class="half" for="star1half" title="Meh - 1.5 stars"></label>-->
                  <input type="radio" id="star1-6" name="rating-6" value="1" onclick="return false"/><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                  <!--<input type="radio" id="starhalf" name="rating" value="half" onclick="return false"/><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>-->
                </fieldset> <span class="ml-3 pt-1" > {{starNum[0]}}명 </span><br>
              </div>
            </div>
            <div class="col-lg-6 text-center">
              <br><br><br><br>
              <div style="">
                <fieldset class="rating" style="margin-left:45px;">
                  <input type="radio" id="star5" name="search" value="5" onclick="return false"/><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                  <input type="radio" id="star4half" name="search" value="4 and a half" onclick="return false"/><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                  <input type="radio" id="star4" name="search" value="4" onclick="return false" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                  <input type="radio" id="star3half" name="search" value="3 and a half" onclick="return false"/><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                  <input type="radio" id="star3" name="search" value="3" onclick="return false"/><label class = "full" for="star3" title="Meh - 3 stars"></label>
                  <input type="radio" id="star2half" name="search" value="2 and a half" onclick="return false"/><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                  <input type="radio" id="star2" name="search" value="2" onclick="return false" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                  <input type="radio" id="star1half" name="search" value="1 and a half" onclick="return false"/><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                  <input type="radio" id="star1" name="search" value="1" onclick="return false" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                  <input type="radio" id="starhalf" name="search" value="half" onclick="return false"/><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                </fieldset> <br><br>
                <div class="mr-4">
                  총 평점 <span class="h5">{{AvgRatings()}}</span> / 5
                </div>
              </div>
            </div>
          </div>

            <div v-for="cr in companyReview" class="row p-4 ml-3 mb-3 " style="line-height: 100%; border-radius: 2rem; margin-right:50px; background:#F8F8F8; padding-left:1000px;">
              <ul class="list-unstyled">
                <li class="mb-3" style="font-size:14px;"><span style="font-weight:bold">인턴 기간</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{cr.internTermStart}} ~ {{cr.internTermEnd}}</li>
                <li class="mb-3" style="font-size:14px;"><span style="font-weight:bold">한줄 평가</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{cr.reviewTitle}}</li>
                <li  style="font-size:14px;"><span style="font-weight:bold">실습 후기</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{cr.reviewContent}}</li>
              </ul>
            </div>
          <div class="text-center mt-4">
            <button class="btn btn-primary btn-sm" @click="applyStd(sc.cName)">지원하기</button>
            <button class="btn btn-primary btn-sm ml-2" @click="">찜하기</button>
          </div>

        </ul>

      </div>
    </div>
  </div>
</template>


<script>
import VueDaumMap from 'vue-daum-map';
import Const from '../../constant/constant';
export default{
  name: 'applyList',
  data() {
    return {
        user : {},
        applyTerm : {},
        appKey: '843e68ace7c69cb699e9d969ee289d4c',
        center: {lat:33.450701, lng:126.570667},
        level: 3,
        libraries: ['services', 'clusterer', 'drawing'],
        mapTypeId: VueDaumMap.MapTypeId.NORMAL, // 맵 타입
        mapObject: null,
        map:null,
        isload : -1,
    }
  },
  components: {
      VueDaumMap
  },
  props:{
    selectedCo:{
        type:Array,
        required: true,
    },
    companyReview: {
        type:Array,
        required: true,
    },
    starNum: {
      type:Array,
      required: false,
    }
  },
  watch:{
    selectedCo : function(){
      if(this.isload==1){
        this.onLoad(this.map);
      }
    }
  },
  async beforeMount(){
    await this.$http.get('Const.API_SERVER/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
        this.user = res.data.user;
        return this.user;

        // var EnglishSearch = sEnglish.EnglishSearch;
        // var chkboxSr = document.getElementsByName('search').length;

        // var docheck = [];
        // for(var i=1;i<5;i++){
          // docheck.push(document.getElementsByName('search')[i].value);
          // if(EnglishSearch==docheck[i]){
          console.log(res.data.user);

          // }
        // }
    });

  },
  async created(){
    await this.$http.get('Const.API_SERVER/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
        this.user = res.data.user;
        return this.user;
    });
    await this.$http.get('Const.API_SERVER/admin/recentApplyTerm').then((response) => {
      this.applyTerm = {
          applyStart : response.data.applyStart,
          applyEnd : response.data.applyEnd,
          applySemester : response.data.applySemester,
          applyOrder : response.data.applyOrder
      }

      var sum = 0;
      var avg = 0;
      var numOfPeople = 0;
      for(var i=0;i<=5;i++){
        sum += (this.starNum[i])*(i);
        numOfPeople += this.starNum[i];
      }
      avg = sum/numOfPeople;

      console.log(avg);

      // document.getElementsByName('search')[10].checked = true;

      if(isNaN(avg)==false){
        if(avg<=0.7){
          document.getElementsByName('search')[10].checked = true;
        }
        else if(avg<=1.2){
          document.getElementsByName('search')[9].checked = true;
        }
        else if(avg<=1.7){
          document.getElementsByName('search')[8].checked = true;
        }
        else if(avg<=2.2){
          document.getElementsByName('search')[7].checked = true;
        }
        else if(avg<=2.7){
          document.getElementsByName('search')[6].checked = true;
        }
        else if(avg<=3.2){
          document.getElementsByName('search')[5].checked = true;
        }
        else if(avg<=3.7){
          document.getElementsByName('search')[4].checked = true;
        }
        else if(avg<=4.2){
          document.getElementsByName('search')[3].checked = true;
        }
        else if(avg<=4.7){
          document.getElementsByName('search')[2].checked = true;
        }
        else if(avg<=5){
          document.getElementsByName('search')[1].checked = true;
        }
      }

      return this.applyTerm;
    });
  },
  methods: {
    // readStarScore(){
    //     console.log(document.getElementById("review"))
    //     if(this.companyReview.length!=0) {
    //
    //         for (var k = 0; k < this.companyReview.length; k++) {
    //
    //             var starScore = document.getElementById("review")[k].getElementsByName("rating").length;
    //             for (var i = 0; i < starScore; i++) {
    //                 if (this.companyReview[k].starScore == document.getElementsByName("rating")[i].value) {
    //                     document.getElementsByName("rating")[i].checked = true;
    //                 }
    //             }
    //         }
    //     }
    // },
    AvgRatings(){
      var sum = 0;
      var avg = 0;
      var numOfPeople = 0;
      for(var i=0;i<=5;i++){
        sum += (this.starNum[i])*(i);
        numOfPeople += this.starNum[i];
      }
      avg = sum/numOfPeople;

      if(isNaN(avg)){
        return 0;
      }
      // document.getElementsByName('search')[9].checked = true;
      else{
        return avg;
      }
    },
    applyStd(cName){
        this.$http.get('Const.API_SERVER/std/mypage/applyStatus',{params:{sLoginID : this.user.loginId, applySemester : this.applyTerm.applySemester}}).then((response)=>{
        if(response.data == '합격하거나 심사중 상태'){
            alert("이미 지원을 한 상태 입니다.")
        }
        else{
            this.$http.post('Const.API_SERVER/std/mypage/applyCo',{cName : cName, sLoginID : this.user.loginId,applySemester: this.applyTerm.applySemester,applyOrder:this.applyTerm.applyOrder}).then((response) => {
                if(response.data == '0'){
                    alert("이력서가 없습니다. 이력서를 작성해주세요")
                }
                else {
                    alert("지원을 성공 하셨습니다.!")
                }
            })
        }
        })
    },
    onLoad (map) {
      this.map = map;
      this.isload = 1;
      var geocoder = new daum.maps.services.Geocoder();
      var self = this;
      geocoder.addressSearch(this.selectedCo[0].cLocation, function(result, status) {
        if (status === daum.maps.services.Status.OK) {
          self.center.lat = result[0].y;
          self.center.lng = result[0].x;
          var coords = new daum.maps.LatLng(result[0].y, result[0].x);
          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new daum.maps.Marker({
              map: map,
              position: coords
          });
          // 인포윈도우로 장소에 대한 설명을 표시합니다
          var infowindow = new daum.maps.InfoWindow({
              content: '<div style="width:150px;text-align:center;padding:6px 0;">회사</div>'
          });
          infowindow.open(map, marker);
          map.setCenter(coords);
        }
      });
    },
      async pickCo(cName){//체크된 회사인지 아닌지 확인하고 if 문걸어야 할것같음 0 : 아직 찜 하지 않은 회사임 1 : 찜한한 회사임
        await this.$http.get('Const.API_SERVER/std/mypage/checkPickCo',{params:{sLoginID : this.user.loginId,cName:cName,applySemester:this.applyTerm.applySemester,applyOrder:this.applyTerm.applyOrder}}).then((response)=>{
          if(response.data==0){//아직 지원하지 않은 회사이므로 찜 해야함
            this.postStdPickCo(cName);
            return 0;
          }
          else{ //지원한 회사이니까 찜목록 삭제해야함
            this.deleteStdPickCo(cName);
            return 0;
          }
          return;
        })
      },
      postStdPickCo(cName){
        this.$http.post('Const.API_SERVER/std/mypage/postStdPickCo',{cName : cName, sLoginID : this.user.loginId}).then((response) => {
            //꽉찬하트로 바꿔줘야 할것같음.
          if(response.data==0){
            // var heart = document.getElementsByClassName("fa-heart");
            // heart.style.font="bold";
            alert("찜이 되었습니다.");
            return ;
          }
          else{
            alert("찜이 되지 않았습니다. 다시 시도해주세요")
            return;
          }
        });
      },
      deleteStdPickCo(cName){
        this.$http.post('Const.API_SERVER/std/mypage/deleteStdPickCo',{cName : cName, sLoginID : this.user.loginId,applySemester:this.applyTerm.applySemester,applyOrder:this.applyTerm.applyOrder}).then((response) => {
          // var heart = document.getElementsByClassName("far fa-heart");
          // heart.style.font="regular";
          if(response.data==0){
              // var heart = document.getElementsByClassName("fa-heart");
              // heart.style.font="bold";
            alert("찜이 해제되었습니다.");
            return ;
          }
          else{
            alert("찜이 되지 않았습니다. 다시 시도해주세요")
            return 0;
          }
        })
      },
  }
}
</script>

<style scoped>

.companyList {
  padding: 10px;
}

.topImage {
  padding : 10px;
  background: linear-gradient(90deg, #62aaff 20%, #626aff 100%);
  height: 150px;
  border-radius: 5px;
}

.topImage i {
  font-size: 13px;
  color: white;
  float: right;
}

.job-intro p {
  font-color: white !important;
}

.img {
  height: 100px;
  width: 100px;
}

.info {
  color: white;
}

/****** Style Star Rating Widget *****/

.rating {
  border: none;
  float: left;
}

.rating > input { display: none; }
.rating > label:before {
  margin: 3px;
  font-size: 1em;
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
