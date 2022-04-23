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
    <div class="d-flex justifiy-content-center">
        <input type="text" class="m-auto" v-model="searchName"/>
    </div> 

    <comment-list v-if="!isLoading"
        :comments="sortAndSearchComments"
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
    <div class="container d-flex">
        <div @click="changePage(pagebutton)" class="btn btn-outline-primary mx-1" :class="{'btn-primary text-white' : pagebutton === page}" v-for="pagebutton in totalPages" :key="pagebutton.id">
            {{pagebutton}}
        </div>
    </div>
</template>

<script>
import CommentForm from "@/components/CommentForm.vue"
import CommentList from "@/components/CommentList.vue"
import Navbar from "@/components/Navbar.vue"
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
            selectedOption: "",
            searchName: "",
            totalPages: 0,
            limit: 50,
            page: 1,
            modalVisibili: false,
            isLoading: false,
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
        changePage(value){
            this.page = value
            this.getComment()
        },
        async getComment(){
            try{
                this.isLoading = true
                setTimeout(async()=>{
                    const data = await axios.get("https://jsonplaceholder.typicode.com/comments", {
                        params:{
                            _limit: this.limit,
                            _page: this.page, 
                        }
                    })
                    this.totalPages = Math.ceil(data.headers["x-total-count"] / this.limit)
                    this.comments = data.data
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
                }else if(this.selectedOption === "email"){
                    return comm1.email.localeCompare(comm2.email)
                }  
            })
        },
        sortAndSearchComments(){
            return this.optionSorted.filter((comment)=>{
                return comment.name.toLowerCase().includes(this.searchName.toLowerCase()) || 
                       comment.email.toLowerCase().includes(this.searchName.toLowerCase())    
            })
        }
    },
    watch:{
        // selectedOption(newValue){
        //     this.comments.sort((comm1, comm2)=>{
        //         if(newValue === "name"){
        //             return comm1.name.localeCompare(comm2.name)
        //         }else{
        //             return comm1.email.localeCompare(comm2.email)
        //         }  
        //     })
        // }
    }
}
</script>

<style>

</style>