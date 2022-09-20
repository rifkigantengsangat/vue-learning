<template>
<div class="w-full h-16 bg-white shadow-lg">
 <div class=" h-10 my-auto mx-auto w-3/4 ">
<router-link to='/' v-bind:class="[getRouteName === 'Home' ? 'text-black' : 'text-gray-200']" >Home</router-link>
<router-link to="/about" v-bind:class="[getRouteName === 'About' ? 'text-black' : 'text-gray-200']" >About</router-link>
 </div>
</div>
</template>

    <script>
    export default{
        name: 'navbar',
        data(){
            return {
                
    }
},
computed:{
    getRouteName(){
        return this.$route.name
    }
}
}

    </script>