<template>
    <div>
        <div>
            <div><b>Name:</b> {{comment.name}}</div>
            <div><b>Email:</b> {{comment.email}}</div>
            <div><b>Content:</b> {{comment.body}}</div>
        </div>
        <div>
            <button class="btn btn-danger" @click="$emit('remove', comment)">Delete</button>
        </div>
    </div> 
</template>

<script>
export default {
    props:{
        comment:{
            type: Object,
            required: true,
        }
    }
}
</script>

<style>

</style>