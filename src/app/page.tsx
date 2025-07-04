import Header from '@/components/ui/header'
import Hero from '@/components/ui/hero'
import MovieCards from '@/components/ui/movie-cards'
import MovieCategories from '@/components/ui/movie-categories'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className='mx-auto max-w-7xl'>
          <Hero />

        </section>
        <Image
          src={"/hero-background.png"}
          alt="Background"
          className="absolute inset-0 object-cover w-full h-full -z-10"
          width={1920}
          height={1080}
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/[0.9] from-10% via-black/30 to-black to-95% -z-9'></div>
        <MovieCards />

        <MovieCategories />
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
      </main>
    </>
  )
}

export default Home