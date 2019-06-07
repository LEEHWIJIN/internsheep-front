<template>
  <div class="row">
      <!-- 대제목 -->
    <div class="col-lg-12 text-center">
    <p class="subtitle">Skills</p>
    <h2 class="section-title">SW기술분야 숙련도</h2>
    <h3>다음 과목들에 대해 본인의 학점을 체크해 주세요.*</h3>
    </div>

    <!-- <input type="radio" name="js" value="배운적 없음" onclick="return false">배운적 없음<br> -->
    <!-- 이력서 내용 -->
    <div class="col-lg-12 p-0">
      <form class="row" v-on:submit.prevent='submitResume'>
        <div class="col-lg-6">
            <span>1. 프로그래밍/스크립트/마크업언어</span>
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Javascript</h6>
            <input class="inp-cbx" id="cbx1" name="js" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx1">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>배운적 없음</span>
              </label><br>
            <input class="inp-cbx" id="cbx2" name="js" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx2">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>맛보기 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx3" name="js" value="초보 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx3">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>초보 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx4" name="js" value="실무 가능" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx4">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>실무 가능</span>
              </label><br>
            <input class="inp-cbx" id="cbx5" name="js" value="나름 고수" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx5">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>나름 고수</span>
              </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">HTML</h6>
            <input class="inp-cbx" id="cbx6" name="ht" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx6">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>배운적 없음</span>
              </label><br>
            <input class="inp-cbx" id="cbx7" name="ht" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx7">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>맛보기 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx8" name="ht" value="초보 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx8">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>초보 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx9" name="ht" value="실무 가능" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx9">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>실무 가능</span>
              </label><br>
            <input class="inp-cbx" id="cbx10" name="ht" value="나름 고수" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx10">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>나름 고수</span>
              </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">CSS</h6>
            <input class="inp-cbx" id="cbx11" name="cs" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx11">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>배운적 없음</span>
              </label><br>
            <input class="inp-cbx" id="cbx12" name="cs" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx12">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>맛보기 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx13" name="cs" value="초보 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx13">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>초보 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx14" name="cs" value="실무 가능" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx14">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>실무 가능</span>
              </label><br>
            <input class="inp-cbx" id="cbx15" name="cs" value="나름 고수" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx15">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>나름 고수</span>
              </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">jQuery</h6>
            <input class="inp-cbx" id="cbx16" name="jq" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx16">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>배운적 없음</span>
              </label><br>
            <input class="inp-cbx" id="cbx17" name="jq" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx17">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>맛보기 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx18" name="jq" value="초보 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx18">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>초보 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx19" name="jq" value="실무 가능" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx19">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>실무 가능</span>
              </label><br>
            <input class="inp-cbx" id="cbx20" name="jq" value="나름 고수" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx20">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>나름 고수</span>
              </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">SQL</h6>
            <input class="inp-cbx" id="cbx21" name="sq" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx21">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>배운적 없음</span>
              </label><br>
            <input class="inp-cbx" id="cbx22" name="sq" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx22">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>맛보기 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx23" name="sq" value="초보 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx23">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>초보 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx24" name="sq" value="실무 가능" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx24">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>실무 가능</span>
              </label><br>
            <input class="inp-cbx" id="cbx25" name="sq" value="나름 고수" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx25">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>나름 고수</span>
              </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Java</h6>
            <input class="inp-cbx" id="cbx26" name="jv" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx26">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>배운적 없음</span>
              </label><br>
            <input class="inp-cbx" id="cbx27" name="jv" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx27">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>맛보기 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx28" name="jv" value="초보 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx28">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>초보 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx29" name="jv" value="실무 가능" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx29">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>실무 가능</span>
              </label><br>
            <input class="inp-cbx" id="cbx30" name="jv" value="나름 고수" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx30">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>나름 고수</span>
              </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Android Java</h6>
            <input class="inp-cbx" id="cbx31" name="aj" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx31">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>배운적 없음</span>
              </label><br>
            <input class="inp-cbx" id="cbx32" name="aj" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx32">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>맛보기 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx33" name="aj" value="초보 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx33">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>초보 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx34" name="aj" value="실무 가능" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx34">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>실무 가능</span>
              </label><br>
            <input class="inp-cbx" id="cbx35" name="aj" value="나름 고수" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx35">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>나름 고수</span>
              </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Swift</h6>
            <input class="inp-cbx" id="cbx36" name="sf" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx36">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>배운적 없음</span>
              </label><br>
            <input class="inp-cbx" id="cbx37" name="sf" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx37">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>맛보기 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx38" name="sf" value="초보 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx38">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>초보 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx39" name="sf" value="실무 가능" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx39">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>실무 가능</span>
              </label><br>
            <input class="inp-cbx" id="cbx40" name="sf" value="나름 고수" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx40">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>나름 고수</span>
              </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Objective-C</h6>
            <input class="inp-cbx" id="cbx41" name="ob" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx41">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>배운적 없음</span>
              </label><br>
            <input class="inp-cbx" id="cbx42" name="ob" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx42">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>맛보기 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx43" name="ob" value="초보 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx43">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>초보 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx44" name="ob" value="실무 가능" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx44">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>실무 가능</span>
              </label><br>
            <input class="inp-cbx" id="cbx45" name="ob" value="나름 고수" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx45">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>나름 고수</span>
              </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Python</h6>
            <input class="inp-cbx" id="cbx46" name="py" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx46">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>배운적 없음</span>
              </label><br>
            <input class="inp-cbx" id="cbx47" name="py" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx47">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>맛보기 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx48" name="py" value="초보 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx48">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>초보 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx49" name="py" value="실무 가능" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx49">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>실무 가능</span>
              </label><br>
            <input class="inp-cbx" id="cbx50" name="py" value="나름 고수" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx50">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>나름 고수</span>
              </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">PHP</h6>
            <input class="inp-cbx" id="cbx51" name="ph" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx51">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>배운적 없음</span>
              </label><br>
            <input class="inp-cbx" id="cbx52" name="ph" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx52">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>맛보기 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx53" name="ph" value="초보 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx53">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>초보 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx54" name="ph" value="실무 가능" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx54">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>실무 가능</span>
              </label><br>
            <input class="inp-cbx" id="cbx55" name="ph" value="나름 고수" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx55">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>나름 고수</span>
              </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">C/C++</h6>
            <input class="inp-cbx" id="cbx56" name="langC" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx56">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>배운적 없음</span>
              </label><br>
            <input class="inp-cbx" id="cbx57" name="langC" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx57">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>맛보기 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx58" name="langC" value="초보 수준" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx58">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>초보 수준</span>
              </label><br>
            <input class="inp-cbx" id="cbx59" name="langC" value="실무 가능" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx59">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>실무 가능</span>
              </label><br>
            <input class="inp-cbx" id="cbx60" name="langC" value="나름 고수" type="radio" style="display: none;" onclick="return false">
              <label class="cbx" for="cbx60">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>나름 고수</span>
              </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Microsoft C#</h6>
                <input class="inp-cbx" id="cbx61" name="mi" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx61">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx62" name="mi" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx62">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx63" name="mi" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx63">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx64" name="mi" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx64">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx65" name="mi" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx65">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
              <h6 style="font-weight:bold">Kotlin</h6>
              <input class="inp-cbx" id="cbx66" name="kot" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                <label class="cbx" for="cbx66">
                  <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                  </span>
                  <span>배운적 없음</span>
                </label><br>
              <input class="inp-cbx" id="cbx67" name="kot" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                <label class="cbx" for="cbx67">
                  <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                  </span>
                  <span>맛보기 수준</span>
                </label><br>
              <input class="inp-cbx" id="cbx68" name="kot" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                <label class="cbx" for="cbx68">
                  <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                  </span>
                  <span>초보 수준</span>
                </label><br>
              <input class="inp-cbx" id="cbx69" name="kot" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                <label class="cbx" for="cbx69">
                  <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                  </span>
                  <span>실무 가능</span>
                </label><br>
              <input class="inp-cbx" id="cbx70" name="kot" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                <label class="cbx" for="cbx70">
                  <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                  </span>
                  <span>나름 고수</span>
                </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Peral</h6>
                <input class="inp-cbx" id="cbx71" name="per" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx71">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx72" name="per" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx72">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx73" name="per" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx73">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx74" name="per" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx74">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx75" name="per" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx75">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">R</h6>
                <input class="inp-cbx" id="cbx76" name="langR" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx76">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx77" name="langR" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx77">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx78" name="langR" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx78">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx79" name="langR" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx79">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx80" name="langR" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx80">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">VBA</h6>
                <input class="inp-cbx" id="cbx81" name="langvba" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx81">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx82" name="langvba" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx82">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx83" name="langvba" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx83">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx84" name="langvba" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx84">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx85" name="langvba" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx85">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <span>2. 프레임워크, 라이브러리, 도구</span>
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Node.js</h6>
                <input class="inp-cbx" id="cbx86" name="nj" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx86">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx87" name="nj" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx87">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx88" name="nj" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx88">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx89" name="nj" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx89">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx90" name="nj" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx90">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                    </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Angular</h6>
                <input class="inp-cbx" id="cbx91" name="an" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx91">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx92" name="an" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx92">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx93" name="an" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx93">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx94" name="an" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx94">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx95" name="an" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx95">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">React</h6>
                <input class="inp-cbx" id="cbx96" name="rt" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx96">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx97" name="rt" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx97">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx98" name="rt" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx98">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx99" name="rt" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx99">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx100" name="rt" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx100">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Express.js</h6>
                <input class="inp-cbx" id="cbx101" name="ej" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx101">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx102" name="ej" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx102">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx103" name="ej" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx103">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx104" name="ej" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx104">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx105" name="ej" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx105">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">.Net Core</h6>
                <input class="inp-cbx" id="cbx106" name="net" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx106">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx107" name="net" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx107">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx108" name="net" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx108">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx109" name="net" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx109">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx110" name="net" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx110">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Spring</h6>
                <input class="inp-cbx" id="cbx111" name="spr" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx111">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx112" name="spr" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx112">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx113" name="spr" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx113">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx114" name="spr" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx114">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx115" name="spr" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx115">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Django</h6>
                <input class="inp-cbx" id="cbx116" name="dj" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx116">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx117" name="dj" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx117">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx118" name="dj" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx118">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx119" name="dj" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx119">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx120" name="dj" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx120">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Flask</h6>
                  <input class="inp-cbx" id="cbx121" name="fl" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                    <label class="cbx" for="cbx121">
                      <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                      </span>
                      <span>배운적 없음</span>
                    </label><br>
                  <input class="inp-cbx" id="cbx122" name="fl" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                    <label class="cbx" for="cbx122">
                      <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                      </span>
                      <span>맛보기 수준</span>
                    </label><br>
                  <input class="inp-cbx" id="cbx123" name="fl" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                    <label class="cbx" for="cbx123">
                      <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                      </span>
                      <span>초보 수준</span>
                    </label><br>
                  <input class="inp-cbx" id="cbx124" name="fl" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                    <label class="cbx" for="cbx124">
                      <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                      </span>
                      <span>실무 가능</span>
                    </label><br>
                  <input class="inp-cbx" id="cbx125" name="fl" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                    <label class="cbx" for="cbx125">
                      <span>
                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                      </span>
                      <span>나름 고수</span>
                    </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Cordova</h6>
                <input class="inp-cbx" id="cbx126" name="cd" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx126">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx127" name="cd" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx127">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx128" name="cd" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx128">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx129" name="cd" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx129">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx130" name="cd" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx130">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <span>3. 데이터베이스</span>
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">MySql</h6>
                <input class="inp-cbx" id="cbx131" name="mys" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx131">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx132" name="mys" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx132">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx133" name="mys" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx133">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx134" name="mys" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx134">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx135" name="mys" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx135">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">SQL Server</h6>
                <input class="inp-cbx" id="cbx136" name="sqls" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx136">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx137" name="sqls" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx137">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx138" name="sqls" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx138">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx139" name="sqls" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx139">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx140" name="sqls" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx140">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">MongoDB</h6>
                <input class="inp-cbx" id="cbx141" name="mong" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx141">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx142" name="mong" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx142">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx143" name="mong" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx143">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx144" name="mong" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx144">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx145" name="mong" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx145">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">SQLite</h6>
                <input class="inp-cbx" id="cbx146" name="sqli" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx146">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx147" name="sqli" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx147">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx148" name="sqli" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx148">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx149" name="sqli" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx149">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx150" name="sqli" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx150">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Redis</h6>
                <input class="inp-cbx" id="cbx151" name="rdis" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx151">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx152" name="rdis" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx152">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cb153" name="rdis" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx153">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx154" name="rdis" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx154">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx155" name="rdis" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx155">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Oracle</h6>
                <input class="inp-cbx" id="cbx156" name="orl" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx156">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx157" name="orl" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx157">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx158" name="orl" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx158">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx159" name="orl" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx159">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx160" name="orl" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx160">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Flask</h6>
                <input class="inp-cbx" id="cbx161" name="fla_data" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx161">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx162" name="fla_data" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx162">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx163" name="fla_data" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx163">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx164" name="fla_data" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx164">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx165" name="fla_data" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx165">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Cordova</h6>
                <input class="inp-cbx" id="cbx166" name="cor_data" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx166">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx167" name="cor_data" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx167">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx168" name="cor_data" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx168">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx169" name="cor_data" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx169">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx170" name="cor_data" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx170">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <span>4. 클라우드 / 플랫폼 / 운영체제</span>
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">AWS</h6>
                <input class="inp-cbx" id="cbx171" name="aw" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx171">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx172" name="aw" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx172">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx173" name="aw" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx173">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx174" name="aw" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx174">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx175" name="aw" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx175">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Azure</h6>
                <input class="inp-cbx" id="cbx176" name="az" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx176">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx177" name="az" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx177">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx178" name="az" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx178">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx179" name="az" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx179">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx180" name="az" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx180">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
              <input class="inp-cbx" id="cbx181" name="gc" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                <label class="cbx" for="cbx181">
                  <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                  </span>
                  <span>배운적 없음</span>
                </label><br>
              <input class="inp-cbx" id="cbx182" name="gc" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                <label class="cbx" for="cbx182">
                  <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                  </span>
                  <span>맛보기 수준</span>
                </label><br>
              <input class="inp-cbx" id="cbx183" name="gc" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                <label class="cbx" for="cbx183">
                  <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                  </span>
                  <span>초보 수준</span>
                </label><br>
              <input class="inp-cbx" id="cbx184" name="gc" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                <label class="cbx" for="cbx184">
                  <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                  </span>
                  <span>실무 가능</span>
                </label><br>
              <input class="inp-cbx" id="cbx185" name="gc" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                <label class="cbx" for="cbx185">
                  <span>
                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                  </span>
                  <span>나름 고수</span>
                </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Linux</h6>
                <input class="inp-cbx" id="cbx186" name="lin" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx186">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx187" name="lin" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx187">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx188" name="lin" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx188">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx189" name="lin" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx189">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx190" name="lin" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx190">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Wordpress</h6>
                <input class="inp-cbx" id="cbx191" name="wp" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx191">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx192" name="wp" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx192">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx193" name="wp" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx193">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx194" name="wp" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx194">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx195" name="wp" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx195">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Raspberry Pi</h6>
                <input class="inp-cbx" id="cbx196" name="rp" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx196">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx197" name="rp" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx197">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx198" name="rp" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx198">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx199" name="rp" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx199">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx200" name="rp" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx200">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Arduino</h6>
                <input class="inp-cbx" id="cbx201" name="ard" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx201">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx202" name="ard" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx202">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx203" name="ard" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx203">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx204" name="ard" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx204">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx205" name="ard" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx205">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Firebase</h6>
                <input class="inp-cbx" id="cbx206" name="fire" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx206">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx207" name="fire" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx207">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx208" name="fire" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx208">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx209" name="fire" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx209">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx210" name="fire" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx210">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Docker</h6>
                <input class="inp-cbx" id="cbx211" name="dock" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx211">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx212" name="dock" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx212">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx213" name="dock" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx213">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx214" name="dock" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx214">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx215" name="dock" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx215">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Go Ethereum / Solidity</h6>
                <input class="inp-cbx" id="cbx216" name="goe" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx216">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx217" name="goe" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx217">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx218" name="goe" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx218">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx219" name="goe" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx219">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx220" name="goe" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx220">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <span>5. 머신러닝 / VR / AR / 비전</span>
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Tensorflow</h6>
                <input class="inp-cbx" id="cbx221" name="tens" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx221">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx222" name="tens" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx222">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx223" name="tens" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx223">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx224" name="tens" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx224">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx225" name="tens" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx225">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Caffe</h6>
                <input class="inp-cbx" id="cbx226" name="caf" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx226">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx227" name="caf" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx227">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx228" name="caf" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx228">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx229" name="caf" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx229">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx230" name="caf" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx230">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">OpenCV</h6>
                <input class="inp-cbx" id="cbx231" name="ocv" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx231">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx232" name="ocv" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx232">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx233" name="ocv" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx233">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx234" name="ocv" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx234">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx235" name="ocv" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx235">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">DLib</h6>
                <input class="inp-cbx" id="cbx236" name="dli" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx236">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx237" name="dli" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx237">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx238" name="dli" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx238">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx239" name="dli" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx239">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx240" name="dli" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx240">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">OpenGL</h6>
                <input class="inp-cbx" id="cbx241" name="ogl" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx241">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx242" name="ogl" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx242">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx243" name="ogl" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx243">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx244" name="ogl" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx244">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx245" name="ogl" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx245">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Unity</h6>
                <input class="inp-cbx" id="cbx246" name="uni" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx246">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx247" name="uni" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx247">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx248" name="uni" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx248">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx249" name="uni" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx249">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx250" name="uni" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx250">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <br>
         <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Arduino</h6>
                <input class="inp-cbx" id="cbx251" name="ardu_mac" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx251">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx252" name="ardu_mac" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx252">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx253" name="ardu_mac" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx253">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx254" name="ardu_mac" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx254">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx255" name="ardu_mac" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx255">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Firebase</h6>
                <input class="inp-cbx" id="cbx256" name="fir_mac" value="배운적 없음" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx256">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>배운적 없음</span>
                  </label><br>
                <input class="inp-cbx" id="cbx257" name="fir_mac" value="맛보기 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx257">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>맛보기 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx258" name="fir_mac" value="초보 수준" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx258">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>초보 수준</span>
                  </label><br>
                <input class="inp-cbx" id="cbx259" name="fir_mac" value="실무 가능" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx259">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>실무 가능</span>
                  </label><br>
                <input class="inp-cbx" id="cbx260" name="fir_mac" value="나름 고수" type="radio" style="display: none;" onclick="return false">
                  <label class="cbx" for="cbx260">
                    <span>
                      <svg width="12px" height="10px" viewbox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>나름 고수</span>
                  </label><br>
            </div>
        </div>
        <br>
        <div class="col-12 text-center">
            <button class="btn btn-primary" type="submit">제출하기</button>
        </div>
      </form>
      <button class="btn btn-light mr-4" @click="before">이전</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
  export default{
    name: 'UserGrade',
    data() {
        return {
            user:{},
            programmingLang : {
                Javascript : [],
                HTML : [],
                CSS : [],
                jQuery : [],
                SQL : [],
                Java : [],
                AndroidJava : [],
                Swift : [],
                Objective : [],
                Python : [],
                PHP : [],
                C : [],
                Microsoft : [],
                Kotlin : [],
                Peral : [],
                R : [],
                VBA : [],
            },
            frameworkLang : {
                Nodejs : [],
                Angular : [],
                React : [],
                Expressjs : [],
                NetCore : [],
                Spring : [],
                Django : [],
                Flask : [],
                Cordova : [],
            },
            databaseLang : {
                MySql : [],
                SQLServer : [],
                MongoDB : [],
                SQLite : [],
                Redis : [],
                Oracle : [],
                Flask : [],
                Cordova : [],
            },
            cloudLang : {
                AWS : [],
                Azure : [],
                GCP : [],
                Linux : [],
                Wordpress : [],
                RaspberryPi : [],
                Arduino : [],
                Firebase : [],
                Docker : [],
                Go : [],
            },
            machineLang : {
                Tensorflow : [],
                Caffe : [],
                OpenCV : [],
                DLib : [],
                OpenGL : [],
                Unity : [],
                Arduino : [],
                Firebase : [],
            },
        }
    },
    components: {
    // VBase,
    },
    computed: {
        ...mapGetters({
            getUserInfo : 'resume/getUserInfo',
            getUserEng : 'resume/getUserEng',
            getUserGrade : 'resume/getUserGrade',
            getUserSW : 'resume/getUserSW',
        }),
    },
    async beforeMount(){
        await this.$http.get('API_SERVER/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
            //console.log(res.data.user);
            return this.user = res.data.user;
        });
        await this.$http.get('API_SERVER/std/mypage/watchResume',{params:{sLoginID : this.user.loginId}}).then(res =>{
            //  console.log(res)
            var programmingLang = JSON.parse(res.data.programmingLang);
            var Javascript = programmingLang.Javascript;
            var HTML = programmingLang.HTML;
            var CSS = programmingLang.CSS;
            var jQuery = programmingLang.jQuery;
            var SQL = programmingLang.SQL;
            var Java = programmingLang.Java;
            var AndroidJava = programmingLang.AndroidJava;
            var Swift = programmingLang.Swift;
            var Objective = programmingLang.Objective;
            var Python = programmingLang.Python;
            var PHP = programmingLang.PHP;
            var C = programmingLang.C;
            var Microsoft = programmingLang.Microsoft;
            var Kotlin = programmingLang.Kotlin;
            var Peral = programmingLang.Peral;
            var R = programmingLang.R;
            var VBA = programmingLang.VBA;

            var frameworkLang = JSON.parse(res.data.frameworkLang);
            var Nodejs = frameworkLang.Nodejs;
            var Angular = frameworkLang.Angular;
            var React = frameworkLang.React;
            var Expressjs = frameworkLang.Expressjs;
            var NetCore = frameworkLang.NetCore;
            var Spring = frameworkLang.Spring;
            var Django = frameworkLang.Django;
            var Flask = frameworkLang.Flask;
            var Cordova = frameworkLang.Cordova;

            var databaseLang = JSON.parse(res.data.databaseLang);
            var MySql = databaseLang.MySql;
            var SQLServer = databaseLang.SQLServer;
            var MongoDB = databaseLang.MongoDB;
            var SQLite = databaseLang.SQLite;
            var Redis = databaseLang.Redis;
            var Oracle = databaseLang.Oracle;
            var Flask_data = databaseLang.Flask;
            var Cordova_data = databaseLang.Cordova;

            var cloudLang = JSON.parse(res.data.cloudLang);
            var AWS = cloudLang.AWS;
            var Azure = cloudLang.Azure;
            var GCP = cloudLang.GCP;
            var Linux = cloudLang.Linux;
            var Wordpress = cloudLang.Wordpress;
            var RaspberryPi = cloudLang.RaspberryPi;
            var Arduino = cloudLang.Arduino;
            var Firebase = cloudLang.Firebase;
            var Docker = cloudLang.Docker;
            var Go = cloudLang.Go;

            var machineLang = JSON.parse(res.data.machineLang);
            var Tensorflow = machineLang.Tensorflow;
            var Caffe = machineLang.Caffe;
            var OpenCV = machineLang.OpenCV;
            var DLib = machineLang.DLib;
            var OpenGL = machineLang.OpenGL;
            var Unity = machineLang.Unity;
            var Arduino_mac = machineLang.Arduino;
            var Firebase_mac = machineLang.Firebase;

            var chkleng = document.getElementsByName('js').length;

            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName('js')[i].value);
              if(Javascript==docheck[i]){
                document.getElementsByName('js')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName('ht')[i].value);
              if(HTML==docheck[i]){
                document.getElementsByName('ht')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName('cs')[i].value);
              if(CSS==docheck[i]){
                document.getElementsByName('cs')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName('jq')[i].value);
              if(jQuery==docheck[i]){
                document.getElementsByName('jq')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName('sq')[i].value);
              if(SQL==docheck[i]){
                document.getElementsByName('sq')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName('jv')[i].value);
              if(Java==docheck[i]){
                document.getElementsByName('jv')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("aj")[i].value);
              if(AndroidJava==docheck[i]){
                document.getElementsByName('aj')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("sf")[i].value);
              if(Swift==docheck[i]){
                document.getElementsByName('sf')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("ob")[i].value);
              if(Objective==docheck[i]){
                document.getElementsByName('ob')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("py")[i].value);
              if(Python==docheck[i]){
                document.getElementsByName('py')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("langC")[i].value);
              if(C==docheck[i]){
                document.getElementsByName('langC')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("mi")[i].value);
              if(Microsoft==docheck[i]){
                document.getElementsByName('mi')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("kot")[i].value);
              if(Kotlin==docheck[i]){
                document.getElementsByName('kot')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("per")[i].value);
              if(Peral==docheck[i]){
                document.getElementsByName('per')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("langR")[i].value);
              if(R==docheck[i]){
                document.getElementsByName('langR')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("langvba")[i].value);
              if(VBA==docheck[i]){
                document.getElementsByName('langvba')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("nj")[i].value);
              if(Nodejs==docheck[i]){
                document.getElementsByName('nj')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("an")[i].value);
              if(Angular==docheck[i]){
                document.getElementsByName('an')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("rt")[i].value);
              if(React==docheck[i]){
                document.getElementsByName('rt')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("ej")[i].value);
              if(Expressjs==docheck[i]){
                document.getElementsByName('ej')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("net")[i].value);
              if(NetCore==docheck[i]){
                document.getElementsByName('net')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("spr")[i].value);
              if(Spring==docheck[i]){
                document.getElementsByName('spr')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("dj")[i].value);
              if(Django==docheck[i]){
                document.getElementsByName('dj')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("fl")[i].value);
              if(Flask==docheck[i]){
                document.getElementsByName('fl')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("cd")[i].value);
              if(Cordova==docheck[i]){
                document.getElementsByName('cd')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("langvba")[i].value);
              if(VBA==docheck[i]){
                document.getElementsByName('langvba')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("mys")[i].value);
              if(MySql==docheck[i]){
                document.getElementsByName('mys')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("sqls")[i].value);
              if(SQLServer==docheck[i]){
                document.getElementsByName('sqls')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("mong")[i].value);
              if(MongoDB==docheck[i]){
                document.getElementsByName('mong')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("sqli")[i].value);
              if(SQLite==docheck[i]){
                document.getElementsByName('sqli')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("rdis")[i].value);
              if(Redis==docheck[i]){
                document.getElementsByName('rdis')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("orl")[i].value);
              if(Oracle==docheck[i]){
                document.getElementsByName('orl')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("fla_data")[i].value);
              if(Flask_data==docheck[i]){
                document.getElementsByName('fla_data')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("cor_data")[i].value);
              if(Cordova_data==docheck[i]){
                document.getElementsByName('cor_data')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("cor_data")[i].value);
              if(Cordova_data==docheck[i]){
                document.getElementsByName('cor_data')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("cor_data")[i].value);
              if(Cordova_data==docheck[i]){
                document.getElementsByName('cor_data')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("aw")[i].value);
              if(AWS==docheck[i]){
                document.getElementsByName('aw')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("az")[i].value);
              if(Azure==docheck[i]){
                document.getElementsByName('az')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("gc")[i].value);
              if(GCP==docheck[i]){
                document.getElementsByName('gc')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("lin")[i].value);
              if(Linux==docheck[i]){
                document.getElementsByName('lin')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("wp")[i].value);
              if(Wordpress==docheck[i]){
                document.getElementsByName('wp')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("rp")[i].value);
              if(RaspberryPi==docheck[i]){
                document.getElementsByName('rp')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("ard")[i].value);
              if(Arduino==docheck[i]){
                document.getElementsByName('ard')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("fire")[i].value);
              if(Firebase==docheck[i]){
                document.getElementsByName('fire')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("dock")[i].value);
              if(Docker==docheck[i]){
                document.getElementsByName('dock')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("goe")[i].value);
              if(Go==docheck[i]){
                document.getElementsByName('goe')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("tens")[i].value);
              if(Tensorflow==docheck[i]){
                document.getElementsByName('tens')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("caf")[i].value);
              if(Caffe==docheck[i]){
                document.getElementsByName('caf')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("ocv")[i].value);
              if(OpenCV==docheck[i]){
                document.getElementsByName('ocv')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("dli")[i].value);
              if(DLib==docheck[i]){
                document.getElementsByName('dli')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("ogl")[i].value);
              if(OpenGL==docheck[i]){
                document.getElementsByName('ogl')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("uni")[i].value);
              if(Unity==docheck[i]){
                document.getElementsByName('uni')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("ardu_mac")[i].value);
              if(Arduino_mac==docheck[i]){
                document.getElementsByName('ardu_mac')[i].checked = true;
              }
            };
            var docheck = [];
            for(var i=0;i<chkleng;i++){
              docheck.push(document.getElementsByName("fir_mac")[i].value);
              if(Firebase_mac==docheck[i]){
                document.getElementsByName('fir_mac')[i].checked = true;
              }
            };
        });
    },
    created(){

    },
    methods: {
        submitResume(){
        // var data =[{
        //     programmingLang : this.programmingLang,
        //     frameworkLang : this.frameworkLang,
        //     databaseLang : this.databaseLang,
        //     cloudLang : this.cloudLang,
        //     machineLang : this.machineLang,
        // }];
        // this.$store.dispatch('resume/submit_SW', data);

        // var submit_resume = {
        //     sLoginID : this.user.loginId,
        //     getUserInfo : this.getUserInfo,
        //     getUserEng : this.getUserEng,
        //     getUserGrade : this.getUserGrade,
        //     programmingLang : this.programmingLang,
        //     frameworkLang : this.frameworkLang,
        //     databaseLang : this.databaseLang,
        //     cloudLang : this.cloudLang,
        //     machineLang : this.machineLang,
        // };
        // this.$store.dispatch('resume/submit_ALL', submit_resume);
        // this.$router.push({name: "Home"})
        },
        before(){
            this.$store.dispatch('resume/setResumeState',2);
        },
    }
  }
</script>

<style scoped>
</style>
