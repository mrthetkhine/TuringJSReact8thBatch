import { Suspense,use } from 'react';
import {Loading, SuspendChild} from "./SuspendDemo";

async function getTodos()
{
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    let json = await  response.json();
    return json;

}
function TodoList()
{
    const todos = use(getTodos());
    return (<div>
        {
            todos.map(todo=><div key={todo.id}>{todo.title}</div>)
        }
    </div>);
}
export default function SuspenseWithFetch()
{
    return (<div>
        <Suspense fallback={<Loading/>}>
            <TodoList/>
            <SuspendChild/>
        </Suspense>
    </div>)
}