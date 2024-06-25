function Admin()
{
    return (<h1>Admin</h1>);
}
function User()
{
    return (<h1>User</h1>);
}
export default function ComponentViaVariable({admin})
{
    let Com ;
    if(admin)
    {
        Com= Admin;
    }
    else
    {
        Com = User;
    }
    return (<div>
        <Com/>
    </div>);
}