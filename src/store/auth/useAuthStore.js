import { createWithEqualityFn } from "zustand/traditional";
import axiosInstance from "@utils/axiosConfig";

const initialState = {
  user: null,
  login: () => {},
  register: () => {},
  accessToken: null,
  loading: false,
  success: false,
  error: null,
};

const resetStore = (set) => () => {
  set({
    ...initialState,
    user: null,
    loading: false,
    success: false,
    accessToken: null,
  });
};


const registerUser = (set) => async (credentials) => {
  console.log(credentials)
  set({ loading: true, error: null });
  try {
    const response = await axiosInstance.post('register',{
      ...credentials
    });
    if (response.data.status === 422) {
      console.log(response.data)
      set({ error: response.data.message, success: false, loading: false });
    } else {
      // Handle successful registration
      console.log(response.data.message)
      set({ ...initialState, success: true,});
    }
  } catch (e) {
    set({ error: 'Error while requesting register: ' + e.message, loading: false });
  } finally {
    set({ loading: false });
  }
};

const useAuthStore = createWithEqualityFn((set) => ({
  ...initialState,
  resetStore: resetStore(set),
  registerUser: registerUser(set),
  setError: (error) => set({ error })
}));

export default useAuthStore