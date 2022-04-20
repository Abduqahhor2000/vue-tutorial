<template>
    <div class="w-75 mx-auto formaa mt-5">
        <form @submit.prevent>
            <h2>Add Comment</h2>
            <my-input
                v-model.trim="comment.name"
                type="text" 
                placeholder="Inter name..."
                class="form-control mb-3"
            />
            <my-input
                v-model="comment.email" 
                type="email"
                placeholder="Inter email address..."
                class="form-control mb-3"
            />
            <my-input
                v-model="comment.content"
                type="text"
                placeholder="Inter text..."
                class="form-control mb-3"
            />
            <div class="d-flex flex-row-reverse">
                <my-button class="btn btn-primary" @click="createComment" type="submit">Add Comments</my-button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            comment:{
                id: 0,
                name: "",
                email: "",
                content: "",
            }
        }
    },
    methods:{
        createComment(){
            this.comment.id = new Date(),
            this.$emit("addComment", this.comment)
            this.comment = {
                name: "",
                email: "",
                content: "",
            }
        },
    },
    watch:{
        comment:{
            handler(newValue){
                console.log(newValue);
            },
            deep: true
        }
    }
}
</script>

<style>
    .mybtn{
        align-self: flex-end;
    }
    .formaa{
        display: flex;
        flex-direction: column;
    }
</style>