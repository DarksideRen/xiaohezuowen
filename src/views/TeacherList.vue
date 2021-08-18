<template>
    <div class="teacherlist outer">
        <div class="scroll">
            <div class="head">
                <img src="../assets/img/h5/back.png" alt="" @click="back">
                名师汇
            </div>
            <div class="card">
                <div class="container">
                    <div>
                        <div v-for="p,i of list" :key="i" @click="jump(p.tid)">
                            <div class="content">
                                <div class="img" :style="{backgroundImage : p.imgurl}"></div>
                                <div class="text">
                                    <div>{{p.tname}}</div>
                                    <div>
                                        <span>{{p.school}}</span>
                                        <span>{{p.edu}}</span>
                                    </div>
                                    <div>{{p.infor1}}</div>
                                    <div>{{p.infor2}}</div>
                                </div>
                            </div>
                            <div class="hr" v-if="i < list.length-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import '../assets/css/teacherlist.css';
export default {
    data(){
        return{
            list:[],
        }
    },
    methods:{
        back(){
            history.go(-1);
        },
        jump(tid){
            this.$router.push(`/teacher/${tid}`)
        }
    },
    created(){
        //请求数据
        this.$axios({type:'get',url:'/tchlist',data:``,collback:(obj)=>{
            this.list = obj;
            console.log(this.list);
            this.list.forEach(item=>{
            item.imgurl = `url(${item.imgurl})`;
        })
        }});
    }
}
</script>