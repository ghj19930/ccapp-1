<template>
  <div class="welcome-bg">
    <span class="skip">跳过 <b>{{time}}s</b></span>
    <div class="welcome-con">
      <div class="start-page">
        <img src="../../assets/welcome-img.png" alt="" class="img1">
      </div>
      <div class="title">
        <h1>欢迎登录</h1>
        <p>费控管理系统</p>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        time:3
      }
    },
    methods:{
      timer() {
        if (this.time > 0) {
          this.time--;
          setTimeout(this.timer, 1000);
        }else{
          this.$router.replace({path: '/login'})
        }
      }
    },
    mounted(){
      this.timer()
    }
  }
</script>
<style lang="less" scoped>
@import "welcome";
</style>
