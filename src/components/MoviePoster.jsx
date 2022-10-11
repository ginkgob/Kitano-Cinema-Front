import React from 'react'
import { useNavigate } from 'react-router-dom'
import MoviesJson from '../movies.json'

const MoviePoster = () => {

  const navigate = useNavigate();

  return (
    <section className='w-[80vw] h-fit bg-white rounded-2'>
      <div className='grid grid-cols-5 content-center justify-items-center m-4'>
        {
        MoviesJson.map( movie => 
        <div className='m-2 w-40 h-auto hover:scale-[1.7] transition duration-500' key={movie.id}> 
          <div className='relative z-0 cursor-pointer group'>
            <img className='rounded-lg' src={movie.img} alt="" /> 

                <div className='absolute text-[9px] text-ellipsis overflow-hidden text-white inset-0 z-10 w-full h-full hover:bg-zinc-900/90 transition duration-200 rounded-lg hidden group-hover:block '>

                  <div className='flex flex-col items-center p-2 font-semibold text-center'>
                    <p className='text-[2vh] p-1'>{movie.name}</p>
                      <p onClick={() => navigate ('/session')} className='text-black bg-white rounded-md p-1 w-24 hover:scale-110 transition duration-200'>
                        Show Film Sessions
                      </p>
                  </div>

                  <div className='flex justify-center items-center justify-evenly w-full bg-gray-900 p-1'>
                    {/* <p className='text-center font-semibold text-yellow-500 rounded-full p-1'>{movie.rating}</p>  */}
                    <p>{movie.year}</p>
                    <p>{movie.running_time}</p>
                  </div>

                  <div className='flex flex-col justify-center p-2'>
                    {/* <p>Director: {movie.director}</p> */}
                    <p className='pb-1'>{movie.genre}</p>
                    <hr style={{ color: "white", height: 3}}/>
                    <p className='text-gray-300 pt-1'>{movie.shortsynopsis}</p>
                  </div>

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