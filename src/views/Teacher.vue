<template>
    <div class="teacher outer">
        <div class="scroll">
            <div class="head">
                 <img src="../assets/img/h5/back.png" alt="" @click="back">
                <img src="../assets/img/h5/more.png" alt="" @click="more">
            </div>
            <div class="bg"></div>
            <div class="main">
                <div class="container">
                    <div class="avatar">
                        <div :style="{backgroundImage:`url(${obj.avatar})`}"></div>
                    </div>
                    <div class="guanzhu">+ 关注</div>
                    <div class="tname">{{obj.tname}}</div>
                    <div class="sub">{{obj.sub}}<span>&#x3000;|&#x3000;</span>{{obj.fs}}万粉丝</div>
                    <div class="infor1">{{obj.infor}}</div>
                    <div class="school">
                        <span>{{obj.school}}</span>
                        <span>{{obj.edu}}</span>
                        <span>{{obj.charact}}</span>
                    </div>
                    <div class="classlist">
                        <div>课程·{{classList.length}}</div> 
                        <div class="item"  v-for="p,i of classList" :key="i">
                            <span>web</span>{{p.title}}
                            <div>{{p.detail}}
                                <div><span>￥</span>{{p.price}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="introduce">
                <div class="container">
                    <div>介绍</div>
                    <div>&#x3000;{{obj.introduce}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import '../assets/css/teacher.css';
export default {
    props : ['tid'],
    data(){
        return {
            obj : {},
            classList :[],
        }
    },
    methods:{
        back(){
            history.go(-1)
        },
        more(){

        }
    },
    mounted(){
        this.$axios({type:'get',url:'/teacher',data:`tid=${this.tid}`,collback:(obj)=>{
            this.obj = obj;
        }});
        this.$axios({type:'get',url:'/classlist',data:`tid=${this.tid}`,collback:(obj)=>{
            this.classList = obj;
            console.log(this.classList);
        }});
    }
}
</script>