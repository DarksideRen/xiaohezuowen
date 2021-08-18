<template>
    <nav>
        <van-grid :column-num="4"  :gutter="10" :border="false">
            <van-grid-item v-for="(p,i) of branch" :key="i" :icon="myicon[i]" :text="p" @click="select(i)"/>
        </van-grid>
    </nav>
</template>
<script>

export default {
    data(){
        return {
            branch : ['拼音','词汇','语法','修辞','阅读','写作','历史','全部'],
            myicon :[ 'py.png',
                    'cy.png',
                    'yf.png',
                    'xc.png',
                    'yd.png',
                    'xz.png',
                    'ls.png',
                    'all.png',]
        }
    },
    methods:{
        select(sub){
            switch(sub){
                case 5: this.$router.push('/classlist');break;
            }
        }
    },
    beforeMount(){
        this.myicon.forEach((item,i,arr)=>{
            arr[i] = require(`../../assets/img/index/${item}`)
        });
        // console.log(this.myicon);
    }
}
</script>