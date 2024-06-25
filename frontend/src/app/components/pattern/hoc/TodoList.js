export default function TodoList({data})
{
    return (<div>
        {data.map(todo=><div key={todo.id}>
            {todo.title}
        </div>)}
    </div>);
}