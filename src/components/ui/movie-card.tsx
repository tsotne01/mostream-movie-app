import Image from 'next/image'
import React from 'react'

type MovieCardProps = {
    title: string;
    isActive?: boolean;
    image: string;
    onClick?: () => void;
    className: string;
}

const MovieCard = ({ title, isActive = false, image, onClick, className }: MovieCardProps) => {
    return (
        <>
            <button className={`relative min-w-fit cursor-pointer rounded-sm ${isActive ? 'border-2 border-white' : 'opacity-50 border-2 border-transparent'} ${className}`} onClick={onClick}>
                <Image className='rounded-sm' src={image} alt='hero background' width={286} height={250} />
                <h3 className={`text-center absolute bottom-3 left-1/2 transform -translate-x-1/2 text-2xl text-nowrap tracking-tight leading-6 font-semibold ${isActive ? '' : 'opacity-80'}`}>
                    {title}
                </h3>
            </button>
        </>
    )
}

export default MovieCard