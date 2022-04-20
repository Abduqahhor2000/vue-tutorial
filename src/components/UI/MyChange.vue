<template>
    <select v-model="selectedOption" @change="changeOption" class="form-select">
        <option disabled value=""></option>
        <option v-for="option in options" :key="option.id" :value="option.value">
          {{option.name}}
        </option>
    </select>
</template>

<script>
    export default {
        name: "my-change",
        props:{
            selectedOption: {
              type: String,
            },
            options: {
              type: Array
            }
        },
        methods:{
            changeOption(e){
                this.$emit("changeOption", e.target.value)
            }
        }
    }
</script>

<style>

</style>