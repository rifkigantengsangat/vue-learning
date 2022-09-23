<template>
    <div>
        <div v-if="!loading">
            <div v-for="(datas,index) in data" :key="index">
                {{datas.username}}
                <div>

                    <router-link :to="'/'+datas.id">test</router-link>
                </div>
            </div>
            
        </div>
        <div v-if="loading">
        <h1>Loadinggggggggg</h1>
        </div>
        
    </div>
</template>
<script>
    import  getData from '../usebility/getData'
export default {
    name: "homeTop",
    setup() {
        const {data,loading,error,fetchingData}= getData();
        fetchingData();
        return {data,loading,error,fetchingData}

    }
    

    
}
</script>
<style lang="">
    
</style>