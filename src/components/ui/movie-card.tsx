import Image from 'next/image'
import React from 'react'

const MovieCard = () => {
    return (
        <div className='relative'>
            <Image className='rounded-sm' src={"/hero-background.png"} alt='hero background' width={286} height={250} />
            <h3 className='text-center absolute bottom-3 left-1/2 transform -translate-x-1/2 text-2xl text-nowrap tracking-tight leading-6 font-semibold'>
                The Celestial Chiper
            </h3>
        </div>
    )
}

export default MovieCard