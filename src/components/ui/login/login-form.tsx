'use client'
import React, { useEffect } from 'react'
import Button from '../shared/button/button'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import useAuth from '@/hooks/useAuth'
import { LoginSchema } from '@/shared/schemas/auth'
import { useRouter } from 'next/navigation'
import InputField from '../shared/input-field'



const LoginForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(LoginSchema),
        mode: 'onBlur',
    });

    const router = useRouter();
    const { handleLogin, isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            router.push("/");
        }
    }, [isAuthenticated])

    return (
        <div className='w-full'>
            <form onSubmit={handleSubmit(handleLogin)} className='flex flex-col gap-4'>
                <InputField
                    {...register('email')}
                    id='email'
                    label="email"
                    type="email"
                    placeholder='example@email.com'
                    error={errors.email?.message}
                />
                <InputField
                    {...register('password')}
                    id='password'
                    label="Password"
                    type="password"
                    placeholder='Input Password'
                    error={errors.password?.message}
                />
                <Button type='submit' variant='primary' disabled={isSubmitting}>Sign In</Button>
                <Button type='button' variant='secondary' className='border-1 border-[#383838] mb-8' beforeIcon={<>G</>}>Sign In with Google</Button>
                <span className='text-center'>Don't have an account?
                    <Link href="/register" className='text-[#F14141]'> Sign Up</Link>
                </span>
            </form>
        </div>
    )
}

export default LoginForm