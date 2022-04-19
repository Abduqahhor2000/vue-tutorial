<template>
    <div class="w-75 mx-auto formaa mt-5">
        <form @submit.prevent>
            <input 
                @input="name = $event.target.value"
                :value="name"
                type="text" placeholder="Inter name..."
                class="form-control mb-3"
            />
            <input 
                @input="email = $event.target.value"
                :value="email" type="text"
                placeholder="Inter email address..."
                class="form-control mb-3"
            />
            <input 
                @input="content = $event.target.value"
                :value="content" type="text"
                placeholder="Inter text..."
                class="form-control mb-3"
            />
            <button @click="createComment" type="submit" class="btn btn-primary">Add Comments</button>
        </form>
    </div>
    <div class="w-75 mx-auto">
        <div class="comment" v-for="comment in comments" v-bind:key="comment.id">
            <div><b>Name:</b> {{comment.name}}</div>
            <div><b>Email:</b> {{comment.email}}</div>
            <div><b>Content:</b> {{comment.content}}</div>
        </div>
    </div>
</template>

<script>
export default {
   data(){
       return{
           comments: [
               {id:1, name: "Tesha", email: "abror@gamil.com", content: "Lorem ipsum dollor"},
               {id:2, name: "Maksim", email: "maksim@gamil.com", content: "Lorem ipsum dollor"},
               {id:1, name: "Jeck", email: "jeck@gamil.com", content: "Lorem ipsum dollor"}
           ],
           name: "",
           email: "",
           content: "",
       }
   },
   methods: {
       createComment(){
           if(this.name && this.email && this.content){
               const newComment = {
                   id: new Date(),
                   name: this.name,
                   email: this.email,
                   content: this.content,
               }
               this.comments.push(newComment)
               this.name = ""
               this.email = ""
               this.content = ""
           }
       }
   },
}
</script>

<style scoped>
    .comment{
        border: 5px solid #ccc;
        padding: 10px;
        margin: 10px;
    }
    .btn{
        align-self: flex-end;
    }

    .formaa{
        display: flex;
        flex-direction: column;
    }
</style>