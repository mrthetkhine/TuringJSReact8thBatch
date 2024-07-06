import {counterSlice, CounterSliceState} from "@/lib/features/counter/counterSlice";
import {createAppSlice} from "@/lib/createAppSlice";
import {PayloadAction} from "@reduxjs/toolkit";

export interface Todo {
    "userId"?: number,
    "id": number,
    "title": string,
    "completed"?: boolean
}
export interface TodoState
{
    items: Todo[];
}

const initialState: TodoState = {
    items:[
        {
            id:1,
            title:"Task1",
            completed:true
        },
        {
            id:2,
            title:"Task2",
            completed:true
        },
    ]
};
export const todoSlice = createAppSlice({
        name:'todos',
        initialState,
        reducers:(create) =>({
            addTodo:create.reducer((state, action: PayloadAction<Todo>) => {
                state.items.push(action.payload);
            })
        }),
    selectors: {
        selectTodos: (todos) => todos.items,
    },
});
// Action creators are generated for each case reducer function.
export const { addTodo } = todoSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectTodos } = todoSlice.selectors;