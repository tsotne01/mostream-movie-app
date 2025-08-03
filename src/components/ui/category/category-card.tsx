import Image from 'next/image'
import React from 'react'

const CategoryCard = () => {
    return (
        <div className='relative w-full max-w-[376px] h-[504px] flex flex-col justify-end'>
            <Image
                src="/category-card.png"
                alt="Category Image"
                width={376}
                height={504}
                className="absolute rounded-lg h-full w-full shadow-md -z-10 object-cover"
            />
            <div className='absolute w-full h-full rounded bg-gradient-to-b from-transparent via-75% via-black/40 to-black/70 to-80% -z-9'></div>
            <h3 className='text-white align-bottom text-center font-semibold text-2xl'>The Celestial Chiper</h3>
            <p className='align-bottom text-center font-medium text-lg text-[#878787]'>In a realm where constellations hold the secrets of the universe, a group of unlikely heroes embarks on an epic quest to decipher the Celestial Cipher</p>
        </div>
    )
}

export default CategoryCard