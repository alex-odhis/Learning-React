import React from 'react';

//argumants passed to greetings are distructured 'props' AND are accessed by name instead of props.name
export const Greeting = ({name, numberOfMessages})=> { 
    let isMorning = (new Date()).getHours < 12;
    let greetingHeader = isMorning
        ? <h3>Good Morning {name}</h3>
        : <h3>Good Evening {name}</h3>;

    return (
        <>
            {greetingHeader}
            { numberOfMessages === 0
                ? null
                : <p>You have {numberOfMessages} messages</p> }
        </>
        );
    
}
