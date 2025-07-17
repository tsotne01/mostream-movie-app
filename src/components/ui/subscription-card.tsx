'use client'
import Image from 'next/image';
import React, { memo, useState } from 'react'

type SubscriptionCardProps = {
    selected: boolean,
    title: string,
    price: string,
    description: string,
    subscriptionSpan?: string
}

function SubscriptionCard({ selected, title, price, description, subscriptionSpan }: SubscriptionCardProps) {
    return (
        <div className='p-6 border border-[#242323] rounded-2xl relative overflow-hidden flex flex-col items-start'>
            {selected && <Image className='absolute top-0 left-0 w-full h-full object-cover -z-1' src={"/subscription-plan-img.jpg"} alt="Subscription Plan" width={592} height={190} />}
            <div className='flex items-center justify-between w-full'>
                <h3 className='mb-6 font-semibold text-white leading-8 tracking-tight text-2xl'>{title}</h3>
                {selected ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M15.9998 29.3337C23.3332 29.3337 29.3332 23.3337 29.3332 16.0003C29.3332 8.66699 23.3332 2.66699 15.9998 2.66699C8.6665 2.66699 2.6665 8.66699 2.6665 16.0003C2.6665 23.3337 8.6665 29.3337 15.9998 29.3337Z" fill="#F14141" />
                        <path d="M10.3335 15.9999L14.1068 19.7732L21.6668 12.2266" stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M15.9998 29.3337C23.3332 29.3337 29.3332 23.3337 29.3332 16.0003C29.3332 8.66699 23.3332 2.66699 15.9998 2.66699C8.6665 2.66699 2.6665 8.66699 2.6665 16.0003C2.6665 23.3337 8.6665 29.3337 15.9998 29.3337Z" fill="#101010" stroke="#EDEDED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.3335 15.9999L14.1068 19.7732L21.6668 12.2266" stroke="#EDEDED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </div>
            <div>
                <span className='inline-block mb-3 text-[40px] font-semibold leading-6 tracking-tight'>{price}/</span>
                <span className='text-lg font-medium tracking-tight leading-6'>{subscriptionSpan}</span>
            </div>
            <p className='text-[#878787] text-lg tracking-tight leading-6 mt-3'>{description}</p>
        </div>
    )
}

export default SubscriptionCard