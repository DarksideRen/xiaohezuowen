<template>
    <div>
       <van-nav-bar
  title="兑换金币"
  left-text=""
  right-text=""
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
        <div class="shadow">
            <div style="height:70px; "> 
                <img src="../assets/img/coinmall/recharge/logo.jpg" alt="" style="width:70px;">
            <span style="position: absolute;
    top: 90px;font-size:20px">小荷语文</span>
            </div>
            <div>
                <ul style="position: absolute;
    left: 90px;">
                    <li><span style="color:rgb(144,148,153)">￥</span> <span style="font-size:20px">0</span></li>
                    <li style="color:rgb(144,148,153)">人民币与金币兑换比例 = 1：1</li>
                </ul>
            </div>
        </div>
        <div>
            <span style="position: relative; left:18px">兑换金币</span>
        <van-field v-model="digit" type="digit" placeholder="请输入"  />

        <!-- <input type="text" placeholder="请输入" style="border:0;" v-model="a"> -->
        <hr style="height:1px;border:none;border-top:1px solid rgb(144,148,153);" /> 
        <span style="float: right;color:rgb(144,148,153); position: absolute; top:250px; right:18px">可兑换{{digit}}个金币</span>
        </div>
        <van-button round type="info" size=large disabled v-if="!digit">立即兑换</van-button>
        <van-button round type="info" size=large v-if="digit" @click="btnclick">立即兑换</van-button>


   
    </div>
</template>
<script>
import { Toast } from 'vant';

export default {
  data() {
    return {
        noneText: true,
        digit: "",
    }
  },
  methods:{
      onClickLeft() {
      this.$router.push('/coinmall')
    },
      btnclick(){
        this.$toast.success({
          message:'兑换成功',
        })
  
      }
  }
}

</script>

<style  scoped>
    /* title {
        font-weight: 800;
        letter-spacing: 7px;
    } */
    .shadow{
        width: 90%;
        height: 130px;
        margin: 20px;
        
        
   /* -webkit-box-shadow: #666 0px 0px 10px;
   -moz-box-shadow: #666 0px 0px 10px; */
   box-shadow: rgb(207, 196, 196) 0px 0px 12px;
   /* background: #EEFF99; */
    }
</style>