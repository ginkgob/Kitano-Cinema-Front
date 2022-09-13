import React from 'react'
// import MovieSelect from './MovieSelect'

export const Counter = ( { text, clickButton, clickEvent, times } ) => {

  return (
    <>
    <button className={clickButton ? 'click-button' : 'restart-button'} onClick={clickEvent}>
      {text}
    </button>
    </>
    
  )
}
