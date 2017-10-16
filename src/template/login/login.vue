<template>
<div>
  <div id="login-page">
    <h2 class="login-logo">
      <img src="../../assets/login-img.png" alt=""/>
      <p>费控管理登录系统</p>
    </h2>
    <div class="login">
      <div class="input-item"><i class="phone-icon"></i>
        <input type="text" class="input" placeholder="请输入手机号码/用户名"/>
      </div>
      <div class="input-item mb"><i class="pwd-icon"></i>
        <input type="password" class="input" placeholder="请输入密码"/>
      </div>
      <div class="input-item">
        <input type="button" class="button" value="登   录"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
      data() {

      },
      methods:{
        login(phoneNum, password, loginType) {
          const vm = this;
          axios({
            method: 'post',
            url: '/api/login',
            data: {
              phoneNum: phoneNum,
              password: password,
              type: loginType
            }
          })
            .then(function (response) {
              if (response.data.resultCode === "1") {
                vm.stateInfo.loginPswFlag = false;
                vm.baseMsg.loginPswErrMsg = '';
                vm.stateInfo.loginSuccessFlag = true;
                sessionStorage.setItem("entryId", phoneNum);
                localStorage.setItem("entryId", phoneNum);
                localStorage.setItem('loginType', true)

              } else {
                vm.stateInfo.loginPswFlag = true;
                vm.baseMsg.loginPswErrMsg = response.data.resultMsg;
              }
            })
            .catch(function (error) {
              vm.stateInfo.loginPswFlag = true;
              vm.baseMsg.loginPswErrMsg = "网络异常,请稍后重试";
            });
        }
      }
    }
</script>
<style lang="less" scoped>
  @import "login";
</style>
