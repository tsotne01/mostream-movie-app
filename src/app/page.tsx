import DownloadAndPlaySection from '@/components/ui/download-and-play-section'
import ExclusiveSection from '@/components/ui/exclusive-section'
import FaqSection from '@/components/ui/faq-section'
import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'
import Hero from '@/components/ui/hero'
import MovieCards from '@/components/ui/movie-cards'
import MovieCategories from '@/components/ui/movie-categories'
import React from 'react'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MovieCards />
        <MovieCategories />
        <ExclusiveSection />
        <DownloadAndPlaySection />
        <FaqSection />
      </main>
      <Footer />
    </>
  )
}

export default Home