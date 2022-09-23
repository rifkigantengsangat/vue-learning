<template>
    <div>
     {{state}}
        
    </div>
</template>
<script>
    import  getData from '../usebility/getData'
    import { onMounted, toRefs } from 'vue';
export default {
  props:{
    state : Number, 
   
  },
    name: "homeTop",
   setup(props) {
        
        const {state} = props;
        const {data,loading,error,fetchingData}= getData();
       fetchingData()
        return {data,loading,error,fetchingData,state}

    }
    

    
}
</script>
<style lang="">
    
</style>