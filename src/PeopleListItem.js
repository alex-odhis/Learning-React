import React from 'react';
import './PeopleListItem.css'

export const PeopleListItem = ({person})=>{
    return(
        <div className='card'>
            <h3>{person.name}</h3>
            <p>age : {person.age}</p>
            <p>hair : {person.hairColor}</p>
        </div>
    )
}