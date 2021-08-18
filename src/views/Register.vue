<template>
    <div>
        <div  class="reg">
            <router-link to="/login" class="log">去登录</router-link>
        </div>
        <van-icon name="friends-o" class="ico1"/>
        <van-icon name="eye-o" class="ico2"/>
        <van-icon name="eye-o" class="ico3"/>
        <form  class="form">
            <input type="text" placeholder="请输入账号"  v-model="username" @blur="checkUsername">
            <input type="password" placeholder="请输入密码"  v-model="pwd" @blur="checkPwd"><br>
            <input type="password" placeholder="再次确认密码" class="confirm"  v-model="repwd" @blur="checkRePwd"><br>
            <input type="button" value="注册" class="btn2"  @click="checkForm" >
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
.ico3{
  top: 64vh;
}
.reg{
    position: relative;
    width: 100vw;
    height: 40vh;
    border-radius: 0 0  20% 20% ;
    background: url(../assets/img/index/login.webp) no-repeat ;
    font-size: 5vw;
    font-weight:700;
    
}
.reg>:first-child{
  display: inline-block;
  position: absolute;
  left: 72vw;
  top: 5vh;
  width: 15vw;
  height:5.665vh;
  padding: 0 3vw;
  line-height: 10vw;
  background-color: #2fce6d;
  color: white;
  text-align: center;
  border-radius: 5vw;
  font-weight: 530;  
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
    border-bottom: 1px solid rgba(0, 0, 0, 0.322);
}

input.confirm{
    margin-top: 3vh;
    border-bottom: 1px solid rgba(0, 0, 0, 0.281);
}
input.btn2{
  color: white;
    width: 76vw;
    padding: 0;
    margin-top: 4vh;
    border-radius: 2.832vh;
    background-color: #2fce6d;
    border: none;
    font-size: 5vw;
    font-weight: 520;
}

</style>

<script>
export default {
  data() {
    return {
      username: '',  //username将于用户名文本框实现双向数据绑定
      pwd: '',  
      repwd: ''
    }
  },
  methods: {
    //验证用户名格式
    checkUsername(){
      // 验证用户名  要求单词字符6~15位 [A-Za-z0-9_]
      let reg = /^\w{6,15}$/;
      if(reg.test(this.username)){ // 验证成功
        this.$toast.success("用户名格式正确")
        return true;
      }else{ // 验证失败
        this.$toast.fail("用户名格式错误,请输入字符6~15位")
        return false;
      }
    },
    //验证密码格式
     checkPwd(){
      let reg = /^\d{6}$/;
      // this.pwdState = reg.test(this.pwd)?'success':'error';
      if(reg.test(this.pwd)){ // 验证成功
        this.$toast.success("密码格式正确")
        return true;
      }else{ // 验证失败
         this.$toast.fail("密码格式错误,请输入字符6位")
        return false;
      }
    },
    //验证再次输入密码格式
    checkRePwd(){
      let reg = /^\d{6}$/;
      // this.pwdState = reg.test(this.pwd)?'success':'error';
      if(reg.test(this.repwd) && this.pwd==this.repwd){ // 验证成功
        return true;
      }else{ // 验证失败
        return false;
      }
    },

   

    // 点击快速注册之后执行，验证表单
    checkForm(){ 
      if (this.checkUsername() 
        && this.checkPwd() && this.checkRePwd()){
        console.log('执行注册业务...');
        this.axios.post("/register",`username=${this.username}&password=${this.pwd}`).then(result=>{
              console.log(result);
              if(result.data.code==200){
                console.log("注册成功")
                this.$toast("注册成功")
                this.$router.push("/login")
              }else{
                this.$toast("用户名已存在")
              }
        }) 
      } 
    }
  }
}
</script>