<template>
  <div>
    <!-- NavBar 导航栏 -->
    <van-nav-bar title="我的课程表" left-arrow right-text="今天"  @click-left="onClickLeft" @click-right="onClickRight"></van-nav-bar>

    <!-- 日历 -->
    <van-calendar
      :poppable="false"
      :show-confirm="false"
      :style="{ height: '450px' }"
    />
  </div>
</template>

<script>
export default {
     methods: {
    onClickLeft() {
      this.$router.push('/course');
    },
    onClickRight() {
      
    },
  },
}
</script>

<style scoped>
/deep/ .van-nav-bar__text{
  color:#646566
}
/deep/ .van-icon-arrow-left::before{
  color:#646566
}
</style>