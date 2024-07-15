import {redirect} from "next/navigation";

export default function Page()
{
    redirect('/');
    return(<div>
        Admin
    </div>);
}