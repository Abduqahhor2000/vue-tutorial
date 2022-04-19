<template>
    <div class="w-75 mx-auto">
        <comment-item 
            class="comment" 
            v-for="comment in comments" 
            :comment="comment" 
            :key="comment.id" 
        /> 
    </div>
</template>

<script>
import CommentItem from "./CommentItem.vue"

export default {
    components: {
        CommentItem,
    },
    props:{
        comments: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
    .comment{
        border: 5px solid #ccc;
        padding: 10px;
        margin: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>