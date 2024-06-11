let todos = [
    {
        id:1,
        title:'Task1',
    },
    {
        id:2,
        title: 'Task 2',
    }

];

function Todo({todo}) {
    let title = todo.title.toUpperCase();
    return (<div>
        {title}
    </div>)
}

export default function ListDemo()
{
    return (<div>
        Todo list
        {
            todos.map(todo=>
                <Todo key={todo.id} todo={todo}/>)
        }
    </div>)
}