'use client'
import React from 'react'
import InputField from './input-field'
import Button from './button'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

const LoginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters")
});

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: zodResolver(LoginSchema)
    });
    const handleLogin = (data: z.infer<typeof LoginSchema>) => {
        console.log("Login Data:", data);
    }
    return (
        <div className='w-full'>
            <form onSubmit={handleSubmit(handleLogin)} className='flex flex-col gap-4'>
                <InputField
                    id='email'
                    label="Email"
                    type="email"
                    placeholder='example@email.com'
                    {...register('email')}
                    error={errors.email?.message}
                />
                <InputField
                    id='password'
                    label="Password"
                    type="password"
                    placeholder='Input Password'
                    {...register('password')}
                    error={errors.password?.message}
                />
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