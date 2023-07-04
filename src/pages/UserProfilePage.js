import React, {useState, useEffect} from "react";

export const UserProfilePage = ()=>{
    const [user, setUser] = useState({name:{}})

    useEffect(()=>{
        const fetchUser = async()=>{
            try {
                const response = await fetch('http://randomuser.me/api');
                const data = await response.json();
                setUser(data.results[0]);
            } catch (err) {
               console.log(err);
            }
        }

        fetchUser();
    }, [])
    return(
        <>
            <h3>Name  : { user.name.first } { user.name.last }</h3>
            <h3>Email : { user.email }</h3>
        </>
    )

}