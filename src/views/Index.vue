<template>
    <div class="shouye">
        <div class="enter" @click="jump">直接进入</div>
        <div class="logo">
        </div>
        <router-link to="/login" class="login">登录 / 注册</router-link>
    </div>
</template>

<script>
//引入头部组件
import MyHeader from '../components/index/MyHeader.vue';
//引入导航组件
import Grid from '../components/index/Grid.vue';
// 引入轮播图组件
import Swipe from '../components/index/Swipe.vue';
//引入index页的css文件
import '../assets/css/index.css';

export default {
    components:{MyHeader,Grid,Swipe}, 
    data(){
        return {
            
        }
    }, 
    methods:{
        jump(){
            this.$router.push('/index2');
        }
    } 
}
</script>
<style scoped>
.shouye{
    width: 100vw;
    height: 100vh;
    background-color: white;
    position: relative;
}
.enter{
   position: absolute;
   top: 5.418vh;
   right: 5.33vw;
   width: 20.53vw;
   height: 3.94vh;
   border:1px solid #2fce6d;
   border-radius: 2vh;
   font-size: 4vw;
   line-height: 3.94vh;
   text-align: center;
   color: #2fce6d;
}
.logo{
    position: absolute;
    top: 29.916vh;
    left: 7.46vw;
    width: 81.666vw;
    height: 32.62vh;
    background-color: pink;
    background: url("../assets/img/index/logo.png") no-repeat ; 
    background-size: 100%;
}

.login{
    position: absolute;
    top: 80.935vh;
    left: 17.46vw;
    width: 67.733vw;
    height: 5.665vh;
    border-radius: 2.832vh;
    background-color: #2fce6d;
    color: white;
    text-align: center;
    line-height: 5.665vh;
    font-size: 5vw;
    /* box-shadow: 1px 1px 1px gray; */
}

</style>
