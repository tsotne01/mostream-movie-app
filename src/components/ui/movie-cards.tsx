import React from 'react'
import MovieCard from './movie-card'

const MovieCards = () => {
    return (
        <>
            <h3 className='text-center mx-auto font-semibold text-2xl text-white mb-6'>Explore Our Wide Range of Movie Categorise and Genres</h3>
            <div className='flex justify-center gap-8'>
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </>
    )
}

export default MovieCards