import {defineStore} from "pinia";

export const useCartStore = defineStore("cart",{
  state: () => ({items:[]}),
  getters:{
    total: (state)=> state.items.reduce((sum,i)=> sum + i.price,0)
  },
  actions: {
    add(product){
      this.items.push(product)
      alert("added")
    },
    remove(id){
      this.items = this.items.filter(p => p.id !== id)
    }
  }
})
