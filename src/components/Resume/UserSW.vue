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
                <input type="radio" name="Javascript" value="배운적 없음" v-model="programmingLang.Javascript">배운적 없음<br>
                <input type="radio" name="Javascript" value="맛보기 수준" v-model="programmingLang.Javascript">맛보기 수준<br>
                <input type="radio" name="Javascript" value="초보 수준" v-model="programmingLang.Javascript">초보 수준<br>
                <input type="radio" name="Javascript" value="실무 가능" v-model="programmingLang.Javascript">실무 가능<br>
                <input type="radio" name="Javascript" value="나름 고수" v-model="programmingLang.Javascript">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">HTML</h6>
                <input type="radio" name="HTML" value="배운적 없음" v-model="programmingLang.HTML">배운적 없음<br>
                <input type="radio" name="HTML" value="맛보기 수준" v-model="programmingLang.HTML">맛보기 수준<br>
                <input type="radio" name="HTML" value="초보 수준" v-model="programmingLang.HTML">초보 수준<br>
                <input type="radio" name="HTML" value="실무 가능" v-model="programmingLang.HTML">실무 가능<br>
                <input type="radio" name="HTML" value="나름 고수" v-model="programmingLang.HTML">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">CSS</h6>
                <input type="radio" name="CSS" value="배운적 없음" v-model="programmingLang.CSS">배운적 없음<br>
                <input type="radio" name="CSS" value="맛보기 수준" v-model="programmingLang.CSS">맛보기 수준<br>
                <input type="radio" name="CSS" value="초보 수준" v-model="programmingLang.CSS">초보 수준<br>
                <input type="radio" name="CSS" value="실무 가능" v-model="programmingLang.CSS">실무 가능<br>
                <input type="radio" name="CSS" value="나름 고수" v-model="programmingLang.CSS">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">jQuery</h6>
                <input type="radio" name="jQuery" value="배운적 없음" v-model="programmingLang.jQuery">배운적 없음<br>
                <input type="radio" name="jQuery" value="맛보기 수준" v-model="programmingLang.jQuery">맛보기 수준<br>
                <input type="radio" name="jQuery" value="초보 수준" v-model="programmingLang.jQuery">초보 수준<br>
                <input type="radio" name="jQuery" value="실무 가능" v-model="programmingLang.jQuery">실무 가능<br>
                <input type="radio" name="jQuery" value="나름 고수" v-model="programmingLang.jQuery">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">SQL</h6>
                <input type="radio" name="SQL" value="배운적 없음" v-model="programmingLang.SQL">배운적 없음<br>
                <input type="radio" name="SQL" value="맛보기 수준" v-model="programmingLang.SQL">맛보기 수준<br>
                <input type="radio" name="SQL" value="초보 수준" v-model="programmingLang.SQL">초보 수준<br>
                <input type="radio" name="SQL" value="실무 가능" v-model="programmingLang.SQL">실무 가능<br>
                <input type="radio" name="SQL" value="나름 고수" v-model="programmingLang.SQL">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Java</h6>
                <input type="radio" name="Java" value="배운적 없음" v-model="programmingLang.Java">배운적 없음<br>
                <input type="radio" name="Java" value="맛보기 수준" v-model="programmingLang.Java">맛보기 수준<br>
                <input type="radio" name="Java" value="초보 수준" v-model="programmingLang.Java">초보 수준<br>
                <input type="radio" name="Java" value="실무 가능" v-model="programmingLang.Java">실무 가능<br>
                <input type="radio" name="Java" value="나름 고수" v-model="programmingLang.Java">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Android Java</h6>
                <input type="radio" name="AndroidJava" value="배운적 없음" v-model="programmingLang.AndroidJava">배운적 없음<br>
                <input type="radio" name="AndroidJava" value="맛보기 수준" v-model="programmingLang.AndroidJava">맛보기 수준<br>
                <input type="radio" name="AndroidJava" value="초보 수준" v-model="programmingLang.AndroidJava">초보 수준<br>
                <input type="radio" name="AndroidJava" value="실무 가능" v-model="programmingLang.AndroidJava">실무 가능<br>
                <input type="radio" name="AndroidJava" value="나름 고수" v-model="programmingLang.AndroidJava">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Swift</h6>
                <input type="radio" name="Swift" value="배운적 없음" v-model="programmingLang.Swift">배운적 없음<br>
                <input type="radio" name="Swift" value="맛보기 수준" v-model="programmingLang.Swift">맛보기 수준<br>
                <input type="radio" name="Swift" value="초보 수준" v-model="programmingLang.Swift">초보 수준<br>
                <input type="radio" name="Swift" value="실무 가능" v-model="programmingLang.Swift">실무 가능<br>
                <input type="radio" name="Swift" value="나름 고수" v-model="programmingLang.Swift">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Objective-C</h6>
                <input type="radio" name="Objective" value="배운적 없음" v-model="programmingLang.Objective">배운적 없음<br>
                <input type="radio" name="Objective" value="맛보기 수준" v-model="programmingLang.Objective">맛보기 수준<br>
                <input type="radio" name="Objective" value="초보 수준" v-model="programmingLang.Objective">초보 수준<br>
                <input type="radio" name="Objective" value="실무 가능" v-model="programmingLang.Objective">실무 가능<br>
                <input type="radio" name="Objective" value="나름 고수" v-model="programmingLang.Objective">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Python</h6>
                <input type="radio" name="Python" value="배운적 없음" v-model="programmingLang.Python">배운적 없음<br>
                <input type="radio" name="Python" value="맛보기 수준" v-model="programmingLang.Python">맛보기 수준<br>
                <input type="radio" name="Python" value="초보 수준" v-model="programmingLang.Python">초보 수준<br>
                <input type="radio" name="Python" value="실무 가능" v-model="programmingLang.Python">실무 가능<br>
                <input type="radio" name="Python" value="나름 고수" v-model="programmingLang.Python">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">PHP</h6>
                <input type="radio" name="PHP" value="배운적 없음" v-model="programmingLang.PHP">배운적 없음<br>
                <input type="radio" name="PHP" value="맛보기 수준" v-model="programmingLang.PHP">맛보기 수준<br>
                <input type="radio" name="PHP" value="초보 수준" v-model="programmingLang.PHP">초보 수준<br>
                <input type="radio" name="PHP" value="실무 가능" v-model="programmingLang.PHP">실무 가능<br>
                <input type="radio" name="PHP" value="나름 고수" v-model="programmingLang.PHP">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">C/C++</h6>
                <input type="radio" name="C" value="배운적 없음" v-model="programmingLang.C">배운적 없음<br>
                <input type="radio" name="C" value="맛보기 수준" v-model="programmingLang.C">맛보기 수준<br>
                <input type="radio" name="C" value="초보 수준" v-model="programmingLang.C">초보 수준<br>
                <input type="radio" name="C" value="실무 가능" v-model="programmingLang.C">실무 가능<br>
                <input type="radio" name="C" value="나름 고수" v-model="programmingLang.C">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Microsoft C#</h6>
                <input type="radio" name="Microsoft" value="배운적 없음" v-model="programmingLang.Microsoft">배운적 없음<br>
                <input type="radio" name="Microsoft" value="맛보기 수준" v-model="programmingLang.Microsoft">맛보기 수준<br>
                <input type="radio" name="Microsoft" value="초보 수준" v-model="programmingLang.Microsoft">초보 수준<br>
                <input type="radio" name="Microsoft" value="실무 가능" v-model="programmingLang.Microsoft">실무 가능<br>
                <input type="radio" name="Microsoft" value="나름 고수" v-model="programmingLang.Microsoft">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Kotlin</h6>
                <input type="radio" name="Kotlin" value="배운적 없음" v-model="programmingLang.Kotlin">배운적 없음<br>
                <input type="radio" name="Kotlin" value="맛보기 수준" v-model="programmingLang.Kotlin">맛보기 수준<br>
                <input type="radio" name="Kotlin" value="초보 수준" v-model="programmingLang.Kotlin">초보 수준<br>
                <input type="radio" name="Kotlin" value="실무 가능" v-model="programmingLang.Kotlin">실무 가능<br>
                <input type="radio" name="Kotlin" value="나름 고수" v-model="programmingLang.Kotlin">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Peral</h6>
                <input type="radio" name="Peral" value="배운적 없음" v-model="programmingLang.Peral">배운적 없음<br>
                <input type="radio" name="Peral" value="맛보기 수준" v-model="programmingLang.Peral">맛보기 수준<br>
                <input type="radio" name="Peral" value="초보 수준" v-model="programmingLang.Peral">초보 수준<br>
                <input type="radio" name="Peral" value="실무 가능" v-model="programmingLang.Peral">실무 가능<br>
                <input type="radio" name="Peral" value="나름 고수" v-model="programmingLang.Peral">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">R</h6>
                <input type="radio" name="R" value="배운적 없음" v-model="programmingLang.R">배운적 없음<br>
                <input type="radio" name="R" value="맛보기 수준" v-model="programmingLang.R">맛보기 수준<br>
                <input type="radio" name="R" value="초보 수준" v-model="programmingLang.R">초보 수준<br>
                <input type="radio" name="R" value="실무 가능" v-model="programmingLang.R">실무 가능<br>
                <input type="radio" name="R" value="나름 고수" v-model="programmingLang.R">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">VBA</h6>
                <input type="radio" name="VBA" value="배운적 없음" v-model="programmingLang.VBA">배운적 없음<br>
                <input type="radio" name="VBA" value="맛보기 수준" v-model="programmingLang.VBA">맛보기 수준<br>
                <input type="radio" name="VBA" value="초보 수준" v-model="programmingLang.VBA">초보 수준<br>
                <input type="radio" name="VBA" value="실무 가능" v-model="programmingLang.VBA">실무 가능<br>
                <input type="radio" name="VBA" value="나름 고수" v-model="programmingLang.VBA">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <span>2. 프레임워크, 라이브러리, 도구</span>
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Node.js</h6>
                <input type="radio" name="Nodejs" value="배운적 없음" v-model="frameworkLang.Nodejs">배운적 없음<br>
                <input type="radio" name="Nodejs" value="맛보기 수준" v-model="frameworkLang.Nodejs">맛보기 수준<br>
                <input type="radio" name="Nodejs" value="초보 수준" v-model="frameworkLang.Nodejs">초보 수준<br>
                <input type="radio" name="Nodejs" value="실무 가능" v-model="frameworkLang.Nodejs">실무 가능<br>
                <input type="radio" name="Nodejs" value="나름 고수" v-model="frameworkLang.Nodejs">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Angular</h6>
                <input type="radio" name="Angular" value="배운적 없음" v-model="frameworkLang.Angular">배운적 없음<br>
                <input type="radio" name="Angular" value="맛보기 수준" v-model="frameworkLang.Angular">맛보기 수준<br>
                <input type="radio" name="Angular" value="초보 수준" v-model="frameworkLang.Angular">초보 수준<br>
                <input type="radio" name="Angular" value="실무 가능" v-model="frameworkLang.Angular">실무 가능<br>
                <input type="radio" name="Angular" value="나름 고수" v-model="frameworkLang.Angular">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">React</h6>
                <input type="radio" name="React" value="배운적 없음" v-model="frameworkLang.React">배운적 없음<br>
                <input type="radio" name="React" value="맛보기 수준" v-model="frameworkLang.React">맛보기 수준<br>
                <input type="radio" name="React" value="초보 수준" v-model="frameworkLang.React">초보 수준<br>
                <input type="radio" name="React" value="실무 가능" v-model="frameworkLang.React">실무 가능<br>
                <input type="radio" name="React" value="나름 고수" v-model="frameworkLang.React">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Express.js</h6>
                <input type="radio" name="Expressjs" value="배운적 없음" v-model="frameworkLang.Expressjs">배운적 없음<br>
                <input type="radio" name="Expressjs" value="맛보기 수준" v-model="frameworkLang.Expressjs">맛보기 수준<br>
                <input type="radio" name="Expressjs" value="초보 수준" v-model="frameworkLang.Expressjs">초보 수준<br>
                <input type="radio" name="Expressjs" value="실무 가능" v-model="frameworkLang.Expressjs">실무 가능<br>
                <input type="radio" name="Expressjs" value="나름 고수" v-model="frameworkLang.Expressjs">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">.Net Core</h6>
                <input type="radio" name="NetCore" value="배운적 없음" v-model="frameworkLang.NetCore">배운적 없음<br>
                <input type="radio" name="NetCore" value="맛보기 수준" v-model="frameworkLang.NetCore">맛보기 수준<br>
                <input type="radio" name="NetCore" value="초보 수준" v-model="frameworkLang.NetCore">초보 수준<br>
                <input type="radio" name="NetCore" value="실무 가능" v-model="frameworkLang.NetCore">실무 가능<br>
                <input type="radio" name="NetCore" value="나름 고수" v-model="frameworkLang.NetCore">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Spring</h6>
                <input type="radio" name="Spring" value="배운적 없음" v-model="frameworkLang.Spring">배운적 없음<br>
                <input type="radio" name="Spring" value="맛보기 수준" v-model="frameworkLang.Spring">맛보기 수준<br>
                <input type="radio" name="Spring" value="초보 수준" v-model="frameworkLang.Spring">초보 수준<br>
                <input type="radio" name="Spring" value="실무 가능" v-model="frameworkLang.Spring">실무 가능<br>
                <input type="radio" name="Spring" value="나름 고수" v-model="frameworkLang.Spring">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Django</h6>
                <input type="radio" name="Django" value="배운적 없음" v-model="frameworkLang.Django">배운적 없음<br>
                <input type="radio" name="Django" value="맛보기 수준" v-model="frameworkLang.Django">맛보기 수준<br>
                <input type="radio" name="Django" value="초보 수준" v-model="frameworkLang.Django">초보 수준<br>
                <input type="radio" name="Django" value="실무 가능" v-model="frameworkLang.Django">실무 가능<br>
                <input type="radio" name="Django" value="나름 고수" v-model="frameworkLang.Django">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Flask</h6>
                <input type="radio" name="Flask" value="배운적 없음" v-model="frameworkLang.Flask">배운적 없음<br>
                <input type="radio" name="Flask" value="맛보기 수준" v-model="frameworkLang.Flask">맛보기 수준<br>
                <input type="radio" name="Flask" value="초보 수준" v-model="frameworkLang.Flask">초보 수준<br>
                <input type="radio" name="Flask" value="실무 가능" v-model="frameworkLang.Flask">실무 가능<br>
                <input type="radio" name="Flask" value="나름 고수" v-model="frameworkLang.Flask">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Cordova</h6>
                <input type="radio" name="Cordova" value="배운적 없음" v-model="frameworkLang.Cordova">배운적 없음<br>
                <input type="radio" name="Cordova" value="맛보기 수준" v-model="frameworkLang.Cordova">맛보기 수준<br>
                <input type="radio" name="Cordova" value="초보 수준" v-model="frameworkLang.Cordova">초보 수준<br>
                <input type="radio" name="Cordova" value="실무 가능" v-model="frameworkLang.Cordova">실무 가능<br>
                <input type="radio" name="Cordova" value="나름 고수" v-model="frameworkLang.Cordova">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <span>3. 데이터베이스</span>
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">MySql</h6>
                <input type="radio" name="MySql" value="배운적 없음" v-model="databaseLang.MySql">배운적 없음<br>
                <input type="radio" name="MySql" value="맛보기 수준" v-model="databaseLang.MySql">맛보기 수준<br>
                <input type="radio" name="MySql" value="초보 수준" v-model="databaseLang.MySql">초보 수준<br>
                <input type="radio" name="MySql" value="실무 가능" v-model="databaseLang.MySql">실무 가능<br>
                <input type="radio" name="MySql" value="나름 고수" v-model="databaseLang.MySql">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">SQL Server</h6>
                <input type="radio" name="SQLServer" value="배운적 없음" v-model="databaseLang.SQLServer">배운적 없음<br>
                <input type="radio" name="SQLServer" value="맛보기 수준" v-model="databaseLang.SQLServer">맛보기 수준<br>
                <input type="radio" name="SQLServer" value="초보 수준" v-model="databaseLang.SQLServer">초보 수준<br>
                <input type="radio" name="SQLServer" value="실무 가능" v-model="databaseLang.SQLServer">실무 가능<br>
                <input type="radio" name="SQLServer" value="나름 고수" v-model="databaseLang.SQLServer">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">MongoDB</h6>
                <input type="radio" name="MongoDB" value="배운적 없음" v-model="databaseLang.MongoDB">배운적 없음<br>
                <input type="radio" name="MongoDB" value="맛보기 수준" v-model="databaseLang.MongoDB">맛보기 수준<br>
                <input type="radio" name="MongoDB" value="초보 수준" v-model="databaseLang.MongoDB">초보 수준<br>
                <input type="radio" name="MongoDB" value="실무 가능" v-model="databaseLang.MongoDB">실무 가능<br>
                <input type="radio" name="MongoDB" value="나름 고수" v-model="databaseLang.MongoDB">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">SQLite</h6>
                <input type="radio" name="SQLite" value="배운적 없음" v-model="databaseLang.SQLite">배운적 없음<br>
                <input type="radio" name="SQLite" value="맛보기 수준" v-model="databaseLang.SQLite">맛보기 수준<br>
                <input type="radio" name="SQLite" value="초보 수준" v-model="databaseLang.SQLite">초보 수준<br>
                <input type="radio" name="SQLite" value="실무 가능" v-model="databaseLang.SQLite">실무 가능<br>
                <input type="radio" name="SQLite" value="나름 고수" v-model="databaseLang.SQLite">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Redis</h6>
                <input type="radio" name="Redis" value="배운적 없음" v-model="databaseLang.Redis">배운적 없음<br>
                <input type="radio" name="Redis" value="맛보기 수준" v-model="databaseLang.Redis">맛보기 수준<br>
                <input type="radio" name="Redis" value="초보 수준" v-model="databaseLang.Redis">초보 수준<br>
                <input type="radio" name="Redis" value="실무 가능" v-model="databaseLang.Redis">실무 가능<br>
                <input type="radio" name="Redis" value="나름 고수" v-model="databaseLang.Redis">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Oracle</h6>
                <input type="radio" name="Oracle" value="배운적 없음" v-model="databaseLang.Oracle">배운적 없음<br>
                <input type="radio" name="Oracle" value="맛보기 수준" v-model="databaseLang.Oracle">맛보기 수준<br>
                <input type="radio" name="Oracle" value="초보 수준" v-model="databaseLang.Oracle">초보 수준<br>
                <input type="radio" name="Oracle" value="실무 가능" v-model="databaseLang.Oracle">실무 가능<br>
                <input type="radio" name="Oracle" value="나름 고수" v-model="databaseLang.Oracle">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Flask</h6>
                <input type="radio" name="Flask_1" value="배운적 없음" v-model="databaseLang.Flask">배운적 없음<br>
                <input type="radio" name="Flask_1" value="맛보기 수준" v-model="databaseLang.Flask">맛보기 수준<br>
                <input type="radio" name="Flask_1" value="초보 수준" v-model="databaseLang.Flask">초보 수준<br>
                <input type="radio" name="Flask_1" value="실무 가능" v-model="databaseLang.Flask">실무 가능<br>
                <input type="radio" name="Flask_1" value="나름 고수" v-model="databaseLang.Flask">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Cordova</h6>
                <input type="radio" name="Cordova_1" value="배운적 없음" v-model="databaseLang.Cordova">배운적 없음<br>
                <input type="radio" name="Cordova_1" value="맛보기 수준" v-model="databaseLang.Cordova">맛보기 수준<br>
                <input type="radio" name="Cordova_1" value="초보 수준" v-model="databaseLang.Cordova">초보 수준<br>
                <input type="radio" name="Cordova_1" value="실무 가능" v-model="databaseLang.Cordova">실무 가능<br>
                <input type="radio" name="Cordova_1" value="나름 고수" v-model="databaseLang.Cordova">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <span>4. 클라우드 / 플랫폼 / 운영체제</span>
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">AWS</h6>
                <input type="radio" name="AWS" value="배운적 없음" v-model="cloudLang.AWS">배운적 없음<br>
                <input type="radio" name="AWS" value="맛보기 수준" v-model="cloudLang.AWS">맛보기 수준<br>
                <input type="radio" name="AWS" value="초보 수준" v-model="cloudLang.AWS">초보 수준<br>
                <input type="radio" name="AWS" value="실무 가능" v-model="cloudLang.AWS">실무 가능<br>
                <input type="radio" name="AWS" value="나름 고수" v-model="cloudLang.AWS">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Azure</h6>
                <input type="radio" name="Azure" value="배운적 없음" v-model="cloudLang.Azure">배운적 없음<br>
                <input type="radio" name="Azure" value="맛보기 수준" v-model="cloudLang.Azure">맛보기 수준<br>
                <input type="radio" name="Azure" value="초보 수준" v-model="cloudLang.Azure">초보 수준<br>
                <input type="radio" name="Azure" value="실무 가능" v-model="cloudLang.Azure">실무 가능<br>
                <input type="radio" name="Azure" value="나름 고수" v-model="cloudLang.Azure">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Google Cloud Platform / App Engine</h6>
                <input type="radio" name="GCP" value="배운적 없음" v-model="cloudLang.GCP">배운적 없음<br>
                <input type="radio" name="GCP" value="맛보기 수준" v-model="cloudLang.GCP">맛보기 수준<br>
                <input type="radio" name="GCP" value="초보 수준" v-model="cloudLang.GCP">초보 수준<br>
                <input type="radio" name="GCP" value="실무 가능" v-model="cloudLang.GCP">실무 가능<br>
                <input type="radio" name="GCP" value="나름 고수" v-model="cloudLang.GCP">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Linux</h6>
                <input type="radio" name="Linux" value="배운적 없음" v-model="cloudLang.Linux">배운적 없음<br>
                <input type="radio" name="Linux" value="맛보기 수준" v-model="cloudLang.Linux">맛보기 수준<br>
                <input type="radio" name="Linux" value="초보 수준" v-model="cloudLang.Linux">초보 수준<br>
                <input type="radio" name="Linux" value="실무 가능" v-model="cloudLang.Linux">실무 가능<br>
                <input type="radio" name="Linux" value="나름 고수" v-model="cloudLang.Linux">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Wordpress</h6>
                <input type="radio" name="Wordpress" value="배운적 없음" v-model="cloudLang.Wordpress">배운적 없음<br>
                <input type="radio" name="Wordpress" value="맛보기 수준" v-model="cloudLang.Wordpress">맛보기 수준<br>
                <input type="radio" name="Wordpress" value="초보 수준" v-model="cloudLang.Wordpress">초보 수준<br>
                <input type="radio" name="Wordpress" value="실무 가능" v-model="cloudLang.Wordpress">실무 가능<br>
                <input type="radio" name="Wordpress" value="나름 고수" v-model="cloudLang.Wordpress">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Raspberry Pi</h6>
                <input type="radio" name="RaspberryPi" value="배운적 없음" v-model="cloudLang.RaspberryPi">배운적 없음<br>
                <input type="radio" name="RaspberryPi" value="맛보기 수준" v-model="cloudLang.RaspberryPi">맛보기 수준<br>
                <input type="radio" name="RaspberryPi" value="초보 수준" v-model="cloudLang.RaspberryPi">초보 수준<br>
                <input type="radio" name="RaspberryPi" value="실무 가능" v-model="cloudLang.RaspberryPi">실무 가능<br>
                <input type="radio" name="RaspberryPi" value="나름 고수" v-model="cloudLang.RaspberryPi">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Arduino</h6>
                <input type="radio" name="Arduino" value="배운적 없음" v-model="programmingLang.Arduino">배운적 없음<br>
                <input type="radio" name="Arduino" value="맛보기 수준" v-model="programmingLang.Arduino">맛보기 수준<br>
                <input type="radio" name="Arduino" value="초보 수준" v-model="programmingLang.Arduino">초보 수준<br>
                <input type="radio" name="Arduino" value="실무 가능" v-model="programmingLang.Arduino">실무 가능<br>
                <input type="radio" name="Arduino" value="나름 고수" v-model="programmingLang.Arduino">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Firebase</h6>
                <input type="radio" name="Firebase" value="배운적 없음" v-model="cloudLang.Firebase">배운적 없음<br>
                <input type="radio" name="Firebase" value="맛보기 수준" v-model="cloudLang.Firebase">맛보기 수준<br>
                <input type="radio" name="Firebase" value="초보 수준" v-model="cloudLang.Firebase">초보 수준<br>
                <input type="radio" name="Firebase" value="실무 가능" v-model="cloudLang.Firebase">실무 가능<br>
                <input type="radio" name="Firebase" value="나름 고수" v-model="cloudLang.Firebase">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Docker</h6>
                <input type="radio" name="Docker" value="배운적 없음" v-model="cloudLang.Docker">배운적 없음<br>
                <input type="radio" name="Docker" value="맛보기 수준" v-model="cloudLang.Docker">맛보기 수준<br>
                <input type="radio" name="Docker" value="초보 수준" v-model="cloudLang.Docker">초보 수준<br>
                <input type="radio" name="Docker" value="실무 가능" v-model="cloudLang.Docker">실무 가능<br>
                <input type="radio" name="Docker" value="나름 고수" v-model="cloudLang.Docker">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Go Ethereum / Solidity</h6>
                <input type="radio" name="Go" value="배운적 없음" v-model="cloudLang.Go">배운적 없음<br>
                <input type="radio" name="Go" value="맛보기 수준" v-model="cloudLang.Go">맛보기 수준<br>
                <input type="radio" name="Go" value="초보 수준" v-model="cloudLang.Go">초보 수준<br>
                <input type="radio" name="Go" value="실무 가능" v-model="cloudLang.Go">실무 가능<br>
                <input type="radio" name="Go" value="나름 고수" v-model="cloudLang.Go">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <span>5. 머신러닝 / VR / AR / 비전</span>
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Tensorflow</h6>
                <input type="radio" name="Tensorflow" value="배운적 없음" v-model="machineLang.Tensorflow">배운적 없음<br>
                <input type="radio" name="Tensorflow" value="맛보기 수준" v-model="machineLang.Tensorflow">맛보기 수준<br>
                <input type="radio" name="Tensorflow" value="초보 수준" v-model="machineLang.Tensorflow">초보 수준<br>
                <input type="radio" name="Tensorflow" value="실무 가능" v-model="machineLang.Tensorflow">실무 가능<br>
                <input type="radio" name="Tensorflow" value="나름 고수" v-model="machineLang.Tensorflow">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Caffe</h6>
                <input type="radio" name="Caffe" value="배운적 없음" v-model="machineLang.Caffe">배운적 없음<br>
                <input type="radio" name="Caffe" value="맛보기 수준" v-model="machineLang.Caffe">맛보기 수준<br>
                <input type="radio" name="Caffe" value="초보 수준" v-model="machineLang.Caffe">초보 수준<br>
                <input type="radio" name="Caffe" value="실무 가능" v-model="machineLang.Caffe">실무 가능<br>
                <input type="radio" name="Caffe" value="나름 고수" v-model="machineLang.Caffe">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">OpenCV</h6>
                <input type="radio" name="OpenCV" value="배운적 없음" v-model="machineLang.OpenCV">배운적 없음<br>
                <input type="radio" name="OpenCV" value="맛보기 수준" v-model="machineLang.OpenCV">맛보기 수준<br>
                <input type="radio" name="OpenCV" value="초보 수준" v-model="machineLang.OpenCV">초보 수준<br>
                <input type="radio" name="OpenCV" value="실무 가능" v-model="machineLang.OpenCV">실무 가능<br>
                <input type="radio" name="OpenCV" value="나름 고수" v-model="machineLang.OpenCV">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">DLib</h6>
                <input type="radio" name="DLib" value="배운적 없음" v-model="machineLang.DLib">배운적 없음<br>
                <input type="radio" name="DLib" value="맛보기 수준" v-model="machineLang.DLib">맛보기 수준<br>
                <input type="radio" name="DLib" value="초보 수준" v-model="machineLang.DLib">초보 수준<br>
                <input type="radio" name="DLib" value="실무 가능" v-model="machineLang.DLib">실무 가능<br>
                <input type="radio" name="DLib" value="나름 고수" v-model="machineLang.DLib">나름 고수
            </div>
        </div>
        <br>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">OpenGL</h6>
                <input type="radio" name="OpenGL" value="배운적 없음" v-model="machineLang.OpenGL">배운적 없음<br>
                <input type="radio" name="OpenGL" value="맛보기 수준" v-model="machineLang.OpenGL">맛보기 수준<br>
                <input type="radio" name="OpenGL" value="초보 수준" v-model="machineLang.OpenGL">초보 수준<br>
                <input type="radio" name="OpenGL" value="실무 가능" v-model="machineLang.OpenGL">실무 가능<br>
                <input type="radio" name="OpenGL" value="나름 고수" v-model="machineLang.OpenGL">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Unity</h6>
                <input type="radio" name="Unity" value="배운적 없음" v-model="machineLang.Unity">배운적 없음<br>
                <input type="radio" name="Unity" value="맛보기 수준" v-model="machineLang.Unity">맛보기 수준<br>
                <input type="radio" name="Unity" value="초보 수준" v-model="machineLang.Unity">초보 수준<br>
                <input type="radio" name="Unity" value="실무 가능" v-model="machineLang.Unity">실무 가능<br>
                <input type="radio" name="Unity" value="나름 고수" v-model="machineLang.Unity">나름 고수
            </div>
        </div>
        <br>
         <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Arduino</h6>
                <input type="radio" name="Arduino_1" value="배운적 없음" v-model="machineLang.Arduino">배운적 없음<br>
                <input type="radio" name="Arduino_1" value="맛보기 수준" v-model="machineLang.Arduino">맛보기 수준<br>
                <input type="radio" name="Arduino_1" value="초보 수준" v-model="machineLang.Arduino">초보 수준<br>
                <input type="radio" name="Arduino_1" value="실무 가능" v-model="machineLang.Arduino">실무 가능<br>
                <input type="radio" name="Arduino_1" value="나름 고수" v-model="machineLang.Arduino">나름 고수
            </div>
        </div>
        <div class="col-lg-6">
            <div class="apply-list  rounded-xl  bg-white mb-4">
                <h6 style="font-weight:bold">Firebase</h6>
                <input type="radio" name="Firebase_5" value="배운적 없음" v-model="machineLang.Firebase">배운적 없음<br>
                <input type="radio" name="Firebase_5" value="맛보기 수준" v-model="machineLang.Firebase">맛보기 수준<br>
                <input type="radio" name="Firebase_5" value="초보 수준" v-model="machineLang.Firebase">초보 수준<br>
                <input type="radio" name="Firebase_5" value="실무 가능" v-model="machineLang.Firebase">실무 가능<br>
                <input type="radio" name="Firebase_5" value="나름 고수" v-model="machineLang.Firebase">나름 고수
            </div>
        </div>
        <br>
        <div class="col-12 text-center">
            <button class="btn btn-primary" type="submit">제출하기</button>
        </div>
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
    beforeMount(){
        this.$http.get('http://106.10.46.121:8888/',{'headers': {authorization: `Bearer ${localStorage.token}`}}).then(res => {
            //console.log(res.data.user);
            this.user = res.data.user;
        })
    },
    created(){

    },
    methods: {
        submitResume(){
        var data =[{
            programmingLang : this.programmingLang,
            frameworkLang : this.frameworkLang,
            databaseLang : this.databaseLang,
            cloudLang : this.cloudLang,
            machineLang : this.machineLang,
        }];
        this.$store.dispatch('resume/submit_SW', data);

        var submit_resume = {
            sLoginID : this.user.loginId,
            getUserInfo : this.getUserInfo,
            getUserEng : this.getUserEng,
            getUserGrade : this.getUserGrade,
            programmingLang : this.programmingLang,
            frameworkLang : this.frameworkLang,
            databaseLang : this.databaseLang,
            cloudLang : this.cloudLang,
            machineLang : this.machineLang,
        };
        this.$store.dispatch('resume/submit_ALL', submit_resume);
        this.$store.dispatch('resume/setResumeState',6);
        location.reload();
        },
    }
  }
</script>

<style scoped>
</style>
