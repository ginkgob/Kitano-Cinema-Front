import React, {useState} from 'react'

export const Cinema = () => {
    
//Guardar en localstorage los asientos seleccionados

    const[isSelected, setIsSelected] = useState(false)

    // function selectedSeat () {
    //     setIsSelected(current => !current) 
    // }

    const selectedSeat = (id) => {
        setIsSelected(prevState => ({
            ...isSelected,
            [id]: !prevState[id]
        }))
    }

    const n = 8; //butacas por fila
    
    return (
        <div className='flex justify-center'>
            <div>
                <div className='bg-black w-full h-6 text-center text-white'>Screen</div>

                <div className='flex m-2'>
                    {[...Array(n)].map((e, i) => 
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'
                        key={i}
                        style={{backgroundColor: isSelected[`${i}`] ? 'red' : ''}} 
                        onClick = {() => selectedSeat(i)}>
                    </div>)} 
                </div>
                {/* <div className='flex m-2'>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                </div>
                <div className='flex m-2'>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                </div>
                <div className='flex m-2'>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                </div>
                <div className='flex m-2'>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                </div>
                <div className='flex m-2'>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                    <div className='bg-[#444451] h-3 w-4 m-1 rounded-t-xl transform transition duration-500 hover:scale-125 cursor-pointer'></div>
                </div> */}
            </div>
        </div>
    )
}
