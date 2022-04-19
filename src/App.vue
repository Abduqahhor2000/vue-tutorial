<template>
    <comment-form 
        @addComment="addComment"
    />
    <comment-list
        :comments="comments"
    />
</template>

<script>
import CommentForm from "./components/CommentForm.vue"
import CommentList from "./components/CommentList.vue"

export default {
    components:{
        CommentForm,
        CommentList,
    },
    data(){
       return{
           comments: [
               {id:1, name: "Tesha", email: "abror@gamil.com", content: "Lorem ipsum dollor"},
               {id:2, name: "Maksim", email: "maksim@gamil.com", content: "Lorem ipsum dollor"},
               {id:1, name: "Jeck", email: "jeck@gamil.com", content: "Lorem ipsum dollor"}
           ],
       }
    },
    methods: {
        addComment(comment){
            this.comments.push(comment)
        }
   },
}
</script>

<style>

</style>