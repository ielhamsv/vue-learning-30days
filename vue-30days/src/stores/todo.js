import {defineStore} from "pinia";

export const useTodostore = defineStore("todo",{
  state: () => ({todos: [] }),
  getters: {
    donecount: (state) => state.todos.filter(t => t.done).length,
    total: (state) => state.todos.length
  },
  actions: {
    addTask(task){
      this.todos.push({title:task,done:false})
    },
    toggletask(i){
      this.todos[i].done=!this.todos[i].done
    }
  }
})
