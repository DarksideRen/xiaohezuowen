<template>
    <div class="buy">
        <div class="head">
            <img src="../assets/img/h5/back.png" alt="" @click="back">
            确认订单
        </div>
        <div class="course">
            <div class="container">
                <div>{{dataObj.title}}</div>
                <div>{{dataObj.detail}}</div>
                <div>难度<img v-for="p,i of dataObj.star" :key="i" src="/img/classlist/star.png" alt=""></div>
                <div>授课老师:&#x3000;{{dataObj.tname}}</div>
                <div>活动<span>配套学习资料</span></div>
                <span>￥{{dataObj.price}}</span>
                <span>合计:&#x3000;</span>
            </div> 
        </div>
        <div class="pay">
            <div><input type="checkbox" id="agreen" v-model="agreen"><span>已阅读并同意</span><a href="javascript:;">《中小学生校外培训服务合同》</a></div>
            <div>应付款: <span>￥{{dataObj.price}}</span><div @click="pay">立即支付</div></div>
        </div>
    </div>
</template>

<script>
import '../assets/css/buy.css';
import {mapState,mapMutations} from 'vuex';
import { Dialog } from 'vant';
import { Toast } from 'vant';


export default {
    props : ['cid'],
    components: {
    [Dialog.Component.name]: Dialog.Component,
  },
    data(){
        return {
            dataObj : {},
            agreen : false,
        }
    },
    computed:{
        ...mapState(['uid','shopCar'])
    },
    methods:{
        ...mapMutations(['addShop','subShop']),
        back(){
            history.go(-1);
        },
        pay(){
            if(this.agreen){
                this.$axios({type:'post',url:`/order`,data:`uid=2&cid=${this.cid}`,collback:(obj)=>{
                    if(obj.code==200){
                        Toast.success('支付成功');
                        this.subShop(this.cid);
                        setTimeout(()=>{
                            history.go(-1);
                        },2000)
                    }
                }});
            }else{
                Dialog.alert({
                    message: '请先阅读《中小学生校外培训服务合同》并选择同意',}).then(() => {
                    // on close
                    });
            }
        }
    },
    mounted(){
         //请求数据
        this.$axios({type:'get',url:'/classdetail',data:`cid=${this.cid}`,collback:(obj)=>{
            this.avatar = require(`../assets/avatar/${obj.avatar}`);
            this.dataObj = obj;
            // console.log(this.dataObj);
        }});
    }
}
</script>