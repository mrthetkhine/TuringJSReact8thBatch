import {useEffect, useState} from "react";
import useFetch from "../hook/useFetch";

export default function FetchTodo()
{

   /* useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response=>response.json())
            .then(data=>{
                setTodo(data);
            })
    },[]);
*/
   /* useEffect(()=>{
        //invalid
       //const [state,setState] = useState('');
    },[]);*/

    const [todos,error,loading]=  useFetch('https://jsonplaceholder.typicode.com/todos');
    return(<div>
        <h1>Todolist</h1>
        {
            loading && <div>Loading...</div>
        }
        {
            todos.map(todo=><div key={todo.id}>
                {todo.title}
            </div>)
        }
    </div>)
}