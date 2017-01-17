import vue from 'vue';
import vuex from 'vuex';
import mutationTypes from './mutation-types'
vue.use(vuex);
var state = {

}
export default new vuex.Store({
    state: {
        'toolbarTitle': '全部'
    },
    mutations: {
        [mutationTypes.CHANGE_TOOLBAR_TITLE](state, title) {
            state.toolbarTitle = title;
        }
    }
})