import {defineStore} from "pinia";
export const useCRUDStore=defineStore("CRUD",{
  state: ()=>({
    username:"",
    task:"",
    users:[],
    tasks:[]
  }),
  actions:{
    async loadUsers(){
      const res= await fetch("https://jsonplaceholder.typicode.com/users?_limit=3")
      this.users=await res.json()
    },
    async loadTasks(){
      const res=await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      this.tasks=await res.json()
    },
    async AddUser(){
      const resU=await fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        body:JSON.stringify({name:this.username}),
        headers: { "Content-Type": "application/json" }
      })
      const NewUser=await resU.json()
      this.users.push(NewUser)

      const resT= await fetch("https://jsonplaceholder.typicode.com/posts?",{
        method:"POST",
        body:JSON.stringify({title:this.task}),
        headers: { "Content-Type": "application/json" }
      })
      const NewTask=await resT.json()
      this.tasks.push(NewTask)
    },
    async Delete(id){
      const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method:"DELETE"
      })
      this.tasks=this.tasks.filter(t => t.id !==id)
    }

  }
})
