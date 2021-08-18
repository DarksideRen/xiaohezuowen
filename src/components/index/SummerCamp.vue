<template>
    <div class="summerCamp card">
        <div class="container">
            <div>
                <div class="title">暑期夏令营体验课
                    <div>距离结束&nbsp;<span>{{hours}}</span>&nbsp;:&nbsp;<span>{{minutes}}</span>&nbsp;:&nbsp;<span>{{second}}</span></div>
                </div> 
                <div v-for="p,i of summerCamp" :key="i" @click="jump(p)">
                    <div class="content" >
                        <div class="img" :style="{backgroundImage : p.imgurl}"></div>
                        <div class="text">
                            <div>
                                <div>{{p.sub}}</div>
                                <span>{{p.title}}</span>
                            </div>
                            <div>{{p.detail}}</div>
                            <div>
                                <span>￥</span><span>0</span><button>去报名</button>
                            </div>
                        </div>    
                    </div>
                    <div class="hr" v-if="i < summerCamp.length-1"></div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    props : ['summerCamp'],
    data(){
        return{
            jumpurl : '',
            second : '',
            minutes : '',
            hours : '',
            endTime : '',
        }
    },
    methods:{
        //跳转h5专题页并传年级id
        jump(p){
            let jumpurl = `/img${p.jumpurl}`;
            let gradeId = p.gradeid;
            this.$router.push(`/h5?jumpurl=${jumpurl}&title=夏令营体验课&gradeId=${gradeId}`);
        }
    },
    mounted(){
        //计算相差时间
        setInterval(()=>{
            let countDown = (this.endTime - new Date())/1000;
            this.second = Math.floor(countDown%60);
            this.second = this.second < 10 ? '0'+this.second : this.second;
            this.minutes = Math.floor(countDown%3600/60);
            this.minutes = this.minutes < 10 ? '0'+this.minutes : this.minutes;
            this.hours = Math.floor(countDown/3600);
            this.hours = this.hours < 10 ? '0'+this.hours : this.hours;
            // console.log(this.hours,this.minutes,this.second);
        },1000)
    },
    beforeUpdate(){
        this.summerCamp.forEach(item=>{
            item.imgurl = `url(${item.imgurl})`;
            // console.log(item);
        });
        //转换数据库预定时间
        let data = this.summerCamp[0].endtime;
        let day = data.split("T")[0];
        let time = data.split("T")[1].split(".")[0];
        let endTime = day.split("-").join("/")+' '+time;
        this.endTime = new Date(endTime);
        
    }
}
</script>