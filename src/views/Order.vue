<template>
  <div>
    <div
      style="background-color: rgb(242, 242, 242); width: 375px; height: 812px"
    >
      <!-- <div style="margin: 5px; width:365px; height:200px; background-color:white; position: absolute; top:47px; border-radius: 5%;" >

  </div> -->
      <van-nav-bar
        title="兑换记录"
        left-text=""
        right-text=""
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <div
        style="
          margin: 5px;
          width: 365px;
          height: 187px;
          background-color: white;
          position: absolute;
          border-radius: 5%;
        "
      >
        <div style="margin: 10px; margin-bottom: 5px; margin-top: 5px; color:rgb(251, 122, 41);">
          兑换成功
        </div>
        <div>
          <img
            src="../assets/img/coinmall/newarrival/p1/4.jpg"
            alt=""
            style="width: 120px; height: 120px"
          />
          <div>
            <ul style="position: absolute; right: 0px; top: 25px">
              <li>星际梦想家系列公仔（12款可选）</li>
              <li>【摆件-皮卡丘】</li>
            </ul>
          </div>
          <div>
            <div style="position: absolute; left: 130px; top: 120px">x1</div>

            <div style="position: absolute; right: 5px; top: 121px">
              <img
                style="width: 15px; margin-left: 8px"
                src="../assets/img/coinmall/coin.png"
                alt=""
              />
              5999
            </div>
            <!--  -->
            <van-button plain hairline type="primary" size="mini" round style="position: absolute;left: 290px;padding-top: 0;"
              ><van-cell title="分享" @click="showShare = true" style="color:rgb(7,193,96); font-size:14px"/>
              <van-share-sheet
                v-model="showShare"
                title="立即分享给好友"
                :options="options"
                @select="onSelect"
            /></van-button>
              <van-button plain hairline type="primary" size="mini" round style="position: absolute;left: 219px;padding-top: 0; font-size:14px" @click="deleteDiv">删除订单</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
      ],
    };
  },
  methods: {
    deleteDiv(){

    },
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
     onClickLeft(){
      this.$router.push('/coinmall')
    },
    onClickRight() {
      Toast("按钮");
    },
  },
};
</script>

<style  scoped>
div {
}
</style>
