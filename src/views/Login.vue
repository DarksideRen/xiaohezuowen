<template>
    <div>
        <div  class="login">
            <h4>小荷语文</h4>
        </div>
        <van-icon name="friends-o" class="ico1"/>
        <van-icon name="eye-o" class="ico2"/>
        <form  class="form">
            <input type="text" placeholder="请输入账号" v-model="username">
            <input type="password" placeholder="请输入密码"  v-model="pwd"><br>
            <input type="button" value="登录" class="btn"  @click="checkForm">
            <div class="register">
               <router-link to="/register">注册账号</router-link>
                <span>|</span>
                <a>忘记密码</a>
            </div>
        </form>
    </div>
</template>
           
<style scoped>
[class^=ico]{
  position: absolute;
  left:15vw;
  z-index: 10000;
  font-size: 7vw;
}
.ico1{
  top: 46vh;
}
.ico2{
  top: 55vh;
}
.login{
    width: 100vw;
    height: 45vh;
    border-radius: 0 0  20% 20% ;
    background: url(../assets/img/index/login.webp) no-repeat 
}
.login>:first-child{
    margin-left: 10vw;
    color: green;
    font-size: 5vw;
}
.form{
    position:fixed ;
    top: 35vh;
    width: 93.75vw;
    height: 50vh;
    background-color: white;
    border-radius: 7vw;
    margin-left: 3.125vw;
    /* margin-top: 35vh; */
    box-shadow: 0px 1px 4px #9ff3bf;
}
.form>input{
    padding-left: 14vw;
    width: 59vw;
    height: 5.665vh; 
    margin-left:9vw;
    border: none;
    font-size: 5vw;
}
.form>:first-child{
    margin-top: 10vh;
    border-bottom: 1px solid rgba(0, 0, 0, 0.342);
}
.form>:nth-child(2){
    margin-top: 3vh;
    border-bottom: 1px solid rgba(0, 0, 0, 0.384);
}
input.btn{
    width: 76vw;
    padding: 0;
    margin-top: 4vh;
    border-radius: 2.832vh;
    background-color: #2fce6d;
    border: none;
    color: white;
    font-size: 5vw;
    font-weight: 520;
}
.register{
    margin-left:21.125vw;
    margin-top:8.125vh ;
    color:#2fce6d ;
    font-size: 5vw;
}
.register>a{
    color: black;
}

.register>:nth-child(2){
    padding: 0vw 5vw;
    color:#2fce6d ;
}
h4{
  position: relative;
  top: 5vh;
}
</style>

<script>
export default {
  data() {
    return {
      username: '',  //username将于用户名文本框实现双向数据绑定 
      pwd: '',  
    }
  },
  methods: {
    // 点击快速注册之后执行，验证表单
    checkForm(){
      this.axios.post(`/login`,`username=${this.username}&password=${this.pwd}`).then(result=>{
        console.log(result);
        if(result.data.code==200){
            this.$toast.success("登陆成功");
            this.$router.push("/index2");
            // 执行`mutations`更新`vuex`中的用户状态信息
            this.$store.commit('loginOK', this.username);
        }else {
            this.$toast.fail("用户名不存在或密码错误")
        }
      })
    }
  }
}
</script>