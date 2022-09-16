import React, { useEffect, useState } from 'react'

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
      <div className='text-center'>
        <h1>{sessionName}</h1>
        <div className='flex justify-center'>
          <div className='flex m-2 w-52 flex-wrap justify-center'>
            <div className='bg-black w-full h-6 mt-3 mb-3 text-center text-white'>Screen</div>
            {[...Array(n)].map((e, i) => 
            <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'
                key={i}
                style={{backgroundColor: isSelected[`${i}`] ? 'red' :  ''}} 
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
        <p>You have selected {clicks} seats for a price of {price}€</p>
      </div>
  )
}
