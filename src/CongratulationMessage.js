import React, {useEffect} from "react";

export const CongratulationMessage = ({threshold, onHide}) =>{

    // useEffect(()=>{
    //     console.log('Congratulations This comonent is unmaunting'); //here is mostly used to subscribe to observables.

    //     //return function ()=> { ---- } mostly used to unsubscribe from an observables.
    // }, [])
    return(
    <>
        <h1>Congratulations! You have reached {threshold} number of Clicks</h1>
        <button onClick={onHide}>Hide Massage</button>
    </>
    );
}