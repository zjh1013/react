<template>
  <div>
    <div>
      <input type="text" placeholder="请输入用户名" v-model="username" />
    </div>
    <div>
      <input type="text" placeholder="请输入姓名" v-model="name" />
    </div>
    <div>
      <input type="text" placeholder="请输入密码" v-model="pwd" />
    </div>
    <div>
      <input type="text" placeholder="请确认密码" v-model="surepwd" />
    </div>
    <div @click="goToRegister">
      注册
    </div>
  </div>
</template>

<script>
// import Axios from 'axios'
// import httpAxios from '@/utils/http.js'
import { register } from "@/api/api.js";
export default {
  data() {
    return {
      username: "",
      name: "",
      pwd: "",
      surepwd: ""
    };
  },
  methods: {
    async goToRegister() {
      //两次的密码是否一致
      if (this.pwd === this.surepwd) {
        const res = await register({
          userName: this.username,
          password: this.pwd,
          realName: this.name
        });
        if (res.code === 1) {
          this.$router.push({ path: "/login" });
        }
      } else {
        // alert('密码不一致');
        this.$message({
          message: "密碼不一直",
          type: "error"
        });
      }
    }
  }
};
</script>

<style>
</style>