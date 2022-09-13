import React, {useState} from 'react'

export const Cinema = () => {
    
//Guardar en localstorage los asientos seleccionados

    const[isSelected, setIsSelected] = useState(false)
    const[clicks, setClicks] = useState(0)

    const addSeat = () => {
        setClicks( clicks + 1 );
    }

    const subtractSeat = () => {
        setClicks( clicks - 1 );
    }

    const selectedSeat = (id) => {
        isSelected[`${id}`] ? subtractSeat() : addSeat(); 
        setIsSelected(prevState => ({
            ...isSelected,
            [id]: !prevState[id]
            })
        )
    }

    const n = 60; //butacas totales
    
    return (
        <div className='flex justify-center'>
            <div>

                <div className='flex m-2 w-52 flex-wrap justify-center'>

                <div className='bg-black w-full h-6 mt-3 mb-3 text-center text-white'>Screen</div>

                    {[...Array(n)].map((e, i) => 
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'
                        key={i}
                        style={{backgroundColor: isSelected[`${i}`] ? 'red' : ''}} 
                        onClick = {() => selectedSeat(i) }>
                    </div>)} 
                </div>

                <p>Seats assigned: {clicks} seats</p>

                {/* <div className='flex m-2'>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    </div>*/}
            </div>
        </div>
    )
}
