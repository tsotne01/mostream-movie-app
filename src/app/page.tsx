import Button from '@/components/ui/button'
import FAQ from '@/components/ui/faq'
import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'
import Hero from '@/components/ui/hero'
import InputField from '@/components/ui/input-field'
import Logo from '@/components/ui/logo'
import MovieCards from '@/components/ui/movie-cards'
import MovieCategories from '@/components/ui/movie-categories'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
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
        <section className='px-[100px] py-32'>
          <h2 className='text-white text-5xl font-semibold mb-6 leading-14 tracking-tight mx-auto text-center'>Frequently Asked Question</h2>
          <p className='text-[#878787] text-base leading-7 mb-9 tracking-tight text-center max-w-2xl mx-auto'>Check out our Frequently Asked Questions section for everything you need to know about your movie streaming experience.</p>
          <FAQ />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home