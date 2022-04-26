<template>
     <navbar 
        class="container mt-3"
        v-model:modalVisibili="modalVisibili"
        :selectedOption="selectedOption"
        :options="options"
        v-model:selectedOption="selectedOption"
    />
    <router-view></router-view>
</template>

<script>
    import Navbar from "@/components/Navbar.vue"

    export default {
        components:{
            Navbar
        }
    }
</script>

<style>

</style>