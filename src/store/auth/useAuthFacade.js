import useAuthStore from './useAuthStore'
import {shallow} from 'zustand/shallow'

export const useAuthFacade = () => {
  const {user, loading, success, error, accessToken, resetStore, register} = useAuthStore(
    (state) => ({
      user: state.user,
      loading: state.loading,
      success: state.success,
      error: state.error,
      accessToken: state.accessToken,
      resetStore: state.resetStore,
      register: state.register
    }),
    shallow
  )

  return {user, loading, success, error, accessToken, resetStore, register}
}