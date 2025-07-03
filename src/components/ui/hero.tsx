import React from 'react'
import Button from './button'
import MovieCards from './movie-cards'
import MovieCard from './movie-card'

const Hero = () => {
    return (
        <section>
            <h1 className='text-center mx-auto mt-20 leading-14 tracking-tight text-5xl text-white font-semibold max-w-4xl'>
                Solaris Synchrony: a Celestial Odyssey of Hope and Harmony
            </h1>
            <p className='text-center mx-auto mt-6 text-lg text-gray-300 max-w-4xl'>
                Against the backdrop of a dying Earth, a group of scientists races to execute a daring plan to synchronize the consciousness of humanity with a new solar system. "Solaris Synchrony" is a gripping
            </p>
            <div className='mx-auto mb-20 w-fit flex gap-2'>
                    <Button
                        variant='primary'
                        className='mt-8 inline-block'
                    >
                        Watch Trailer
                    </Button>
                    <Button
                        variant='outlined'
                        className='mt-8 inline-block'
                    >
                        More Info
                    </Button>
            </div>
        </section>
    )
}

export default Hero