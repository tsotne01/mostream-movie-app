'use client'
import React from 'react'
import Button from './button'
import { useRouter } from 'next/navigation'

const HeaderCTA = () => {
  const router = useRouter()
  return (
    <div className='gap-4 hidden md:flex'>
        <Button variant='primary'>Subscribe</Button>
        <Button onClick={()=>router.push('/login')} variant='outlined'>Sign In</Button>
    </div>
  )
}

export default HeaderCTA