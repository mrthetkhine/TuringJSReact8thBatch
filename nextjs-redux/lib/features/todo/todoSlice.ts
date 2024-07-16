import {counterSlice, CounterSliceState} from "@/lib/features/counter/counterSlice";
import {createAppSlice} from "@/lib/createAppSlice";
import {PayloadAction} from "@reduxjs/toolkit";
import {fetchCount} from "@/lib/features/counter/counterAPI";

export interface Todo {
    "userId"?: number,
    "id": string,
    "_id":string,
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
            id:"1",
            _id:"1",
            title:"Task1",
            completed:true
        },
        {
            id:"2",
            _id:'2',
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
            }),
            deleteTodo:create.reducer((state, action: PayloadAction<Todo>) => {
                state.items = state.items.filter(todo=>todo.id != action.payload.id);
            }),
            updateTodo:create.reducer((state, action: PayloadAction<Todo>) => {
                state.items = state.items.map(todo=>todo.id == action.payload.id?action.payload:todo);
            }),
            loadAllTodo:create.asyncThunk(
                async () => {
                    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                    // The value we return becomes the `fulfilled` action payload
                    const json = await response.json();
                    console.log('todo json ',json);
                    return json;
                },
                {

                    fulfilled: (state, action) => {
                        state.items = action.payload;
                    },

                },
            ),
        }),
    selectors: {
        selectTodos: (todos) => todos.items,
    },
});
// Action creators are generated for each case reducer function.
export const { addTodo,deleteTodo,updateTodo,loadAllTodo } = todoSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectTodos } = todoSlice.selectors;