<template>
<div>
    
    <van-nav-bar
        title="修改学员姓名"
        right-text="保存"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        class="nav"
    />
    <van-notice-bar
    left-icon="volume-o"
    text="请填写学员真实姓名，方便报课后辅导老师跟踪辅导，学员姓名完善后不可修改，请谨慎填写"
    />
    <form >
        <input type="text" 
        class="inputUserName"
       :placeholder="$store.state.realname" 
        v-model="realname"
        :disabled="disabled"
      >
        <div>请输入不超过6个汉字</div>
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
        return {
            realname:"",
            disabled:false,
        }
    },
    methods:{
        onClickLeft(){
            this.$router.push("/update")
        },
        onClickRight(){
            this.axios.put("/updateRealName",`newname=${this.realname}&username=${this.$store.state.username}`).then(result=>{
              console.log(result);
              if(result.data.code==200){
                this.$toast.success("真实姓名已修改")
                this.disabled=true;
                this.$store.commit('Modi',this.realname); 
              }else{
                this.$toast.fail("用户名修改失败")
              }
            }) 
        },
    }
}
</script>