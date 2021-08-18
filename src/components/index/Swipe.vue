<template>
    <div class="swipe">
        <div class="container">
            <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white" @click="jump">
                <van-swipe-item v-for="p,i of swipe" :key="i" @click="jump(p)">
                    <img :src="p.imgurl" alt="" :style="{height:height}">
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>
<script>
export default {
    props : ['swipe']
,    data(){
        return {
            height : '',
        }
    },
    methods:{
        jump(p){
            let jumpurl = `/img${p.jumpurl}`;
            let title = p.title;
            this.$router.push(`/h5?jumpurl=${jumpurl}&title=${title}`);
        }
    },
    mounted(){
        //修正轮播图片的高度
        let style = getComputedStyle(document.getElementsByClassName('my-swipe')[0]);
        this.height = parseInt(style.width*596/1008)+'px';
    },
}
</script>