<template>
<div class="w-full h-16 bg-white shadow-lg">
 <div class=" h-10  py-5 mx-auto w-3/4 flex ">
    <div class="flex flex-row gap-4">
        <div>
            <router-link to='/' v-bind:class="[getRouteName === 'Home' ? 'text-black' : 'text-gray-200']" >Home</router-link>
        </div>
        <div>
            <router-link to="/about" v-bind:class="[getRouteName === 'About' ? 'text-black' : 'text-gray-200']" >About</router-link>
        </div>
        <div>
            <router-link to="/contact" v-bind:class="[getRouteName === 'Contact' ? 'text-black' : 'text-gray-200']" >Contact</router-link>
        </div>
    </div>
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