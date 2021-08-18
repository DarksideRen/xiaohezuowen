<template>
<div>
    <van-nav-bar
        title="修改用户名"
        right-text="保存"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        class="nav"
    />
    <form >
        <input type="text" 
        class="inputUserName" 
        :placeholder="$store.state.username" 
        v-model="newname"
        >
        <div>请输入单词字符6~15位</div>
    </form>
</div> 
</template>
<style  scoped>
     .nav{
    margin-bottom: 2vh;
    padding: 12px;
    border-bottom: 3px solid  #2fce6d;
    font-size: 5vw
   }
   .inputUserName{
       width: 80vw;
       height: 7vh;
       margin-left: 10vw;
       border: none;
       border-bottom: 1px solid rgba(0, 0, 0, 0.342);
        font-size: 5vw;
   }
   .inputUserName+div{
       margin-left: 10vw;
       margin-top: 3vh;
       font-size: 5vw;
   }
</style>
<script>
export default {
    data(){
        return{
            newname:"",
            oldname:this.$store.state.username
        }
    },
    methods:{
        onClickLeft(){
            this.$router.push("/update")
        },
        onClickRight(){
            // 1.验证要修改用户名格式是否正确
            let reg = /^\w{6,15}$/;
            if(reg.test(this.newname)){ // 验证成功
                this.$toast.success("用户名格式正确");
                // 2.格式正确才可以修改
                this.axios.put("/updateUserName",`newname=${this.newname}&oldname=${this.oldname}`).then(result=>{
                console.log(result);
                if(result.data.code==200){
                    this.$toast.success("用户名修改成功,请重新登陆")
                    this.$router.push("/login")
                }else{
                    this.$toast.fail("用户名已存在,请重新修改")
                }
            }) 
            }else{ // 验证失败
                this.$toast.fail("用户名格式错误,请输入字符6~15位")
                return false;
            }
            
        }
    }
}
</script>