import {defineStore} from "pinia";
export const useTodoStore= defineStore("todo",{
  state: ()=> ({tasks:[]}),
  actions:{
    async loadTasks(){
      const res=await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      this.tasks=await res.json()
    },
    async addTasks(title){
      const res=await fetch("https://jsonplaceholder.typicode.com/todos",{
        method:"POST",
        body:JSON.stringify({title,completed: false}),
        headers: { "Content-Type": "application/json" }
      })
      const newTask=await res.json()
      this.tasks.push(newTask)
    }
  }
})
