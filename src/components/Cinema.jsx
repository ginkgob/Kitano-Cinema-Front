import React, { useState } from 'react'

export const Cinema = ( {sessionPrice, sessionName} ) => {
  
// Falta bloquear algunos asientos
// Falta refrescar el componente al cambiar de pelicula
// Mejorar Estilo 


const[isSelected, setIsSelected] = useState(false)
const selectedSeat = (id) => {
  isSelected[`${id}`] ? subtractSeat() : addSeat(); 
  setIsSelected(prevState => ({...isSelected, [id]: !prevState[id]}))
  // window.localStorage.setItem('clicks', clicks)
}
// const selectedSeat = () => {
//     setIsSelected(prevState => ({...isSelected, [id]: !prevState[id]}))
//   isSelected ? subtractSeat() : addSeat(); 
//   // window.localStorage.setItem('clicks', clicks)
// }

const[clicks, setClicks] = useState(0)
const [price, setPrice] = useState(0)
const addSeat = () => {
  setClicks( clicks + 1 );
  setPrice( ( clicks + 1 ) * sessionPrice );
}
const subtractSeat = () => {
  setClicks( clicks - 1 );
  setPrice( ( clicks * sessionPrice ) - sessionPrice );
}

  const n = 60; //butacas totales
  
  return (
      <div className='flex flex-col items-center'>

        <ul className='flex justify-center w-80 list-none bg-[#0000001a] text-[#777] rounded-md'>
                <li className='flex p-2 list-none'>
                    <div className='bg-[#444451] h-3 w-4 rounded-t-xl m-1'></div>
                    <small>N/A</small>
                </li>
                <li className='flex p-2 list-none'>
                    <div className='bg-[#6feaf6] h-3 w-4 rounded-t-xl m-1'></div>
                    <small>Selected</small>
                </li>
                <li className='flex p-2 list-none'>
                    <div className='bg-white h-3 w-4 rounded-t-xl m-1'></div>
                    <small>Occupied</small>
                </li>
            </ul> 
        
        <div>
          <div className='flex m-2 w-52 flex-wrap justify-center'>
            <div className='bg-[#fff] w-full h-12 mb-6 text-center text-white shadow-md'>Screen</div>
            {[...Array(n)].map((e, i) => 
            <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'
                key={i}
                style={{backgroundColor: isSelected[`${i}`] ? '#6feaf6' : ''}} 
                onClick = { () => selectedSeat(i) }>
            </div>)}
            {/* <div>
              <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer' onClick = { selectedSeat() } style={{backgroundColor: isSelected ? 'red' :  ''}}></div>
              <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer' onClick = { selectedSeat() } style={{backgroundColor: isSelected ? 'red' :  ''}}></div>
              <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer' onClick = { selectedSeat() } style={{backgroundColor: isSelected ? 'red' :  ''}}></div>
              <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer' onClick = { selectedSeat() } style={{backgroundColor: isSelected ? 'red' :  ''}}></div>
              <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer' onClick = { selectedSeat() } style={{backgroundColor: isSelected ? 'red' :  ''}}></div>
              <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer' onClick = { selectedSeat() } style={{backgroundColor: isSelected ? 'red' :  ''}}></div>
              <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer' onClick = { selectedSeat() } style={{backgroundColor: isSelected ? 'red' :  ''}}></div>
              <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer' onClick = { selectedSeat() } style={{backgroundColor: isSelected ? 'red' :  ''}}></div>
            </div> */}
          </div>
        </div>
        <p className='text-white mt-3'>You have selected {(price === (sessionPrice * clicks)) ? clicks : 0} seats for a price of {(price === (sessionPrice * clicks)) ? price : 0}€</p>
      </div>
  )
}
