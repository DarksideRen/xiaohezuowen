<template>
    <div class="foot">
        <div class="container">
            <div>没找到合适的课程？问问学习老师</div>
            <div @click="jump">您的专属学习规划师</div>
            <div>- 我有止境，学无止境哦 -</div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        jump(){
            this.$router.push('/customer');
        }
    }
}
</script>