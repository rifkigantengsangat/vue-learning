<template lang="">
    <div>{{data.username}}</div>
    <div>{{data.phone}}</div>
    <div>{{data.website}}</div>
  <button @click="bacToRoute">Back</button>
</template>
<script>
     import {useRouter,useRoute} from 'vue-router'
     import getDataById from '../usebility/getDataById'
export default {
   setup (){
    const router = useRouter()
    const {params} = useRoute()
    const {data,loading,error,fetchingData} = getDataById();
    fetchingData(params.id);
    console.log(data)
    const backToRoute = ()=>{
        router.back('/')
    }
    return{
        data,backToRoute,
    }
   }
}
</script>
<style lang="">
    
</style>