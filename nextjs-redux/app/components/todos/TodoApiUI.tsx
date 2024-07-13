"use client";

import {
    useAddTodoMutation,
    useDeleteTodoMutation,
    useGetAllTodosQuery,
    useGetTodoByIdQuery
} from "@/lib/features/todo/todosApiSlice";
import TodosUI from "@/app/components/todos/TodosUI";
import {Todo} from "@/lib/features/todo/todoSlice";
import {useRouter} from "next/navigation";


function TodoItem({todo}:{todo:Todo})
{
    const [deleteTodoApi,deleteTodoApiResult] = useDeleteTodoMutation();
    const router = useRouter();
    //const { data, isError, isLoading, isSuccess } = useGetTodoByIdQuery(props.todo._id);
    const btnDetailHandler= ()=>{
        //console.log('Data ',data);
        router.push(`/todos/${todo._id}`);
    };
    const btnDeleteHandler = ()=>{
      console.log('Delete');
        deleteTodoApi(todo._id)
            .unwrap()
            .then(data=>console.log('Delete todo success ',todo))
    };
    return (<div>
        {todo.title}
        &nbsp;
        <button type={"button"}
                            className={"btn btn-danger"}
                            onClick={btnDeleteHandler}>Delete</button>
       &nbsp;

        <button type={"button"} className={"btn btn-primary"} onClick={btnDetailHandler}>Details</button>
    </div>);
}
export default function TodoApiUI()
{

    const { data, isError, isLoading, isSuccess,refetch } = useGetAllTodosQuery(undefined,{
       /* refetchOnFocus:true,*/
    });
    if (isError) {
        return (
            <div>
                <h1>There was an error!!!</h1>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }
    if(isSuccess)
    {
        const btnForceReload = ()=>{
            console.log('Force reload');
            refetch();
        };
        return(<div>
            <button type={"button"} className={"btn btn-primary"} onClick={btnForceReload}>Force Refetch</button>
            {
                data.map(todo=><TodoItem todo={todo} key={todo._id}/>)
            }
        </div>)
    }

}