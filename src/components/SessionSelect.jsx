import React, { useState } from 'react';
import MoviesJson from '../movies.json';
import { Cinema } from './Cinema';
import { AiFillCaretDown } from "react-icons/ai";
//import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'

const MovieSelect = () => {
//const [dropdown, setDropdown] = useState(false)  const openCloseDropdown = () => {setDropdown(!dropdown)}

const [isOpen, setIsOpen] = useState(false)

const [price, setPrice] = useState(MoviesJson[0].price)
//const sessionPrice = value => {console.log(value) setPrice(value)}

const [name, setName] = useState(MoviesJson[0].name)
//const sessionName = name => {setName(name)}

  return (
    <section>
      <div className = 'flex border-transparent mb-9'>
        <h5 className = 'mr-6 text-white'>Pick a Movie:</h5>
        <button className = 'flex items-center justify-center text-center bg-white text-black w-56 h-7 rounded-md' onClick={() => setIsOpen(!isOpen)}>
          { name }
          ({ price }€)      
          <AiFillCaretDown className='-mr-1 ml-2 h-5 w-5' />
        </button>
        <div className='z-10 origin-top-right absolute right-0 shadow-lg ring-black ring-opacity-5 mt-2 rounded-md flex flex-col bg-white'>
          {isOpen && (
            MoviesJson.map( movie => {
              return (
                <div className='p-3 hover:bg-black/10 transition duration-400' key={ movie.id } value = {movie.price} name = {movie.name} 
                  onClick = {() => { setPrice(movie.price) ; setName(movie.name) } }>
                    { movie.name }
                    ({ movie.price }€)
                </div>
                )
              }) 
              )}
        </div>
      </div>

      <Cinema sessionPrice={price} />

      {/* 
      <section>
        <Dropdown type = 'button' isOpen = {dropdown} toggle = {openCloseDropdown} className = 'flex justify-center items-center border-transparent mb-9' direction='right'>
          <h5 className='mr-6 text-white'>Pick a Movie:</h5>
          <DropdownToggle caret className='bg-white text-black w-56'>{ name }( { price }€ )
            <DropdownMenu>
              {
                MoviesJson.map( movie => {
                  return (
                    <DropdownItem className='box' key={ movie.id } value = {movie.price} name = {movie.name} onClick = {e => { sessionPrice(e.target.value) ; sessionName(e.target.name) } }>
                      { movie.name }
                      ({ movie.price }€)
                    </DropdownItem>
                    )}
                  )
              }
            </DropdownMenu>
          </DropdownToggle >
        </Dropdown>
            
        <Cinema sessionPrice={price} />
          
      </section>
      */}
    </section>

    )
}

export default MovieSelect;
