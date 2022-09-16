import React, { useState } from 'react'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import MoviesJson from '../movies.json'
import { Cinema } from './Cinema'


export const MovieSelect = () => {

  const [dropdown, setDropdown] = useState(false)  
  const openCloseDropdown = () => {
    setDropdown(!dropdown)
  }

  const [price, setPrice] = useState(MoviesJson[0].price)
  const sessionPrice = value => {
    setPrice(value)
  }

  const [name, setName] = useState(MoviesJson[0].name)
  const sessionName = name => {
    setName(name)
  }

  return (
    <section>
      <Dropdown type = 'button' isOpen = {dropdown} toggle = {openCloseDropdown} className = 'flex justify-center items-center border-transparent mb-9' direction='right'>
        <h5 className='mr-6 text-white'>Pick a Movie:</h5>
        <DropdownToggle caret className='bg-white text-black w-56'>{ name }( { price }€ )
          <DropdownMenu>
            {
              MoviesJson.map( movie => {
                return (
                  <DropdownItem className='box' key={ movie.id } 
                    //[movie.name, movie.price]
                    value = {movie.price}
                    name = {movie.name} 
                    onClick = {e => { sessionPrice(e.target.value) ; sessionName(e.target.name) } }
                    size = 'sm'>
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
    )
}
