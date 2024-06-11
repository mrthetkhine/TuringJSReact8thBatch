function User()
{
    return (<div>
        <h1>User</h1>
    </div>);
}
function Admin()
{
    return (<div>
        <h1>Admin</h1>
    </div>);
}
function UserProfile({isAdmin})
{
    if(!isAdmin)
    {
        return null;
    }
    else
    {
        return (<div>
            User Profile
        </div>);
    }

}
export default function Conditional({isAdmin})
{
   /* if(isAdmin)
    {
        return (<Admin/>);
    }
    else
    {
        return (<User/>);
    }*/
    return (<div>
        <UserProfile isAdmin={isAdmin}/>
       {/* {
            isAdmin && <Admin/>
        }
        {
            !isAdmin && <User/>
        }*/}
        {
            isAdmin ? <Admin/> : <User/>
        }
    </div>);
}