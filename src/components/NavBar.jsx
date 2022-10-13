import React from 'react'
import { ReactComponent as Logo } from '../icons/cornIcon.svg' 

const NavBar = () => {
  return (
    <section className='flex items-center justify-center w-screen h-16 mb-12 style-none text-white'>   
      <ul className='grid grid-cols-12 list-none text-lg font-medium items-center justify-items-center w-full h-16 fixed z-10 bg-[#242333]/70'>
        <li className='col-start-1 w-10 h-10 justify-self-end m-2'>
          <Logo />
        </li>
        <li className='col-start-2'>
          Takeshi Cinema
        </li>
        <li className='col-start-3'>
          Movies
        </li>
        <li className='col-start-11'>
          <button className='text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow hover:bg-[#9400D3] transition duration-500'>
            Log in
          </button>
        </li>
        <li className='col-start-12 justify-self-start '>
          <button className='text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow hover:bg-white transition duration-500 hover:text-black'>
            Sign up
          </button>
        </li>
      </ul>
    </section>
  )
}

export default NavBar