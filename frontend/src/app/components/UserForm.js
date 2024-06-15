import {useState} from "react";

export default function UserForm()
{
  /*  const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
*/
    const [user,setUser] = useState({
        firstName: '',
        lastName: ''
    })
    const onChangeHandler = (e)=>{
        //console.log(e.target.name);
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    return (<div>
        <div>
            First Name<input type={"text"}
                             name={"firstName"}
                             value={user.firstName}
                            onChange={onChangeHandler}/>
        </div>

        <div>
            Last Name<input type={"text"}
                            name={"lastName"}
                            value={user.lastName}
                            onChange={onChangeHandler}/>
        </div>
        <div>
            Full name {user.firstName + ' '+ user.lastName}
        </div>
    </div>);
}