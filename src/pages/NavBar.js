import React from "react";
import { Link } from "react-router-dom";

export const NavBar = ()=>{
    return(
        <>
            <ul className="row">
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/counter" >CounterButtonPage</Link></li>
                <li><Link to="/people-list" >PeopleListPage</Link></li>
                <li><Link to="/forms" >Forms</Link></li>
                <li><Link to="/user" >User Profile</Link></li>
            </ul>
        </>
    )
}