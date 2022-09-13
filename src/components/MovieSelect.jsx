import React, {useState} from 'react'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import MoviesJson from '../movies.json'



export const MovieSelect = () => {

    const [dropdown, setDropdown] = useState(false)

    const openCloseDropdown = () => {
    setDropdown(!dropdown)
    }

    return (
        <section className='flex justify-center m-3'>
            <Dropdown isOpen = {dropdown} toggle = {openCloseDropdown} className = 'border-transparent' direction='right'>
                <DropdownToggle caret>
                    Pick a Movie
                </DropdownToggle >
                <DropdownMenu>
                    {
                        MoviesJson.map( record => {
                            return (
                                    <DropdownItem className='box' key={ record.id }>
                                        { record.name }
                                        { record.price }
                                    </DropdownItem>
                            )}
                        )
                    }
            </DropdownMenu>
            </Dropdown>
        </section>
    )
}
