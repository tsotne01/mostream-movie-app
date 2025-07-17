import React from 'react'
import FAQ from './faq'
import FaqItem from './faq-item'

function FaqSection() {
    return (
        <section className='px-[100px] py-32'>
            <h2 className='text-white text-5xl font-semibold mb-6 leading-14 tracking-tight mx-auto text-center'>Frequently Asked Question</h2>
            <p className='text-[#878787] text-base leading-7 mb-9 tracking-tight text-center max-w-2xl mx-auto'>Check out our Frequently Asked Questions section for everything you need to know about your movie streaming experience.</p>
            <FAQ>
                <FaqItem
                    question="What is MoStream?"
                    answer="Mostream is not just a platform; it's your VIP pass to a universe of captivating content that transcends the ordinary. Say goodbye to the mundane and embrace the extraordinary."
                />
                <FaqItem
                    question="What Devices are Compatible?"
                    answer="Mostream is compatible with a wide range of devices, including smart TVs, streaming media players, tablets, and smartphones. You can also access Mostream through your web browser on a computer."
                />
                <FaqItem
                    question="Can I Download Movies for Offline Viewing?"
                    answer="Yes, MoStream allows you to download movies for offline viewing on supported devices. Simply look for the download option within the app."
                />
                <FaqItem
                    question='What Genres Do You Offer?'
                    answer='Mostream offers a diverse range of genres to cater to all tastes, including action, drama, comedy, horror, and more. You can easily browse our extensive library to find content that suits your preferences.'
                />
                <FaqItem
                    question='How Does Billing Work?'
                    answer='Mostream offers flexible billing options to suit your needs. You can choose between monthly and annual subscription plans, and you can cancel your subscription at any time. Billing is processed securely through our payment gateway.'
                />
                <FaqItem
                    question="What Devices are Compatible?"
                    answer="Mostream is compatible with a wide range of devices, including smart TVs, streaming media players, tablets, and smartphones. You can also access Mostream through your web browser on a computer."
                />
                <FaqItem
                    question="Can I Cancel My Subscription?"
                    answer="Yes, you can cancel your MoStream subscription at any time. Simply go to your account settings and follow the cancellation process. Your subscription will remain active until the end of the current billing cycle."
                />

            </FAQ>
        </section>
    )
}

export default FaqSection