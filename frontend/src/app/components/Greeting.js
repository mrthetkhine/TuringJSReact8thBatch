export default function Greeting({name="Someone"})
{
    console.log("Render greeting ");
    return(<div>
        Hello from Greeting {name}
    </div>);
}