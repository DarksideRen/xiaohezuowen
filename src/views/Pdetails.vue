<template>
  <div>
    <van-nav-bar
      title="商品详情"
      left-text=""
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div id="p-details">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" @change="onChange">
        <van-swipe-item style="height:418px;"><img :style="{height:height}" src="../assets/img/coinmall/newarrival/p1/1.jpg" alt=""></van-swipe-item>
        <van-swipe-item style="height:418px;"><img :style="{height:height}" src="../assets/img/coinmall/newarrival/p1/2.jpg" alt=""></van-swipe-item>
  <van-swipe-item style="height:418px;"><img :style="{height:height}" src="../assets/img/coinmall/newarrival/p1/3.jpg" alt=""></van-swipe-item>
  <van-swipe-item style="height:418px;"><img :style="{height:height}" src="../assets/img/coinmall/newarrival/p1/4.jpg" alt=""></van-swipe-item>
      </van-swipe>
      <!-- <div style="width:35px; height:20px; line-hight:25px; backgroundColor:black; opacity: 50%; color:white; border-radius: 5px; text-align: center; position: absolute; right:25px; top:430px; z-index: 2000;" >{{i}}/4</div> -->
      <div>
        <ul style="margin: 8px;">
          <li style="letter-spacing: 1px; font-weight: bold; font-size:19px; margin: 8px;">星际梦想家系列公仔（12款可选）</li>
          <li class="price" style="margin-bottom: 8px; color:rgb(251, 122, 41);font-weight: bold; font-size:19px;">
            <img
              style="width: 15px; margin-left: 8px; "
              src="../assets/img/coinmall/coin.png"
              alt=""
            /> 5999
          </li>
          <li
            style="
              background-color: rgb(246, 246, 246);
              width: 100%;
              height: 8px;
            "
          ></li>
          <li><van-cell is-link @click="showPopup"><span style="color:rgb(146,146,146); padding-bottom: 0;">规格</span><span style="margin: 8px;">【摆件-粉色嘟嘟】</span></van-cell>
          <van-popup v-model="show" position="bottom" :style="{ height: '65%' }" closeable round>
            <div style="margin: 15px;position: relative;">
              <img src="../assets/img/coinmall/newarrival/p1/1.jpg" alt="" style="width: 100px; height: 100px; position: absolute; top: 34px">
              <ul style="position: absolute; right: 0px; top: 32px">
                <li>星际梦想家系列公仔（12款可选）</li>
                <li style="color:rgb(238,127,48);font-weight: bold; font-size:19px"><img
              style="width: 15px; margin-left: 8px; "
              src="../assets/img/coinmall/coin.png"
              alt=""
            /> 5999</li>
              </ul>
              <div>
                <div style="position: absolute;  top: 152px; left:1px">颜色</div>
                <ul style="display: flex;position: absolute; top:182px">
                  <li>
                    <div class=a style="" v-if="!isSelected">粉色嘟嘟</div>
                    <div class=b style="" v-else>粉色嘟嘟</div>
                  </li>
                  <li>
                    <div class=b style="width:90px; height:30px; background-color:rgb(241,241,241); font-size:14px; line-height:30px; text-align: center;border-radius: 50px;margin-right: 10px;">橙色嘟嘟</div>
                  </li>
                  <li>
                    <div style="width:90px; height:30px; background-color:rgb(241,241,241); font-size:14px; line-height:30px; text-align: center;border-radius: 50px;margin-right: 10px;">紫色嘟嘟</div>
                  </li>
                </ul>
                <div style="width:355px; height:40px;backgroundColor:rgb(238,127,48); font-size:14px; line-height:40px; text-align: center;border-radius: 50px;margin-right: 10px; position: absolute; bottom:-490px; disabled; color:white;margin:0 auto; left:-5px">确定</div>
                <!-- <van-button round color="rgb(241,241,241)" style="color:black">圆形按钮</van-button> -->
              </div>
            </div>
          </van-popup>
          </li>
          <hr style="margin:10px;margin-top:0 ;height:1px;border:none;border-top:1px solid rgb(144,148,153);" /> 
          <li @click="editAddress" style="margin: 8px; margin-top:0; margin-left: 15px;"><span style="color:rgb(146,146,146); margin-bottom: 5px;">地址</span><span style="font-size:16px;"><img style="width: 15px;margin-left: 8px;" src="../assets/img/coinmall/position2.png" alt=""> 北京市</span><van-icon name="arrow-left"
          <hr style="height:1px;border:none;border-top:1px solid rgb(144,148,153);weight: 10px" /> 
          <li style="margin: 8px; margin-top:0; margin-left: 15px; font-size:15px;"><span style="color:rgb(146,146,146)">免运费</span></li>
          <li
            style="
              background-color: rgb(246, 246, 246);
              width: 100%;
              height: 8px;
            "
          ></li>
        </ul>
        <p style="font-size:15px; margin: 10px; color:rgb(110,110,110)">
          <span style="margin: 10px; margin-left: 3px;">重要声明：</span>
          <br>
          <div style="font-size:15px; margin: 10px; color:rgb(110,110,110)">
          1请确认下单款式,下单后不能更换款式、不能取消兑 换;
          2请确认收货地址和联系方式,下单后不支持修改地 址和联系方式;
          3收货后,非商品质量/发错货问题,不支持退换,强
          制退回产生的运费由用户承担;
          4.因拍摄灯光及不同显示器可能造成图片与实物有色 差,请以实物为准;
          5.因物流限制,香港地区送货上门时需额外支付20元 港币物流费,敬请谅解
          </div>
          
        </p>
        <li
            style="
              background-color: rgb(246, 246, 246);
              width: 100%;
              height: 8px;
              list-style:none
            "
          ></li>
        <div style=" height:600px">
          <div style="margin: 10px; margin-top:10px;font-weight: bold; font-size:19px; color:rgb(105,105,105)">商品详情</div>
          <div style="margin: 10px;">
            <img style="width: 100%;
  height: 100%;" src="../assets/img/coinmall/newarrival/p1/pdetails/1.jpg" alt="">
          <img style="width: 100%;
  height: 100%;" src="../assets/img/coinmall/newarrival/p1/pdetails/2.jpg" alt="">
  <img style="width: 100%;
  height: 100%;" src="../assets/img/coinmall/newarrival/p1/pdetails/3.jpg" alt="">
  <img style="width: 100%;
  height: 100%;" src="../assets/img/coinmall/newarrival/p1/pdetails/4.jpg" alt="">
  <img style="width: 100%;
  height: 100%;" src="../assets/img/coinmall/newarrival/p1/pdetails/5.jpg" alt="">
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
      isSelecte: false,
      i: 0,
      height : '100%',
      show: false,
    };
  },
  
  methods: {
    onClickLeft(){
      this.$router.push('/coinmall')
    },
    onChange(index) {
      parseInt(index);
      index-2;
      // Toast('当前 Swipe 索引：' + index+1);
    },
      showPopup() {
      this.show = true;
      
    },
    
    onClickRight() {
      Toast("按钮");
    },
    editAddress() {
      this.$router.push("/editaddress");
    },
  },
  mounted(){
        this.height = parseInt(document.getElementsByClassName('swipeItem')[0].style.width*596/1008)+'px';
        // console.log(document.getElementsByClassName('my-swipe')[0].style.height);
    }
};
</script>
<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 350px;
  text-align: center;
  background-color: #39a9ed;
}
.a {
  width:90px; height:30px; background-color:rgb(253,241,230); font-size:14px; line-height:30px; text-align: center;border-radius: 50px; margin-right: 10px; border:1px solid rgb(255,159,63); color: rgb(255,159,63);
}
.b{
  width:90px; height:30px; background-color:rgb(241,241,241); font-size:14px; line-height:30px; text-align: center;border-radius: 50px;margin-right: 10px;
  
}
</style>
