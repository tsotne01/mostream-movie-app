import React from 'react'
import FAQ from './faq'

function FaqSection() {
    return (
        <section className='px-[100px] py-32'>
            <h2 className='text-white text-5xl font-semibold mb-6 leading-14 tracking-tight mx-auto text-center'>Frequently Asked Question</h2>
            <p className='text-[#878787] text-base leading-7 mb-9 tracking-tight text-center max-w-2xl mx-auto'>Check out our Frequently Asked Questions section for everything you need to know about your movie streaming experience.</p>
            <FAQ />
        </section>
    )
}

export default FaqSection