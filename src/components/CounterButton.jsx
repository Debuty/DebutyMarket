import React from 'react'

 function CounterButton({onClick}) {
    // console.log("CounterButton")
  return (
    <button onClick={onClick} className='btn btn-primary'>CounterButton</button >
  )
}

export default React.memo(CounterButton)

