import {defineStore} from "pinia";
export const usePostStore=defineStore("posts",{
  state: () => ({posts:[]}),
  actions: {
    async fetchPosts(){
      const res=await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      this.posts=await res.json()
    }
  }
})
