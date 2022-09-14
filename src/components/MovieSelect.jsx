import React, {useState} from 'react'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import MoviesJson from '../movies.json'


export const MovieSelect = () => {

    const [dropdown, setDropdown] = useState(false)
    const [selectMovie, setSelectMovie] = useState(
        window.localStorage.getItem('movie')
        )   

    const openCloseDropdown = () => {
    setDropdown(!dropdown)
    }

    const setLocalStorage = value => {
        try {
            setSelectMovie(value)
            window.localStorage.setItem('movie', JSON.stringify(value)) 
        } catch (error) {
            console.error(error)
        }
    }

/*Guardar la pelicula escogida en el localstorage*/

    return (
        <section className='flex justify-center m-3'>
            <Dropdown isOpen = {dropdown} toggle = {openCloseDropdown} className = 'border-transparent' direction='right'>
                <DropdownToggle caret>
                    Pick a Movie
                </DropdownToggle >
                <DropdownMenu>
                    {
                        MoviesJson.map( movie => {
                            return (
                                    <DropdownItem className='box' key={ movie.id } 
                                    value = {[movie.name, movie.price]} 
                                    onClick = {e => setLocalStorage(e.target.value)}>
                                        { movie.name }
                                        { movie.price }
                                    </DropdownItem>
                            )}
                        )
                    }
            </DropdownMenu>
            </Dropdown>
        </section>
    )
}
