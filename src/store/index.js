import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/store/mutation'
import actions from '@/store/action'

Vue.use(Vuex)

//状态
const state = {
    nickname:'',
    cartcount:0
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})