'use client'
import React from 'react'
import InputField from './input-field'
import Image from 'next/image'
import Switch from './switch'
import Button from './button'
import { useForm } from 'react-hook-form'

function SubscriptionPaymentForm() {
    const { handleSubmit } = useForm()
    const handleSubscriptionSubmit = (data: any) => {
        console.log('Subscription form submitted', data)
    }
    return (
        <div className='mx-auto max-w-7xl mb-24'>
            <h2 className='text-2xl font-semibold leading-8 mb-8 tracking-tight'>Payment Information</h2>
            <form onSubmit={handleSubmit(handleSubscriptionSubmit)} className='flex gap-14'>
                <div className='w-1/2 flex flex-col gap-4'>
                    <InputField id='email-address' label='Email Address' placeholder='example@mostream.com' />
                    <InputField id='cardholder-name' label='Cardholder Name' placeholder='Input name' />
                    <InputField id='card-number' label='Card Number' placeholder='Input card number' />
                    <div className='flex justify-between gap-4'>
                        <InputField id='expiry-date' label='Expiry Date' placeholder='MM/YY' />
                        <InputField id='cvv' label='CVV' placeholder='123' />
                    </div>
                </div>
                <div className='border-1 border-[#606060] w-1/2 rounded-2xl'>
                    <div className='p-6 overflow-hidden relative'>

                        <div className='relative flex flex-col p-6 overflow-hidden rounded-t-2xl'>
                            <h3 className='text-2xl font-semibold leading-8 tracking-tight mb-6'>30 Day - All Device</h3>
                            <div>
                                <span className='font-semibold text-2xl tracking-tight leading-8'>$8.99</span>
                                <span className='text-base font-medium leading-6 tracking-tight'>/month</span>
                                <span className='text-[#878787] text-base font-medium leading-6 tracking-tight mt-3 block'>For PayPal payment promo: Receive a 10% cashback.</span>
                            </div>
                            <Image className='object-cover object-center absolute top-0 left-0 -z-1 w-full' src={"/subscription-plan-img.jpg"} alt='Subscription Banner' width={544} height={172} />
                        </div>
                        <div className='bg-[#242323] py-4 px-6 flex justify-between items-center rounded-b-2xl'>
                            <div className='flex'>
                                <Switch />
                                <span className='text-lg font-medium leading-6 tracking-tight'>With annual billing</span>
                            </div>
                            <div>
                                <span className='font-semibold text-2xl tracking-tight leading-8'>$72.99</span>
                                <span className='text-base font-medium leading-6 tracking-tight'>/year</span>
                                <span className='text-base font-medium leading-6 tracking-tight px-[18px] py-1.5 bg-[#101010] rounded-3xl inline-block ml-2'>25%</span>
                            </div>
                        </div>
                        <Button variant='primary' className='w-full p-4'>Checkout Now</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SubscriptionPaymentForm