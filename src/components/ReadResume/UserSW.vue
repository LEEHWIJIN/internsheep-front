<template>
  <div class="row">
      <!-- 대제목 -->
    <div class="col-lg-12 text-center">
    <p class="subtitle">Skills</p>
    <h2 class="section-title">SW기술분야 숙련도</h2>
    <h3>다음 과목들에 대해 본인의 학점을 체크해 주세요.*</h3>
    </div>
    <!-- 이력서 내용 -->
    <div class="col-lg-12 p-0">
      <form class="row" v-on:submit.prevent='submitResume'>
        <div class="col-lg-6">
            <span>1. 프로그래밍/스크립트/마크업언어</span>
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Javascript</h6>

<!--
            <input class="inp-cbx" id="cbx3" name="grade" value="4학년 1학기" type="radio" style="display: none;">
              <label class="cbx" for="cbx3">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>4학년 1학기</span>
              </label><br>
 -->

 <!-- <input class="inp-cbx" id="cbx1" value="영어로 구글링을 하는데 불편함을 많이 느낀다." type="radio" name="search" onclick="return false" style="display: none;">
 <label class="cbx" for="cbx1">
     <span><svg width="10px" height="10px" viewbox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span>
     배운적 없음
 </label><br>
 <input class="inp-cbx" id="cbx1" value="맛보기 수준" type="radio" name="search" onclick="return false" style="display: none;">
 <label class="cbx" for="cbx1">
     <span><svg width="10px" height="10px" viewbox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span>
     맛보기 수준
 </label><br>
 <input class="inp-cbx" id="cbx1" value="초보 수준" type="radio" name="search" onclick="return false" style="display: none;">
 <label class="cbx" for="cbx1">
     <span><svg width="10px" height="10px" viewbox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span>
     초보 수준
 </label><br>
 <input class="inp-cbx" id="cbx1" value="실무 가능" type="radio" name="search" onclick="return false" style="display: none;">
 <label class="cbx" for="cbx1">
     <span><svg width="10px" height="10px" viewbox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span>
     실무 가능
 </label><br>
 <input class="inp-cbx" id="cbx1" value="나름 고수" type="radio" name="search" onclick="return false" style="display: none;">
 <label class="cbx" for="cbx1">
     <span><svg width="10px" height="10px" viewbox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span>
     나름 고수
 </label><br> -->

                <input type="radio" name="js" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="js" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="js" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="js" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="js" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">HTML</h6>
                <input type="radio" name="ht" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="ht" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="ht" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="ht" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="ht" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">CSS</h6>
                <input type="radio" name="cs" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="cs" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="cs" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="cs" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="cs" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">jQuery</h6>
                <input type="radio" name="jq" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="jq" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="jq" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="jq" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="jq" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">SQL</h6>
                <input type="radio" name="sq" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="sq" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="sq" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="sq" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="sq" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Java</h6>
                <input type="radio" name="jv" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="jv" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="jv" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="jv" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="jv" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Android Java</h6>
                <input type="radio" name="aj" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="aj" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="aj" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="aj" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="aj" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Swift</h6>
                <input type="radio" name="sf" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="sf" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="sf" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="sf" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="sf" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Objective-C</h6>
                <input type="radio" name="ob" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="ob" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="ob" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="ob" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="ob" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Python</h6>
                <input type="radio" name="py" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="py" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="py" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="py" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="py" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">PHP</h6>
                <input type="radio" name="ph" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="ph" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="ph" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="ph" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="ph" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">C/C++</h6>
                <input type="radio" name="langC" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="langC" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="langC" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="langC" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="langC" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Microsoft C#</h6>
                <input type="radio" name="mi" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="mi" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="mi" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="mi" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="mi" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Kotlin</h6>
                <input type="radio" name="kot" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="kot" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="kot" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="kot" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="kot" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Peral</h6>
                <input type="radio" name="per" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="per" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="per" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="per" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="per" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">R</h6>
                <input type="radio" name="langR" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="langR" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="langR" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="langR" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="langR" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">VBA</h6>
                <input type="radio" name="langvba" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="langvba" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="langvba" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="langvba" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="langvba" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <span>2. 프레임워크, 라이브러리, 도구</span>
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Node.js</h6>
                <input type="radio" name="nj" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="nj" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="nj" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="nj" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="nj" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Angular</h6>
                <input type="radio" name="an" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="an" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="an" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="an" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="an" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">React</h6>
                <input type="radio" name="rt" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="rt" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="rt" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="rt" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="rt" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Express.js</h6>
                <input type="radio" name="ej" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="ej" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="ej" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="ej" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="ej" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">.Net Core</h6>
                <input type="radio" name="net" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="net" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="net" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="net" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="net" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Spring</h6>
                <input type="radio" name="spr" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="spr" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="spr" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="spr" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="spr" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Django</h6>
                <input type="radio" name="dj" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="dj" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="dj" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="dj" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="dj" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Flask</h6>
                <input type="radio" name="fl" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="fl" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="fl" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="fl" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="fl" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Cordova</h6>
                <input type="radio" name="cd" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="cd" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="cd" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="cd" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="cd" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <span>3. 데이터베이스</span>
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">MySql</h6>
                <input type="radio" name="mys" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="mys" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="mys" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="mys" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="mys" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">SQL Server</h6>
                <input type="radio" name="sqls" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="sqls" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="sqls" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="sqls" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="sqls" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">MongoDB</h6>
                <input type="radio" name="mong" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="mong" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="mong" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="mong" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="mong" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">SQLite</h6>
                <input type="radio" name="sqli" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="sqli" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="sqli" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="sqli" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="sqli" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Redis</h6>
                <input type="radio" name="rdis" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="rdis" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="rdis" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="rdis" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="rdis" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Oracle</h6>
                <input type="radio" name="orl" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="orl" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="orl" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="orl" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="orl" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Flask</h6>
                <input type="radio" name="fla_data" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="fla_data" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="fla_data" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="fla_data" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="fla_data" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Cordova</h6>
                <input type="radio" name="cor_data" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="cor_data" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="cor_data" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="cor_data" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="cor_data" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <span>4. 클라우드 / 플랫폼 / 운영체제</span>
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">AWS</h6>
                <input type="radio" name="aw" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="aw" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="aw" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="aw" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="aw" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Azure</h6>
                <input type="radio" name="az" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="az" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="az" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="az" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="az" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Google Cloud Platform / App Engine</h6>
                <input type="radio" name="gc" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="gc" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="gc" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="gc" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="gc" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Linux</h6>
                <input type="radio" name="lin" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="lin" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="lin" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="lin" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="lin" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Wordpress</h6>
                <input type="radio" name="wp" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="wp" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="wp" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="wp" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="wp" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Raspberry Pi</h6>
                <input type="radio" name="rp" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="rp" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="rp" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="rp" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="rp" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Arduino</h6>
                <input type="radio" name="ard" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="ard" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="ard" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="ard" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="ard" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Firebase</h6>
                <input type="radio" name="fire" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="fire" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="fire" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="fire" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="fire" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Docker</h6>
                <input type="radio" name="dock" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="dock" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="dock" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="dock" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="dock" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Go Ethereum / Solidity</h6>
                <input type="radio" name="goe" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="goe" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="goe" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="goe" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="goe" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <span>5. 머신러닝 / VR / AR / 비전</span>
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Tensorflow</h6>
                <input type="radio" name="tens" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="tens" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="tens" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="tens" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="tens" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Caffe</h6>
                <input type="radio" name="caf" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="caf" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="caf" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="caf" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="caf" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">OpenCV</h6>
                <input type="radio" name="ocv" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="ocv" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="ocv" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="ocv" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="ocv" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">DLib</h6>
                <input type="radio" name="dli" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="dli" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="dli" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="dli" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="dli" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">OpenGL</h6>
                <input type="radio" name="ogl" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="ogl" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="ogl" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="ogl" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="ogl" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Unity</h6>
                <input type="radio" name="uni" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="uni" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="uni" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="uni" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="uni" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
         <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Arduino</h6>
                <input type="radio" name="ardu_mac" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="ardu_mac" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="ardu_mac" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="ardu_mac" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="ardu_mac" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Firebase</h6>
                <input type="radio" name="fir_mac" value="배운적 없음" onclick="return false">배운적 없음<br>
                <input type="radio" name="fir_mac" value="맛보기 수준" onclick="return false">맛보기 수준<br>
                <input type="radio" name="fir_mac" value="초보 수준" onclick="return false">초보 수준<br>
                <input type="radio" name="fir_mac" value="실무 가능" onclick="return false">실무 가능<br>
                <input type="radio" name="fir_mac" value="나름 고수" onclick="return false">나름 고수
            </div>
        </div>
        <br>
        <!-- <div class="col-12 text-center">
            <button class="btn btn-primary" type="submit">제출하기</button>
        </div> -->
      </form>
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
        await this.$http.get('http://10.41.83.255:8888/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
            //console.log(res.data.user);
            return this.user = res.data.user;
        });
        await this.$http.get('http://10.41.83.255:8888/std/mypage/watchResume',{params:{sLoginID : this.user.loginId}}).then(res =>{
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
            console.log(Javascript)

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
    }
  }
</script>

<style scoped>
</style>
