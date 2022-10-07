import React from 'react'
import MoviesJson from '../movies.json'

const MoviePoster = () => {
  return (
    <section className='w-[80vw] h-fit bg-white rounded-2'>
      <div className='grid grid-cols-5 content-center justify-items-center m-4'>
        {
        MoviesJson.map( movie => 
        <div className='m-2 w-40 h-auto hover:scale-110 transition duration-500' key={movie.id}> 
        <div className='relative z-0 cursor-pointer group'>
          <img className='rounded-lg' src={movie.img} alt="" />
          <div className='absolute text-xs text-ellipsis overflow-hidden text-white inset-0 z-10 w-full h-full p-3 hover:bg-zinc-800/80 transition duration-200 rounded-lg hidden group-hover:block '>
            <p className='text-center'>{movie.rating}</p>
            {/* <p>Director: {movie.director}</p> */}
            {/* <p>Genre: {movie.genre}</p> */}
            <hr style={{ color: "white", height: 3}}/>
            <p>{movie.shortsynopsis}</p>
          </div>
        </div>
          <p className='text-center text-gray-600'>{movie.name}</p>
        </div>
        )
        }
      </div>
    </section>
  )
}

export default MoviePoster