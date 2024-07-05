import { createWithEqualityFn } from "zustand/traditional";

const initialState = {
  user: null,
  login: ()=>{},
  register: ()=>{},
  accessToken: null,
  loading: false,
  success: false,
  error: null
}

const useAuthStore = createWithEqualityFn((set) => ({
  ...initialState,
  resetStore: ()=>{
    set((state) => ({...state, user:null, })) 
  }
}))

export default useAuthStore