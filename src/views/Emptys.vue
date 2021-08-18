<template>
    <div>
           <van-nav-bar
            title="我的关注"
            left-arrow
            @click-left="onClickLeft"  
            class="nav"   
          />
          <div >
              <van-empty
                  class="custom-image"
                  image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
                  description="暂时还没有关注"
              />
              <van-button round type="danger" class="bottom-button">发现更多感兴趣的内容</van-button>
          </div>
    </div>
</template>
<style scoped>
    .nav{
    margin-bottom: 2vh;
    padding: 12px;
    border-bottom: 3px solid  #2fce6d;
    font-size: 5vw
}
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
  .bottom-button {
    width: 171px;
    height: 40px;
    margin-left: 28vw;
    background-color: #2fce6d;
    border: none;
  }
</style>
<script>
import { Toast } from 'vant';

export default {
  methods: {
    onClickLeft() {
      Toast('返回');
      this.$router.push("/my")
    },
    onClickRight() {
      Toast('按钮');
    },
  },
};
</script>
