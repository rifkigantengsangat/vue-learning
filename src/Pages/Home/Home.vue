<template>
<div>
   <HomeTop :state='count' />
   
</div>

</template>





<script>
import Navbar from "../../components/Navbar.vue";
import HomeTop from "../../components/HomeTop.vue";
import { reactive, ref,computed} from "vue";
import { useStore } from "vuex";
export default {
    name:"Home",
     setup(){
        const store = useStore();
        const dataApi = computed((store.state.dataApi));
        const count = computed(()=>(store.state.count));
        const handleClick = ()=>{
            store.commit('INCREMENT',count.value ++)
        }
        console.log(dataApi)
        return{
handleClick,count,dataApi
        }
      
    },
     
    components:{
            Navbar,
            HomeTop
        }
}
</script>
