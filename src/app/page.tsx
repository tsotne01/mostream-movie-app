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
        {/* <div className='absolute inset-0 bg-gradient-to-b from-black/[0.9] from-10% via-transparent to-black to-95% -z-9'></div> */}
        <div className='absolute inset-0 bg-gradient-to-b bg-[radial-gradient(ellipse_at_center,_transparent_5%,_rgba(0,0,0,1)_95%,_rgba(0,0,0,0.7)_100%)] -z-9'></div>
        {/* bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.7)_70%,_rgba(0,0,0,0.7)_100%)] */}
        <Hero />
      </main>
    </>
  )
}

export default Home