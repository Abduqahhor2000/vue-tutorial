<template>
    <div class="modal" v-if="show" @click="hideModal">
        <div @click.stop class="modal_content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "my-modal",
    props:{
        show:{
            type: Boolean,
            default: false,
        }
    },
    methods:{
        hideModal(){
            this.$emit("update:modalVisibili", false)
        }
    }
}
</script>

<style>
    .modal{
        display: flex;
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 10;
        top: 0;
        left: 0;
    }
    .modal_content{
        margin: auto;
        width: 50%;
        min-height: 100px;
        border-radius: 10px;
        background-color: #fff;
        padding: 20px;
    }
</style>