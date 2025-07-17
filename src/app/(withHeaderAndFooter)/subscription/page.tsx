import Button from '@/components/ui/button'
import SubscriptionCard from '@/components/ui/subscription-card'
import React from 'react'

function page() {
  return (
    <>
      <div className='max-w-2xl mx-auto px-4 py-20'>
        <h2 className='text-center mt-20 text-white text-5xl tracking-tight leading-14 font-semibold mb-6'>Premium Subscription</h2>
        <p className='text-center text-[#878787] text-lg mb-8'>Delve into our extensive array of movie subscription pricing plans, each thoughtfully designed to cater to the distinct preferences.</p>
        <div className='flex justify-center gap-4 mb-9'>
          <Button variant='primary' isActive={true}>
            Select Package
          </Button>
          <Button variant='secondary' isActive={true}>
            Show Detail Package
          </Button>
        </div>

      </div>
      <div className='grid grid-cols-2 gap-4 w-full mx-auto max-w-7xl mb-32'>
        <SubscriptionCard selected={true} title="1 Year - All Device" price="$12.99" subscriptionSpan="month" description="Access to all premium movies and shows." />
        <SubscriptionCard selected={true} title="1 Year - All Device" price="$12.99" subscriptionSpan="month" description="Access to all premium movies and shows." />
        <SubscriptionCard selected={true} title="1 Year - All Device" price="$12.99" subscriptionSpan="month" description="Access to all premium movies and shows." />
        <SubscriptionCard selected={true} title="1 Year - All Device" price="$12.99" subscriptionSpan="month" description="Access to all premium movies and shows." />
      </div>
    </>
  )
}

export default page