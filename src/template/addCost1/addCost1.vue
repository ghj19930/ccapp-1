<template>
  <div class="main">
    <header>
      <img src="../../assets/back.png"/>
      <h2>添加费用明细及附件</h2>
    </header>
    <ul class="add">
      <li>
        <div class="subtract">
          <img src="../../assets/subtract.png"/>
          <span class="color">SHACO</span>
        </div>
        <p class="type">住宿费</p>
        <p class="dollar">2000.00元</p>
      </li>
      <li>
        <div>
          <img src="../../assets/add.png"/>
          <span>添加费用明细</span>
        </div>
        <p class="type"></p>
      </li>
    </ul>
    <p class="amount">总报销金额（元）：0.00</p>
    <div class="borrow">
      <p>借款核销</p>
      <img src="../../assets/tab.png"/>
    </div>
    <div class="borrow">
      <p>图片</p>
      <img src="../../assets/photo.png" class="photo"/>
    </div>
    <div class="btn clearfix">
      <input type="button" value="保存" class="save"/>
      <input type="button" value="保存并提交" class="submit"/>
    </div>
  </div>
</template>

<script>
    export default {}
</script>
<style lang="less" scoped>
  @import "addCost1";
</style>
