/**
 * Vuex -----  action
 * 
 */
export default {
    saveNickName(context,nickname){
        context.commit('saveNickName',nickname);//提交action
    },
    saveCartCount(context,cartcount){
        context.commit('saveCartCount',cartcount);
    }
}