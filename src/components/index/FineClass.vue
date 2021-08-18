<template>
    <div class="fineClass card">
        <div class="container">
            <div>
                <div class="title">精选大招课</div>
                <div class="content">
                    <div v-for="p,i of fineClass" :key="i">
                        <div>{{p.sub}}</div>
                        <div>{{p.title}}</div>
                        <div>{{p.detail}}</div>
                        <div>0元体验<img src="../../assets/img/index/into.png" alt=""></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props :['fineClass'],
    data(){
        return {
           
        }
    }
}
</script>