'use client'
import React, { useEffect, useState } from 'react'
import MovieCard from './movie-card'
import Image from 'next/image';

const CARDS_NUMBER = 4;
const images = [
    "/celestar-chisper.png",
    "/quantum-mirage.jpg",
    "/crimson-serendipity.jpg",
    "/solaris-synchrony.jpg"
];

const titles = [
    "celestar chisper",
    "quantum mirage",
    "crimson serendipity",
    "solaris synchrony"
];

const MovieCards = () => {
    const [activeCard, setActiveCard] = useState(1);
    const [currentImage, setCurrentImage] = useState(images[activeCard - 1]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard(prev => {
                const next = (prev % CARDS_NUMBER) + 1;
                setCurrentImage(images[next - 1]);
                return next;
            });
        }, 4500);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <h3 className='text-center mx-auto font-semibold text-2xl text-white mb-6'>Explore Our Wide Range of Movie Categorise and Genres</h3>
            <div>
                <Image
                    src={currentImage}
                    alt="Background"
                    className="absolute inset-0 object-cover w-full h-full -z-10"
                    width={1920}
                    height={1080}
                />
                <div className='absolute inset-0 bg-gradient-to-b from-black/100 from-5% via-black/60 to-black/100 to-95% -z-9'></div>
                <div className='flex justify-center gap-8 overflow-scroll scroll-smooth mb-40 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative z-10'>
                    {Array.from({ length: CARDS_NUMBER }, (_, index) => (
                        <MovieCard
                            key={index}
                            isActive={activeCard === index + 1}
                            image={images[index]}
                            title={titles[index]}
                            onClick={() => {
                                setActiveCard(index + 1)
                                setCurrentImage(images[index]);
                            }}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default MovieCards