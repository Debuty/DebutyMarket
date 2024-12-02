import React from 'react'

function CounterValue({Value}) {
    // console.log("CounterValue")
  return (
    <div>Value : {Value}</div>
  )
}

export default  React.memo(CounterValue);