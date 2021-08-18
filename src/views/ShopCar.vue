<template>
        <div class="classList">
            <div class="head">
                <img src="../assets/img/h5/back.png" alt="" @click="back">
                购物车
        </div>
        <div class="list dingdan">
          <div class="card" v-for="(p, i) of list" :key="i" @click="jump(p.cid)">
            <div class="container">
              <div>
                <div class="content">
                  <div
                    class="img"
                    :style="{ backgroundImage: `url(${p.imgurl})` }"
                  >
                    <div>每天{{ p.ctime }}</div>
                    <div>授课:&nbsp;{{ p.tname }}</div>
                  </div>
                  <div class="text">
                    <div>{{ p.title }}</div>
                    <div>{{ p.detail }}</div>
                    <div>
                      难度<span
                        ><img
                          v-for="j of p.star"
                          :key="j"
                          src="/img/classlist/star.png"
                          alt=""
                      /></span>
                    </div>
                  </div>
                </div>
                <!-- <div class="hr"></div>
                            <div class="price">
                                <span>{{p.price}}</span><span>￥</span> 
                            </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
import "../assets/css/classlist.css";
import { mapState } from "vuex";

export default {
    data(){
        return {
            list: [],
        }
    },
    methods:{
        back(){
            history.go(-1);
        },
        jump(cid){
            this.$router.push(`/classdetail/${cid}`);
        },
    },
    computed: {
    ...mapState(["shopCar"]),
    },
    mounted(){
        this.$axios({type:"get",url:"/classlist",data:`cid=${this.shopCar}`,collback:(obj)=>{
          console.log(obj);
          this.list = obj;
        }})
    }
}
</script>
<style>
    .dingdan{
        margin-top: 12.417vh !important;
    }
</style>