<template>
    <header>
        <div class="container">
            <!-- 年级 -->
            <div class="grade"  :style="{width : grade.length == 2 ? '10.930vw' : '15.185vw'}" @click="showPopup" >{{grade}}<a></a>
            </div>
            <div class="search" :style="{width : grade.length == 2 ? '80.185vw' : '75.93vw'}">
                <!-- 搜索栏文字滚动 --> 
                <ul class="textSwipe">
                    <li  v-for="item,i of textSwipe" :key="i">{{item.title}}</li>
                </ul>
            </div>
        </div>
        <div class="popup" :style="popup" @click="select">
            <div class="content">
                <div>学生九月升入年级</div>
                <div class="type">
                    小学
                    <ul>
                        <li v-for="p,i of gradeArr1" :key="i" :class="selected == i+1?'active':''" :data-i="i+1">{{p}}</li>
                    </ul>
                </div>
                <div class="type">
                    初中
                    <ul>
                        <li v-for="p,i of gradeArr2" :key="i" :class="selected == i+7?'active':''" :data-i="i+7">{{p}}</li>
                    </ul>
                </div>
                 <div class="type">
                    高中
                    <ul>
                        <li v-for="p,i of gradeArr3" :key="i" :class="selected == i+11?'active':''" :data-i="i+11">{{p}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import {mapState} from 'vuex'
export default {
     props:['textSwipe'],
     data(){
        return {
            load : true ,
            textSwipe1 : [],
            grade : '',
            gradeArr1 : ['一年级','二年级','三年级','四年级','五年级','六年级'],
            gradeArr2 : ['预初','初一','初二','初三'],
            gradeArr3 : ['高一','高二','高三'],
            popup : {
                width : 0,
                opacity : 0,
            },
            selected : '',
        }
    }, 
    computed:{
        ...mapState(['gradeId'])
    },
    methods:{
        showPopup(){
            //点击显示弹出页
            this.popup.width = '100vw';
            this.popup.opacity = 1;
        },
        select(e){
            //点击遮罩区域则弹出页隐藏
            if(e.target.className == 'popup'){
                this.popup.opacity = 0;
                setTimeout(()=>{
                    this.popup.width = 0;
                },500);
            }
            //点击年级按钮，发送请求，刷新页面
            if(e.target.nodeName == 'LI'){
                this.selected = e.target.dataset.i,
                //首页年级显示更新
                this.grade = e.target.innerHTML;
                //隐藏弹出页
                this.popup.opacity = 0;
                setTimeout(()=>{
                    this.popup.width = 0;
                },500);
                //子给父传参
                this.$emit('changeGrade',this.selected);  
            }
        },
    },
    beforeUpdate(){
        console.log(this.gradeId);
        // setInterval(()=>{
        //     console.log(this.textSwipe);
        // },1000)
        this.textSwipe1 = [...this.textSwipe,this.textSwipe[0]]
        // console.log(this.textSwipe);
        // console.log(this.textSwipe1);
        if(this.load){
            switch (this.gradeId){
                case 1 : this.grade = '一年级';break;
                case 2 : this.grade = '二年级';break; 
                case 3 : this.grade = '三年级';break; 
                case 4 : this.grade = '四年级';break; 
                case 5 : this.grade = '五年级';break; 
                case 6 : this.grade = '六年级';break; 
                case 7 : this.grade = '预初';break; 
                case 8 : this.grade = '初一';break; 
                case 9 : this.grade = '初二';break; 
                case 10 : this.grade = '初三';break; 
                case 11 : this.grade = '高一';break; 
                case 12 : this.grade = '高二';break; 
                case 13 : this.grade = '高三';break;
                default : this.grade = '初一' ;
        };
        this.selected = this.gradeId;
        this.load = false;
        }   
    }
}
</script>