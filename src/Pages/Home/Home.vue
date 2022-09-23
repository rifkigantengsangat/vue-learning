<template>
<div>
   <HomeTop/>
</div>

</template>





<script>
import Navbar from "../../components/Navbar.vue";
import HomeTop from "../../components/HomeTop.vue";
import { reactive, ref } from "vue";
export default {
    name:"Home",
    setup(){
        const  name=ref('rifki')

        const handleClick = ()=>{
            name.value='kontol'
        }
        return{
name,handleClick
        }
      
    },
    created(){
    },
    mounted(){
        console.log('mounted')
    },
    data(){
        return{
            score:50
        }
    },
    components:{
            Navbar,
            HomeTop
        }
}
</script>
