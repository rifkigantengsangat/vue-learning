import { createStore } from 'vuex';

 const store = createStore({
    state:{
        count: 0,
        dataApi:[],
        user:[],
    },
    getters:{},
    mutations:{
        INCREMENT(state) {
            state.count++;
        },
        PUSH_DATA (state,payload){
            state.dataApi.push(payload);
        },
        SET_USER({user},payload){
          user.push(payload);
        }
    },
        actions:{}
});
export default store;