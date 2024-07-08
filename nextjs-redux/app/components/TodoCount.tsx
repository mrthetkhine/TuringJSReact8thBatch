"use client";
import {useAppSelector} from "@/lib/hooks";
import {selectTodos} from "@/lib/features/todo/todoSlice";

export default function TodoCount()
{
    const todos = useAppSelector(selectTodos);
    return (<h1>Todo count {todos.length}</h1>);
}