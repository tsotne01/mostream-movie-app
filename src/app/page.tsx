import Header from '@/components/ui/header'
import Hero from '@/components/ui/hero'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <>
      <Header />
      <main className='mx-auto max-w-7xl'>

        <Image
          src={"/hero-background.png"}
          alt="Background"
          className="absolute inset-0 object-cover w-full h-full -z-10"
          width={1440}
          height={1080}
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/[0.9] from-10% via-transparent to-black to-95% -z-9'></div>
        <Hero />
      </main>
    </>
  )
}

export default Home