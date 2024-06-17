import {useEffect, useState} from "react";
import useFetch from "./useFetch";

export default function ShowUser()
{
    /*
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(data=>{
                setUser(data);
            })
    },[]);
    */

    const [users,error]= useFetch('https://jsonplaceholder.typicode.com/users');

    return (<div>
        Users
        {
           !error && users.map(user=><div key={user.id}>
                {user.name}</div>)
        }
    </div>)
}