import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProtectedPage = ()=>{
    let navigate = useNavigate();
    let isAuthed = true;

    useEffect(()=>{
        if(!isAuthed){
            navigate('/')
        }
    });

    return (
            <h1>Only Authenticated Users Should see this</h1>
        );
}