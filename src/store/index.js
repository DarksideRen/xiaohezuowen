import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gradeId : 4,
    uid :2,
    avatar : '/img/customer/1.jpg' ,
    shopCar : [],
    username: "1",
    realname: "请输入真实姓名",
    userSex: "请选择",
    userGrade: "请选择",
  },
  mutations: {
    setGrade(state,newval){
      state.gradeId = newval;
      // console.log(state.gradeId);
    },
    addShop(state,newval){
      state.shopCar.push(newval)
      console.log(state.shopCar);
    },
    subShop(state,newval){
      state.shopCar.splice(state.shopCar.indexOf(newval),1);
      console.log(state.shopCar);
    },
    //dyy
    loginOK(state, newname) {
      state.username = newname;
    },
    Modi(state, realName) {
        state.realname = realName;
    },
    Modisex(state, usersex) {
        state.userSex = usersex;
    },
    Modigrade(state, usergrade) {
        state.userGrade = usergrade;
    }
  },
  actions: {
  },
  modules: {
  }
})
