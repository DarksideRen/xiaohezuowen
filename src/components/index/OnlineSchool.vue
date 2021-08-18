<template>
    <div class="onlineSchool card">
        <div class="container">
            <div>
                <div class="title">网校名师课程推荐</div>
                <div v-for="p,i of onlineSchool" :key="i" @click="jump(p.tid)">
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
                    <div class="go">
                        <span>{{p.sub}}</span><span>{{p.infor3}}</span> 
                        <div>￥<span>10</span></div>
                        <button>去报名</button>
                    </div>
                    <div class="hr" v-if="i < onlineSchool.length-1"></div>
                </div>
                <div class="more" @click="toTchList"><router-link to="/teacherlist">更多名师</router-link></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props : ['onlineSchool'],
    data(){
        return {
            detail : {
                url :'url(/img/index/swipe2.jpg)',
                tname : '于振魁',
                school : '北京传媒大学',
                edu : '本科',
                infor1 : '擅长将知识与实际生活联系，注重培养学生能力和思维训练',
                infor2 : '专注用表情包让学生记住知识以及很多' 
             },
        }
    },
    methods:{
        jump(tid){
            this.$router.push(`/teacher/${tid}`)
        },
        toTchList(){
            // this.$router.push(`/teacherlist`)
        }
    },
    beforeUpdate(){
        this.onlineSchool.forEach(item=>{
            item.imgurl = `url(${item.imgurl})`;
        })
    }
}
</script>
