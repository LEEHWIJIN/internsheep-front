<template>
  <div id="login">
    <!-- <div class="container" style="  width: 380px;">
        <h1>Login</h1>
        <form v-on:submit.prevent='login'>
          ID: <input type="text" id="userId" v-model="userId" name="userId"><br>
          Password: <input type="password" id="password" v-model="password" name="password"><br>
          <input type="submit" id="login" value="login" />
        </form>
    </div> -->
    <div class="container" style="  width: 380px;">
        <h1>Login</h1>
        <form v-on:submit.prevent='login'>
            <input id="loginId" type="text" placeholder="ID" name="loginid" v-model="user.id" style="margin-top: 20px;"><br>
            <input type="password" name="loginpassword" placeholder="Password" v-model="user.password"><br>
            <input type="submit" value="login" id="form">

            <router-link to="/signup" id="link">Sign Up</router-link>
        </form>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'login',
    data() {
      return {
        user:{
          id:'',
          password:'',
        },  
      }
    },
    components: {
        
    },
    created(){
        
    },
    methods: {
      login() {
        this.$http.post('http://localhost:8888/std/auth/login',{user: this.user}).then((response)=>{
             alert('success');
             localStorage.setItem('token',response.data.token);
             this.$router.push({name: "Home"});
        },(error)=>{
            console.log('err')
            alert(error.response.data.error)
        }).catch(error=>{
            alert(error)
        })
        // this.$http.post('http://localhost:8888/aimsLogin/check',{userId: this.userId,password:this.password}).then((response)=>{
        //     alert('success');
        // },(error)=>{
        //     console.log('err')
        //     alert(error.response.data.error)
        // }).catch(error=>{
        //     alert(error)
        // })

      }
    }
  }
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#login{
  margin-left: 200px;
  margin-top: 200px;
}

</style>
