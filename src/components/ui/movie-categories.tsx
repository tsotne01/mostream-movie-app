import React from 'react'
import Button from './button'

const MovieCategories = () => {
    return (
        <section className='py-20 bg-black/80 backdrop-blur-md'>
            <h2 className='text-white text-5xl leading-14 mb-14 tracking-tight font-semibold text-center max-w-3xl mx-auto'>
                Explore Our Wide Range of Movie Categories and Genres
            </h2>
            <div className='mx-auto w-7xl flex gap-1 '>
                <Button className='w-full' isActive={true} variant='secondary'>All</Button>
                <Button className='w-full' variant='secondary'>Action</Button>
                <Button className='w-full' variant='secondary'>Drama</Button>
                <Button className='w-full' variant='secondary'>Comedy</Button>
                <Button className='w-full' variant='secondary'>Sci-Fi</Button>
                <Button className='w-full' variant='secondary'>Horror</Button>
                <Button className='w-full' variant='secondary'>Romance</Button>
                <Button className='w-full' variant='secondary'>Musical</Button>
            </div>
        </section>
    )
}

export default MovieCategories