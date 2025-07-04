'use client'
import React from 'react'
import InputField from './input-field'
import Button from './button'
import Link from 'next/link'

const RegistrationForm = () => {
    return (
        <div>
            <form className='flex flex-col gap-4'>
                <InputField
                    id="username"
                    label="Username"
                    name="username"
                    type="text"
                    required={true}
                    placeholder="Enter your username"
                />
                <InputField
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    required={true}
                    placeholder="Enter your email"
                />
                <InputField
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    required={true}
                    placeholder="Enter your password"
                />
                <Button type="submit" variant="primary" disabled={false}>Register</Button>
                <Button type="button" variant="secondary" className='border-1 border-[#383838] mb-8' beforeIcon={<>G</>}>Register with Google</Button>
                <span className='text-center'>Already have an account?
                    <Link href="/login" className='text-[#F14141]'> Sign In</Link>
                </span>
            </form>
        </div>
    )
}

export default RegistrationForm