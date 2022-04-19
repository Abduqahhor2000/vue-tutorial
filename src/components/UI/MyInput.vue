<template>
    <input :value="modelValue" @input="changeInput"/>
</template>

<script>
export default {
    name: "my-input",
    props:{
        modelValue:{
            type: [String, Number]
        }
    },
    methods:{
        changeInput(event){
            this.$emit("update:modelValue", event.target.value)
        }
    }
}
</script>

<style>

</style>