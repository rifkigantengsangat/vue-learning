<script >
  export default {
    props:['data-api']
  }
</script>

<template>
<h1>{{name}}</h1>
<h1>{{age}}</h1>
<div v-for="(datas,index) in data-api" >
    <div :key='index'>
    {{datas.id}}
    </div>
</div>
</template>