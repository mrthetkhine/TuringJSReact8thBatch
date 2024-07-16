"use client";

import {ChangeEvent, useEffect, useState} from "react";

import {
    addTodo, deleteTodo, loadAllTodo,
    selectTodos, Todo
} from "@/lib/features/todo/todoSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";

let id = 3;
function TodoInput()
{
    const dispatch = useAppDispatch();
    const [todo,setTodo] = useState('');
    const onChangeHandler = (event:any)=>{
        setTodo(event.target.value);
    }
    const btnAddHandler = ()=>{
        let payload:Todo = {
            id:id+'',
            _id:id+'',
            title:todo,
            completed:false,
        };
        id++;
        dispatch(addTodo(payload));
        setTodo('');


    };
    return (<div>
        <form>
            <div className={"form-group"}>
                <label>Todo text</label>
                <input type={"text"} className={"form-control"}
                       value={todo}
                       onChange={onChangeHandler}/>
                <button type={"button"}
                        className={"btn btn-primary"}
                        onClick={btnAddHandler}>Add Todo</button>
            </div>

        </form>
    </div>);
}

function TodoItem(props: { todo: Todo }) {
    const dispatch = useAppDispatch();
    const btnDeleteTodoHandler= ()=>{
        dispatch(deleteTodo(props.todo));
    };
    return <div>
        {props.todo.title}
        &nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnDeleteTodoHandler}>Delete</button>
    </div>;
}

function TodoList()
{
    const todos = useAppSelector(selectTodos);
    return(<div>
        <TodoInput/>
        {
            todos.map(todo=><TodoItem key={todo.id} todo={todo}/>)
        }
    </div>);

}
export default function TodosUI()
{
    const dispatch = useAppDispatch();
    console.log('AddTodo ',addTodo({
        id:'1',
        _id:'1',
        title:'Something'
    }));
    console.log('loadAllTodo ',loadAllTodo());
    useEffect(()=>{
        dispatch(loadAllTodo());
    },[]);

    return (<div>
            <TodoList/>
    </div>);
}