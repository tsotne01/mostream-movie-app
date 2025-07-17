import Image from 'next/image'
import React from 'react'

function DownloadAndPlaySection() {
    return (
        <section className='px-[100px] py-20 bg-black backdrop-blur-md max-w-7xl mx-auto flex items-center gap-20'>
            <div>
                <h2 className='text-white text-5xl font-semibold text-center text-nowrap mb-6'>Download and Play</h2>
                <p className='text-lg text-gray-400'>
                    No Wi-Fi? No problem! Download your go-to movies and watch them offline. Whether you're on a plane, in a remote cabin, or just lounging in your backyard, our Download and Play feature lets you take your favorite films with you, anytime, anywhere.
                </p>
            </div>
            <Image
                src="/download-and-play.png"
                alt="Movie Poster"
                width={580}
                height={423}
                className="h-auto rounded-lg shadow-md"
            />
        </section>
    )
}

export default DownloadAndPlaySection