export default function Greeting({name})
{
    console.log("Render greeting ");
    return(<div>
        Hello from Greeting {name}
    </div>);
}