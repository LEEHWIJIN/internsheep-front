<!-- 회원 정보 수정 페이지  -->
<template>
<section class="section section-lg-bottom bg-light">
  <div  class="container" id="apply">
    <v-base></v-base>
    <div class="row">
    <!-- 카테고리란 -->
    <div class="col-lg-3">
      <v-category></v-category>
    </div>
    <!-- 공백 -->
    <div class="col-lg-1">
    </div>
    <v-read-profile v-if="$store.state.profile.profile_state==0"></v-read-profile>
    <v-modify-profile v-if="$store.state.profile.profile_state==1"></v-modify-profile>
  </div>
  </div>
</section>
</template>

<script>
  import VBase from '../Base/Index.vue'
  import VCategory from '../Category/Index.vue'
  import VReadProfile from './ReadProfile.vue'
  import VModifyProfile from './ModifyProfile.vue'
  import Const from '../../constant/constant';
  export default{
      name: 'Apply',
      data() {
        return {
          cName:[],
          cManagerName:[],
          cLocation:[],
          cBenefit:[],
          user:{},
        }
      },
      components: {
        VBase,
        VCategory,
        VReadProfile,
        VModifyProfile,
      },
      async created(){
        await this.$store.dispatch('profile/setProfileState',0);
      },
      methods: {
      }
  }
</script>

<style scoped>
</style>
<!-- Main Stylesheet -->
<link href="css/style.css" rel="stylesheet">
