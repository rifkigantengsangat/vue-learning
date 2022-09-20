<script setup>
  import TestProps from '../src/components/TestProps.vue'
  import { ref,reactive, onMounted} from 'vue'
  const name = ref('')
  const data = ref([]) ;
 
  const increment = ()=>{
    age.value += 1
  }
  const handleChange = (e)=>{
    name.value = e.target.value
  }
  const fetchingData = async ()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
   const json = await response.json()
   data.value = json;
  }
  onMounted(()=>{
    fetchingData();
  })
  
const filteredData =()=>{
 return data.value.filter((value)=> value.username.toLowerCase().indexOf(name.value))
}
  
</script>

<template>
 
 <input v-model= 'name' @change="handleChange">
 <div v-for="(data,index) in filteredData" :key="index">
<h1>{{data.username}}</h1>
</div>
 <TestProps :data-api="data"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
