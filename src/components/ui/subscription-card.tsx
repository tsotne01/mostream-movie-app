import React from 'react'

type SubscriptionCardProps = {
    selected: boolean,
    title: string,
    price: string,
    description: string,
    subscriptionSpan?: string
}

function SubscriptionCard({ selected, title, price, description, subscriptionSpan }: SubscriptionCardProps) {
    return (
        <div className='p-6 border border-[#242323] rounded-2xl'>
            <h3 className='mb-6 font-semibold text-white leading-8 tracking-tight text-2xl'>{title}</h3>
            <span className='inline-block mb-3 text-[40px] font-semibold leading-6 tracking-tight'>{price}/</span><span className='text-lg font-medium tracking-tight leading-6'>{subscriptionSpan}</span>
            <p className='text-[#878787] text-lg tracking-tight leading-6 mt-3'>{description}</p>
        </div>
    )
}

export default SubscriptionCard