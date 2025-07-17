import Image from 'next/image'
import React from 'react'

function ExclusiveSection() {
    return (
        <section className='px-[100px] py-20 bg-black backdrop-blur-md max-w-7xl mx-auto flex items-center gap-20'>
            <Image
                src="/exclusive-premieres.png"
                alt="Movie Poster"
                width={580}
                height={423}
                className="h-auto rounded-lg shadow-md"
            />
            <div>
                <h2 className='text-white text-5xl font-semibold text-center text-nowrap mb-6'>Exclusive Premieres</h2>
                <p className='text-lg text-gray-400'>Be the first to witness the extraordinary with our Exclusive Premieres. From Hollywood blockbusters to independent gems, catch the latest releases before they hit other platforms.</p>
            </div>
        </section>
    )
}

export default ExclusiveSection