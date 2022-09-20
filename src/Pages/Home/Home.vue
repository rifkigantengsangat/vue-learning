<script>
import Navbar from "../../components/Navbar.vue";
    export default{
    name: "home",
    data() {
        return {
            data: [],
            loading: false,
            error: false,
            textMessage: "",
        };
    },
    components: { Navbar }
}
</script>
<template>
   
    <router-link to="/about">About</router-link>
    </template>