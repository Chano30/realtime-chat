import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthFacade } from '@store/auth/useAuthFacade'

export const GuestLayout = () => {
  const {accessToken} = useAuthFacade()

  if(accessToken){
    return <Navigate to="/" />
  }

  return (
    <div>
      <Outlet />
    </div>
  )
}
