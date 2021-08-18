<template>
<div>
    <!-- 导航开始 -->
    <van-nav-bar
        title="个人资料"
        left-arrow
        @click-left="onClickLeft"  
        class="nav"   
    />
    <!-- 导航结束 -->
    <div class="userPic">
        <van-icon name="photo-o" 
        class="iconpic" 
        />
        <span>头像</span>
        <van-uploader :after-read="afterRead" />
    </div>
    <van-cell title="用户名" is-link value="点击修改"  icon="user-o" @click="updateName"/>
    <van-cell title="真实姓名" is-link value="点击修改" icon="user-circle-o" @click="updateRealName"/>
    <!-- 性别开始 -->
    <van-cell title="性别" 
    is-link arrow-direction="down" 
    :value="$store.state.userSex" 
    icon="friends-o" 
    @click="chooseSex"
    /> 

    <van-action-sheet
    v-model="sex"
    :actions="sexActions"
    cancel-text="取消"
    close-on-click-action
    @cancel="onCancel"
    overlay="overlay"
    @select="selectSex"
    />
    <!-- 性别结束 -->
    
    
    <!-- 地区开始 -->
     <van-cell title="地区" is-link arrow-direction="down" value="请选择" icon="map-marked" />
    <!-- 地区结束 -->

    <!-- 年级开始 -->
    <van-cell title="年级" 
    is-link arrow-direction="down" 
    :value="$store.state.userGrade" 
    icon="bars" 
    @click="chooseGrade"/>

    <van-action-sheet
    v-model="grade"
    :actions="gradeActions"
    cancel-text="取消"
    close-on-click-action
    @cancel="onCancel"
    overlay="overlay"
    @select="selectGrade"
    />
    <!-- 年级结束 -->
    
</div>
    
</template>
<style  scoped>

.van-icon::before {
    color: #2fce6d;
    font-size: 7vw;
    margin-right: 4vw;
    display: inline-block;}
.userPic,
.van-cell{
    height: 8vh;
    font-size: 4.5vw;
    border-bottom: 1px solid #00000029;
    margin-top: 2vh;
}
.userPic{
    height: 13vh;
    line-height: 13vh;
}
.iconpic{
top:1vh
}
.userPic>:first-child{
    margin-left: 5vw;
}
/* .userPic>:nth-child(2){
     margin-left: 15vw;
} */
.userPic>:nth-child(3){
    margin-left:42vw;
}
.nav{
    margin-bottom: 2vh;
    padding: 12px;
    border-bottom: 3px solid  #2fce6d;
    font-size: 5vw
}


</style>
<script>
export default {
    data() {
        return {
        
        overlay:false,
        sex: false,
        sexVal:"点击修改",
        sexActions: [{ name: '男' }, { name: '女' }],
        grade: false,
        gradeActions: [{ name: '高中' }, { name: '初中' },{ name: '小学' }],
        }
    },
    methods:{
        afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file);
        },
        // 选择性别
        selectSex(action){
            console.log(action)
            console.log(action.name)
            this.$store.commit('Modisex',action.name);
            // 发送请求
            this.axios.put("/updateSex",`gender=${action.name=="男"?1:0}&username=${this.$store.state.username}`).then(result=>{
              console.log(result);
              if(result.data.code==200){
                this.$toast.success("用户性别已保存")
                this.disabled=true;
              }else{
                this.$toast.fail("性别保存失败")
              }
            }) 
        },
        // 选择年级
        selectGrade(action){
            console.log(action)
            console.log(action.name)
            // 保存到vueX里
            this.$store.commit('Modigrade',action.name);
             // 判断用户年级
            let gradeId
            if(action.name=="一年级"){
                    gradeId=1
            }else if(action.name=="二年级"){
                    gradeId=2
            }else{
                 gradeId=2
            }           
           
            // 发送请求
            this.axios.put("/updateSex",`grade=${gradeId}&username=${this.$store.state.username}`).then(result=>{
              console.log(result);
              if(result.data.code==200){
                this.$toast.success("用户年级已保存")
                this.disabled=true;
              }else{
                this.$toast.fail("年级保存失败")
              } 
            })    
        },
        onCancel() {
            Toast('取消');
        },
        onClickLeft(){
            this.$router.push("/my")
        },
        // 更新用户名
        updateName(){
            this.$router.push("/updateinfo")
        },
        // 更新真实姓名
        updateRealName(){
             this.$router.push("/updaterealname")
        },
        // 选择性别按钮
        chooseSex(){
            this.sex=true;

        },
        // 选择年级按钮
        chooseGrade(){
            this.grade=true
            this.overlay=true
        },
    }
}
</script>


