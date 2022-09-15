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

    const [price, setPrice] = useState()

    const sessionPrice = value => {
        setPrice(value)
    }

    return (
        <section className='flex justify-center flex-col m-3'>
            <Dropdown isOpen = {dropdown} toggle = {openCloseDropdown} className = 'flex justify-center border-transparent' direction='right'>
                <DropdownToggle caret>
                    Pick a Movie
                </DropdownToggle >
                <DropdownMenu>
                    {
                        MoviesJson.map( movie => {
                            return (
                                    <DropdownItem className='box' key={ movie.id } 
                                    //[movie.name, movie.price]
                                    value = {movie.price} 
                                    onClick = {e => sessionPrice(e.target.value) }
                                    >
                                        { movie.name }
                                        ({ movie.price }€)
                                    </DropdownItem>
                            )}
                        )
                    }
            </DropdownMenu>
            </Dropdown>
            
            <Cinema sessionPrice={price}/>
        
        </section>

    )
}
