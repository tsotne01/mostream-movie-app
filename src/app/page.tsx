import DownloadAndPlaySection from '@/components/ui/download-and-play-section'
import ExclusiveSection from '@/components/ui/exclusive-section'
import FaqSection from '@/components/ui/faq/faq-section'
import Footer from '@/components/ui/footer/footer'
import Header from '@/components/ui/header/header'
import Hero from '@/components/ui/hero/hero'
import MovieCards from '@/components/ui/movie/movie-cards'
import MovieCategories from '@/components/ui/movie/movie-categories'
import React from 'react'

const Home = (): React.JSX.Element => {
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