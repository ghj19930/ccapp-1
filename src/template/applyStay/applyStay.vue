<template>
  <div class="main">
    <header>
      <img src="../../assets/back.png"/>
      <h2>住宿费申请</h2>
      <span>取消</span>
    </header>
    <ul class="list">
      <li>
        <span>申请人</span>
        <i>陈先颖</i>
      </li>
      <li>
        <span>币种</span>
        <i>人民币/RMB</i>
      </li>
      <li>
        <span>汇率</span>
        <i>1,000000</i>
      </li>
      <li>
        <span>汇款用途</span>
        <i>报销</i>
      </li>
      <li>
        <span>是否关联交易</span>
        <img src="../../assets/tab.png"/>
      </li>
      <li>
        <span>发票类型</span>
        <i>增值税专用发票</i>
      </li>
    </ul>
    <div class="payee">
      <h2>收款人信息</h2>
      <ul class="list">
        <li>
          <span>收款人类型</span>
          <i>个人</i>
        </li>
        <li>
          <span>收款方</span>
          <i class="color">陈先颖</i>
        </li>
        <li>
          <span>收款人银行名称</span>
          <i>中国工商银行</i>
        </li>
        <li>
          <span>收款人银行账号</span>
          <i class="color">600088888888888</i>
        </li>
        <li>
          <span>收款人银行省份</span>
          <i>上海</i>
        </li>
        <li>
          <span>收款人银行城市</span>
          <i>上海</i>
        </li>
      </ul>
    </div>
    <input type="button" value="下一步" class="next"/>
  </div>
</template>

<script>
    export default {}
</script>
<style lang="less" scoped>
  @import "applyStay";
</style>
