<template>
  <div class="main">
    <header>
      <img src="../../assets/back.png"/>
      <h2>费用明细</h2>
      <span>取消</span>
    </header>
    <div class="code">
        <span>费用CODE</span>
        <i>SHAC0</i>
    </div>
    <ul class="list listTime">
      <li>
        <span>是由</span>
        <i class="color">请填写</i>
      </li>
      <li>
        <span>开始日期</span>
        <i>2017-10-09</i>
      </li>
      <li>
        <span>结束日期</span>
        <i>2017-10-13</i>
      </li>
      <li>
        <span>酒店名称</span>
        <input type="text" placeholder="请输入酒店名称"/>
      </li>
      <li class="counter">
        <p><strong>0</strong>元</p>
        <div></div>
        <p><strong>0</strong>天</p>
        <div></div>
        <p><strong>0</strong>人</p>
      </li>
    </ul>
    <div class="select">
      <p>重新选择</p>
      <img src="../../assets/ticket.png"/>
    </div>
    <ul class="list">
      <li>
        <span>险种</span>
        <i>00000</i>
      </li>
      <li>
        <span>发票用途</span>
        <i class="color">请选择</i>
      </li>
      <li>
        <span>渠道</span>
        <i class="color">请选择</i>
      </li>
      <li>
        <span>费用标准</span>
        <i>标准内</i>
      </li>
    </ul>
    <div class="code codeRemark">
      <span>备注</span>
      <i>请填写</i>
    </div>
    <input type="button" value="确定" class="sure"/>
  </div>
</template>

<script>
    export default {}
</script>
<style lang="less" scoped>
  @import "breakDown1";
</style>
