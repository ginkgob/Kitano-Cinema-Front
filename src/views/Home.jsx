import React from 'react'
import MoviePoster from '../components/MoviePoster'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const Home = () => {
  return (
    <div>
        <NavBar />
        <div className='flex justify-center p-4'>
          <MoviePoster />
        </div>
        <Footer />
    </div>
  )
}
