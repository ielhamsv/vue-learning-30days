import {defineStore} from "pinia";

export const useTodostore = defineStore("todo",{
  state: () => ({todos:[]}),
  actions: {
    addTask(task){
      this.todos.push({title:task,done:false})
    },
    toggletask(i){
      this.todos[i].done=!this.todos[i].done
    }
  }
})
