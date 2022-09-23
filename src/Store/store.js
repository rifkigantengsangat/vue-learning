import axios from 'axios';
import { createStore } from 'vuex';

 const store = createStore({
    state:{
        count: 0,
        dataApi:[],
        user:[],
        cart:[],
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
        },
        NOT_SAME_DATA (state,payload){
            const filtered = state.cart.some((data)=>data.id ===payload.id)
            if(filtered){
                state.cart.map((data)=>{
                    data.id === filtered.id
                })
                 return{
                    ...cart,qty : qty +=1
                 }
                 
            }
        }

    },
        actions:{
            async getDataUser (){
               const response = await axios.get()
            }
        }
});
export default store;