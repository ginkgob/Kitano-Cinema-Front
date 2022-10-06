import React from 'react'
import MoviesJson from '../movies.json'

const MoviePoster = () => {
  return (
    <div className=''>
        {MoviesJson.map(movie => {return ( movie.img ) })}
    </div>
  )
}

export default MoviePoster