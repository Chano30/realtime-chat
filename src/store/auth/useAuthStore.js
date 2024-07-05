import { create } from "zustand";

const initialState = {
  user: null,
  login: ()=>{},
  register: ()=>{},
  accessToken: null,
  loading: false,
  success: false,
  error: null
}

const useAuthStore = create((set) => ({
  ...initialState,
  resetStore: ()=>{
    set((state) => ({...state, user:null, })) 
  }
}))