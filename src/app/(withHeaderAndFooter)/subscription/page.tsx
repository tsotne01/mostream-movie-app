import Button from '@/components/ui/button'
import FAQ from '@/components/ui/faq'
import FaqItem from '@/components/ui/faq-item'
import SubscriptionPlanSection from '@/components/ui/subscription-plan-section'
import Image from 'next/image'
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
      <SubscriptionPlanSection />
      <section className='flex justify-between items-center mx-auto max-w-7xl mb-32'>
        <div className='max-w-1/2 mr-14'>
          <h2 className='font-semibold text-5xl tracking-tight leading-14 mb-4 max-w-3/4'>Frequently Asked Question</h2>
          <p className='font-medium text-lg text-[#878787] mb-8'>Check out our Frequently Asked Questions section for everything you need to know about your movie streaming experience.</p>
          <div className='relative overflow-hidden p-6 flex flex-col items-center justify-center'>
            <Image
              src='/faq-contact-us-image.jpg'
              alt='FAQ Image'
              width={498}
              height={248}
              className='absolute top-0 left-0 w-full h-auto object-fill rounded-lg shadow-lg -z-1'
            />
            <h3 className='font-semibold text-2xl text-white mb-4.5 leading-8 tracking-tight'>Still Have a Question?</h3>
            <p className='max-w-[309px] font-medium text-center text-[#878787] text-lg tracking-tight leading-7 mb-11'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            <Button variant='primary'>
              Contact Us
            </Button>
          </div>
        </div>
        <FAQ className='min-w-1/2'>
          <FaqItem question='What is MoStream?' answer='Mostream is not just a platform; it"s your VIP pass to a universe of captivating content that transcends the ordinary. Say goodbye to the mundane and embrace the extraordinary.' />
          <FaqItem question='What Devices are Compatible?' answer='Mostream is designed to be compatible with a wide range of devices, including smart TVs, smartphones, tablets, and computers. Whether you prefer watching on the big screen or on the go, Mostream has you covered.' />
          <FaqItem question='How do I cancel my subscription?' answer='To cancel your subscription, simply log into your account, navigate to the subscription settings, and follow the cancellation instructions. You can also contact our support team for assistance.' />
          <FaqItem question='What payment methods do you accept?' answer='We accept various payment methods, including credit cards, debit cards, and popular digital wallets. You can choose the payment method that suits you best during the checkout process.' />
        </FAQ>
      </section>
    </>
  )
}

export default page