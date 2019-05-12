<template>
    <div id="Home">
      <v-base></v-base>
        <!-- banner -->
        <div class="hero-area bg-cover">
            <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-lg-6 pl-lg-0 text-center text-lg-left">
                <h1 class="text-white position-relative">Build Your Business Together<span class="watermark">Build</span></h1>
                <p class="text-white pt-2 pb-3">Cupidatat non proident sunt culpa qui officia deserunt mollit <br> anim idest
                    laborum sed ut perspiciatis.</p>
                <a href="#" class="btn btn-primary">Get Agico</a>
                </div>
                <div class="col-lg-5 pl-lg-0 pt-5 pt-lg-0 text-lg-right text-center">
                <img src="images/banner/banner-1.png" class="img-fluid" alt="">
                </div>
            </div>
            </div>

        </div>
        <!-- /banner -->
        <section class="bg-light py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-sm-6 mb-4 mb-md-0 text-center">
                <p class="h2 font-weight-light text-dark"><span class="counter" data-count="8">0</span>K+</p>
                <h6 class="text-dark font-weight-normal">Downloads per day</h6>
              </div>
              <div class="col-md-3 col-sm-6 mb-4 mb-md-0 text-center">
                <p class="h2 font-weight-light text-dark"><span class="counter" data-count="20">0</span>+</p>
                <h6 class="text-dark font-weight-normal">Design awards</h6>
              </div>
              <div class="col-md-3 col-sm-6 mb-4 mb-md-0 text-center">
                <p class="h2 font-weight-light text-dark"><span class="counter" data-count="25">0</span>K+</p>
                <h6 class="text-dark font-weight-normal">Totally satisfied users</h6>
              </div>
              <div class="col-md-3 col-sm-6 mb-4 mb-md-0 text-center">
                <p class="h2 font-weight-light text-dark"><span class="counter" data-count="30">0</span>+</p>
                <h6 class="text-dark font-weight-normal">People behind this app</h6>
              </div>
            </div>
          </div>
        </section>
    </div>

</template>
<script>
  //import Vue from 'vue';
  //import VResume from './components/Resume/Index.vue';
  //import Vtest from '../test/test.vue'
  import VBase from '../Base/Index.vue'
  export default{
    name: 'Home',
    data() {
      return {

      }
    },
    components: {
        //VResume
        VBase,
    },
    created(){

    },
    methods: {
      
    }
  }
</script>

<style scoped>
#Home {
 background-image: url('../../../public/images/background/banner.png');
}
</style>
