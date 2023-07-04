import React from "react";
import { Link, Outlet } from "react-router-dom";

export const NestedFormsNavbar = () => {
    return (
        <div>
            <ul className="row">
                <li><Link to="/forms/controlled" >Controlled Form</Link></li>
                <li><Link to="/forms/uncontrolled" >Uncontrolled Form</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}