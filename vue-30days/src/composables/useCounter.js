import {ref} from "vue"

export function useCounter(){
  const count=ref(0)
  const inc=()=> count.value++
  const dec=()=> count.value--
  return{count,inc,dec}
}
