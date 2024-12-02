import React, { useCallback, useMemo, useState } from 'react'
import CounterValue from './CounterValue';
import CounterButton from './CounterButton';

export default function Counters() {

const [Count_1,SetCount_1]=useState(0);
const [Count_2,SetCount_2]=useState(0);

const HnadelCount_1= useCallback( ()=>SetCount_1(Count_1+1) , [Count_1]);
const HnadelCount_2= useCallback( ()=>SetCount_2(Count_2+1) ,[Count_2]);


const IsEven =useMemo( ()=>{

    for(let i =0 ;i<800000000;i++){}
    return Count_1 % 2 ===0 ? "Even" : "Odd"
},[Count_1]);
// console.log("Counters")
  return (
    <div>
        {/* 1 */}
        <div>Count Is:{IsEven} </div>
        <CounterValue Value={Count_1}/>
        <CounterButton onClick={HnadelCount_1}/>
        {/* 2 */}
        <CounterValue Value={Count_2}/>
        <CounterButton onClick={HnadelCount_2} />
    </div>
  )
}
