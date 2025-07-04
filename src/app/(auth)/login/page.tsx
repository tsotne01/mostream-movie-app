import LoginForm from '@/components/ui/login-form'
import Logo from '@/components/ui/logo'
import React from 'react'

const page = () => {
    return (
        <main className='flex justify-center items-center h-screen'>
            <div className='max-w-lg flex flex-col items-center'>
                <Logo className='mb-8' />
                <h1 className='text-white text-5xl leading-12 tracking-tight font-semibold text-center mb-6'>Access the Cinematic Realm with Elegance</h1>
                <p className='text-[#878787] text-lg leading-6 tracking-tight mb-8 text-center'>A Refined Entrance: Secure Your Journey into a World of Timeless Film Excellence</p>
                <LoginForm />
            </div>
        </main>
    )
}

export default page