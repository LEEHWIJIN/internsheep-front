<template>
  <div id="resume">
    <label>이메일 주소*</label><br>
    <input v-model="email" placeholder="이메일 주소"><br>
    <label>이름*</label><br>
    <input v-model="name" placeholder="이름을 입력 해주세요"><br>
    <label>소속학과*</label><br>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">소프트웨어학과</label><br>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">ICT융합전공</label><br>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">기타</label><br>
    <label>학번*</label><br>
    <input v-model="email" placeholder="학번을 입력 해주세요"><br>
    <label>전화번호*</label><br>
    <input v-model="email" placeholder="전화번호를 입력 해주세요"><br>
    <label>학년정보(현재 학기 기준)*</label><br>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">3학년 1학기</label><br>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">3학년 2학기</label><br>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">4학년 1학기</label><br>
  </div>
</template>


<script>
//import Vue from 'vue';
  export default{
      name: 'Resume',
      data() {
        return {
          checkedNames:[],
        }
      },
      components: {
          
      },
      created(){

      },
      methods: {
        
      }
  }
</script>

<style scoped>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */


</style>
