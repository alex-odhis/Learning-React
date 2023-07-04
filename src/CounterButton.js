import React from 'react'

export const CounterButton = ({onIncreement, numberOfClicks})=>{
   
    return(
        <>
            <p>You've Clicked the button {numberOfClicks} times!</p>
            <button onClick={onIncreement}>Click Me</button>
        </>
    )
}