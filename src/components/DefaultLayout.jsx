import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthFacade } from '@store/auth/useAuthFacade'

export const DefaultLayout = () => {
  const {accessToken} = useAuthFacade()

  if(!accessToken){
    return <Navigate to="/login" />
  }

  return (
    <div>
      <Outlet />
    </div>
  )
}
