'use client'
import React from 'react'
import Button from '../shared/button/button'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import InputField from '../shared/input-field'


const RegistrationSchema = z.object({
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

const RegistrationForm = () => {
    const {register, handleSubmit, formState: { errors ,isSubmitting} } = useForm({
        mode: 'onBlur',
        defaultValues: {
            username: '',
            email: '',
            password: ''
        },
        resolver: zodResolver(RegistrationSchema)
    });
    const handleRegistration = (data: z.infer<typeof RegistrationSchema>) => {
        console.log("Registration Data:", data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleRegistration)} className='flex flex-col gap-4'>
                <InputField
                    id="username"
                    label="Username"
                    type="text"
                    placeholder="Enter your username"
                    error={errors.username?.message}
                    {...register("username", { required: true })}
                />
                <InputField
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    error={errors.email?.message}
                    {...register("email", { required: true })}
                />
                <InputField
                    id="password"
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    error={errors.password?.message}
                    {...register("password", { required: true })}
                />
                <Button type="submit" variant="primary" disabled={isSubmitting}>Register</Button>
                <Button type="button" variant="secondary" className='border-1 border-[#383838] mb-8' beforeIcon={<>G</>}>Register with Google</Button>
                <span className='text-center'>Already have an account?
                    <Link href="/login" className='text-[#F14141]'> Sign In</Link>
                </span>
            </form>
        </div>
    )
}

export default RegistrationForm