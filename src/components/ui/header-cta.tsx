'use client'
import React from 'react'
import Button from './button/button'
import { useRouter } from 'next/navigation'
import useAuthStatus from '@/hooks/useAuthStatus'
import useAuth from '@/hooks/useAuth'

const HeaderCTA = () => {
  const router = useRouter()
  const { isAuthenticated } = useAuthStatus();
  const { handleLogout } = useAuth();
  return (
    <div className='gap-4 hidden md:flex'>
      <Button onClick={() => router.push('/subscription')} variant='primary'>Subscribe</Button>
      {isAuthenticated ? <Button variant='primary' onClick={() => handleLogout()}>Logout</Button> : <Button onClick={() => router.push('/login')} variant='outlined'>Sign In</Button>}

    </div>
  )
}

export default HeaderCTA