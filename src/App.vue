<template>
    <navbar 
        class="container"
        v-model:modalVisibili="modalVisibili"
    />

    <my-modal :show="modalVisibili" v-model:modalVisibili="modalVisibili">
        <comment-form 
            @addComment="addComment"
        />
    </my-modal> 

    <comment-list v-if="!isLoading"
        :comments="comments"
        @remove="delComment"
    />
    <div v-else class="d-flex justify-content-center">
        <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script>
import CommentForm from "./components/CommentForm.vue"
import CommentList from "./components/CommentList.vue"
import Navbar from "./components/Navbar.vue"
import axios from "axios"

export default {
    components:{
        CommentForm,
        CommentList,
        Navbar,
    },
    data(){
        return{
            comments: [],
            modalVisibili: false,
            isLoading: false,
        }
    },
    methods: {
        addComment(comment){
            this.comments.push(comment)
        },
        delComment(comment){
            this.comments = this.comments.filter(item=> item.id !== comment.id)
        },
        selected(option){
            this.selectedOption = option
        },
        async getComment(){
            try{
                this.isLoading = true
                setTimeout(async()=>{
                    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=10")
                    this.comments = data
                    this.isLoading = false
                }, 2000)
            }catch(e){
                console.log("vay vaaaay");
            }
        }
    },
    mounted(){
        this.getComment();
    }
}
</script>

<style>

</style>