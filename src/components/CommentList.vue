<template>
    <div class="w-75 mx-auto">
        <div v-if="comments.length > 0">
            <TransitionGroup name="list" tag="ul">
            <comment-item 
                class="comment" 
                v-for="comment in comments" 
                :comment="comment" 
                :key="comment.id" 
                @remove="$emit('remove', comment)"
            /> 
            </TransitionGroup>
        </div>
        <div v-else>
            <h3 class="text-center text-danger">Comment not found</h3>
        </div>
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
    .list-move,
    .list-enter-active,
    .list-leave-active {
        transition: all 0.5s ease;
    }

    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateY(500px);
    }
</style>