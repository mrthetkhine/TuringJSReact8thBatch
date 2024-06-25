export default function UserList({data})
{
    return (
        <div>
            { data.map(user=><div key={user.id}>
                {user.name}</div>)}
        </div>
       );
}