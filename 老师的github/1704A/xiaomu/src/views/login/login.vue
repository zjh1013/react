<template>
  <div>
    <div>
      <input type="text" placeholder="请输入用户名" v-model="username" />
    </div>
    <div>
      <input type="text" placeholder="请输入密码" v-model="pwd" />
    </div>
    <div>立即注册</div>
    <div @click="goToLogin">
      登录
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
// import httpAxios from '@/utils/http.js'
import { login } from "@/api/api";
export default {
  data() {
    return {
      username: "",
      pwd: ""
    };
  },
  methods: {
    async goToLogin() {
      const res = await login({
        userName: this.username,
        password: this.pwd
      });
      if (res.code === 1) {
        //登录成功
        //存储token
        window.localStorage.token = res.token;
        window.localStorage.userId = res.userId;
        let redirecrt = this.$route.query.redirecrt;
        if (redirecrt) {
          this.$router.push({ path: redirecrt });
        } else {
          this.$router.push({ path: "/home" });
        }
      } else {
        this.$router.push({ path: "/register" });
      }
    }
    // goToLogin(){
    //    login({
    //         userName:this.username,
    //         password:this.pwd
    //     }).then((res)=>{
    //         console.log(res);
    //         if(res.code === 1){ //登录成功
    //             //存储token
    //             window.localStorage.token = res.token;
    //             let redirecrt = this.$route.query.redirecrt;
    //             if(redirecrt){
    //                 this.$router.push({path:redirecrt})
    //             } else {
    //                 this.$router.push({path:'/home'})
    //             }
    //         } else {
    //             this.$router.push({path:'/register'});
    //         }
    //     })
    // }
  }
};
</script>

<style>
</style>>