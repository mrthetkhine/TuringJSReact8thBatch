import {redirect} from "next/navigation";
import {loadTodos} from "@/app/action";

async function doSomething(formData: FormData)
{
    "use server";
    console.log("form data",formData);
}
export default async function Page()
{
    //redirect('/');
    let todos = await loadTodos();

    return(<div>
        Admin &nbsp;
        {
            todos.length
        }
        <form action={doSomething}>
            <div>
                <label>Name</label>
                <input type={"text"} name={"name"}/>
            </div>
            <button type={"submit"} className={"btn btn-primary"}>Submit</button>
        </form>
    </div>);
}