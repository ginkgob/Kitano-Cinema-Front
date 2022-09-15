import React, { useState } from 'react'

export const Cinema = ( {sessionPrice} ) => {
  
// Falta bloquear algunos asientos
// Falta mostrar el nombre de la pelicula seleccionada
// Mejorar Estilo 

  const[isSelected, setIsSelected] = useState(false)
  const[clicks, setClicks] = useState(0)
  const [price, setPrice] = useState(0)

  const selectedSeat = (id) => {
      isSelected[`${id}`] ? subtractSeat() : addSeat(); 
      setIsSelected(prevState => ({...isSelected, [id]: !prevState[id]}))
      // window.localStorage.setItem('clicks', clicks)
      }

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
    <div>
      <div className='flex justify-center'>
        {/* <p>{sessionPrice}</p> -->PONER EL NOMBRE DE LA PELICULA AQUI<-- */} 
        <div className='flex m-2 w-52 flex-wrap justify-center'>

        <div className='bg-black w-full h-6 mt-3 mb-3 text-center text-white'>Screen</div>

          {[...Array(n)].map((e, i) => 
          <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'
              key={i}
              style={{backgroundColor: isSelected[`${i}`] ? 'red' : ''}} 
              onClick = {() => selectedSeat(i) }
              >
          </div>)} 
        </div>
      </div>
        <p className='text-center'>You have selected {clicks} seats for a price of {price}€</p>
    </div>
  )
}
