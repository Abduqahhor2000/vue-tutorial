<template>
    <navbar 
        class="container mt-3"
        v-model:modalVisibili="modalVisibili"
        :selectedOption="selectedOption"
        :options="options"
        v-model:selectedOption="selectedOption"
    />

    <my-modal :show="modalVisibili" v-model:modalVisibili="modalVisibili">
        <comment-form 
            @addComment="addComment"
        />
    </my-modal> 

    <comment-list v-if="!isLoading"
        :comments="optionSorted"
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
            selectedOption: "",
            options: [
                {id: 0, name: "Name", value: "name"},
                {id: 1, name: "Email", value: "email"},
            ],
        }
    },
    methods: {
        addComment(comment){
            this.comments.push(comment)
        },
        delComment(comment){
            this.comments = this.comments.filter(item=> item.id !== comment.id)
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
    },
    computed:{
        optionSorted(){
            return [...this.comments].sort((comm1, comm2)=>{
                if(this.selectedOption === "name"){
                    return comm1.name.localeCompare(comm2.name)
                }else{
                    return comm1.email.localeCompare(comm2.email)
                }  
            })
        }
    },
    watch:{
        selectedOption(newValue){
            this.comments.sort((comm1, comm2)=>{
                if(newValue === "name"){
                    return comm1.name.localeCompare(comm2.name)
                }else{
                    return comm1.email.localeCompare(comm2.email)
                }  
            })
        }
    }
}
</script>

<style>

</style>