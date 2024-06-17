import {useEffect, useState} from "react";

export default function useFetch(url)
{
    const [data,setData] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        fetch(url)
            .catch(err=>{
                console.log('Error in fetch ',err);
                setError(err);
                return err;
            })
            .then(response=>response.json())
            .then(json=> {
                setData(json);
                setLoading(false);
            });
    },[]);
    return [data,error,loading];
}