import Logo from '@/components/ui/shared/logo'
import RegistrationForm from '@/components/ui/register/registration-form'
import Image from 'next/image'
import React from 'react'

const page: React.FC = () => {
    return (
        <main className='flex items-center justify-between gap-24 max-w-7xl mx-auto'>
            <div>
                <div className='max-w-xl mb-8'>
                    <Logo className='mb-8 inline-block' />
                    <h1 className='text-4xl text-white mb-6 font-semibold leading-12 tracking-tight'>Join the Cinematic Society Experience</h1>
                    <p className='font-medium text-[#878787] '>Unlock the Gates to a World of Infinite Movie Magic with Seamless Registration - Your Passport to Personalized Film Adventures Awaits!</p>
                </div>
                <div>
                    <RegistrationForm />
                </div>
            </div>

            <Image
                src="/registration-image.png"
                alt="logo"
                width={720}
                height={1024}
                className="h-full object-contain"
            />
        </main>
    )
}

export default page