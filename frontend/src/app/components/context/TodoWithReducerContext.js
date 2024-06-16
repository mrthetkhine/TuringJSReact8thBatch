import {useContext, useReducer, useState} from "react";
import {addTodoAction, deleteTodoAction, todoReducer, updateTodoAction} from "../TodoWithReducer";
import {DispatchContext} from "./DispatchContext";
import {ThemeContext} from "./ThemeContext";

let initTodos = [
    {
        id:1,
        title:'Task1',
    },
    {
        id:2,
        title: 'Task 2',
    }

];
let id = 3;

function TodoInput()
{
    const dispatcher = useContext(DispatchContext);
    //console.log('Dispatcher ',dispatcher);
    const [todoText,setTodoText] = useState('');
    const onChangeHandler= (e)=>{
        //console.log('Value ',e.target.value)
        setTodoText(e.target.value);
    };
    const btnAddHandler = ()=>{
      //console.log('Add ');
      const newTodo = {
          id : id++,
          title : todoText
      };

      dispatcher.dispatch(addTodoAction(newTodo));
      setTodoText('');
    };
    return (<div>
        <input type={"text"} value={todoText} onChange={onChangeHandler}/>
        <button type={"button"} onClick={btnAddHandler}>Add</button>
    </div>)
}
function TodoList({todos})
{
    return (<div>
        {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
    </div>);
}
function Todo({todo})
{
    const dispatcher = useContext(DispatchContext);
    const [editMode,setEditMode] = useState(false);
    const [todoText,setTodoText] = useState(todo.title);
    const btnDeleteHandler= ()=>{
      console.log('btn delete');
      dispatcher.dispatch(deleteTodoAction(todo));
    };
    const btnEditHandler= ()=>
    {
        console.log('Edit mode ',editMode);
        if(editMode)
        {
            dispatcher.dispatch(updateTodoAction({
                ...todo,
                title: todoText
            }))
        }
        setEditMode(!editMode);
    }
    const onChangeHandler=(e)=>{
        setTodoText(e.target.value);
    }
    return (<div>
        {
            editMode?
            <input type={"text"} value={todoText} onChange={onChangeHandler}/> :
            todo.title
        }
        &nbsp;
        <button type={"button"} onClick={btnEditHandler}>{
            editMode?'Update':'Edit'
        }</button>
        &nbsp;
        <button type={"button"} onClick={btnDeleteHandler}>Delete</button>
        &nbsp;
    </div>);
}
export default function TodoWithReducerContext()
{
    const [todos,dispatch ]= useReducer(todoReducer,initTodos);
    return (<div>

        TodoWithReducerContext
        <DispatchContext.Provider value={{dispatch: dispatch}}>
            <TodoInput/>
            <TodoList todos={todos}/>
        </DispatchContext.Provider>
    </div>);
}