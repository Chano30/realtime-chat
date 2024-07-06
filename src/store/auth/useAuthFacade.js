import useAuthStore from './useAuthStore'
import {shallow} from 'zustand/shallow'

export const useAuthFacade = () => {
  const {user, loading, success, error,setError, accessToken, resetStore, registerUser} = useAuthStore(
    (state) => ({
      user: state.user,
      loading: state.loading,
      success: state.success,
      error: state.error,
      setError: state.setError,
      accessToken: state.accessToken,
      resetStore: state.resetStore,
      registerUser: state.registerUser
    }),
    shallow
  )

  return {user, loading, success, error, accessToken, resetStore, registerUser, setError}
}