/**
 * Vuex -----mutation（变化）
 * 
 * 参数：context上下文、需要保存修改的参数
 */
export default {
    saveNickName(state,nickname){
        state.nickname=nickname;
    },
    saveCartCount(state,cartcount){
        state.cartcount=cartcount;
    }

    
}