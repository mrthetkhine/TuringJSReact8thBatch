"use client";

import { useState } from "react";

import {
    addTodo,
    selectTodos
} from "@/lib/features/todo/todoSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function TodosUI()
{
    const dispatch = useAppDispatch();
    const todos = useAppSelector(selectTodos);
    return (<div>
        Todos
        {
            todos.map(todo=><div key={todo.id}>
                {todo.title}
            </div>)
        }
    </div>);
}