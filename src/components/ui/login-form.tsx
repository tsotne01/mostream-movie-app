'use client'
import React from 'react'
import InputField from './input-field'
import Button from './button'
import Link from 'next/link'

const LoginForm = () => {
  return (
    <div className='w-full'>
        <form className='flex flex-col gap-4'>
            <InputField id='email' label="Email" type="email" placeholder='example@email.com'/>
            <InputField id='password' label="Password" type="password" placeholder='Input Password'/>
            <Button type='submit' variant='primary' disabled={false}>Sign In</Button>
            <Button type='button' variant='secondary' className='border-1 border-[#383838] mb-8' beforeIcon={<>G</>}>Sign In with Google</Button>
            <span className='text-center'>Don't have an account?
                <Link href="/register" className='text-[#F14141]'> Sign Up</Link>
            </span>
        </form>
    </div>
  )
}

export default LoginForm