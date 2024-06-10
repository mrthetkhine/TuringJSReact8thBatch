import Greeting from "./Greeting";


function AnotherContainer(props)
{
    console.log('Props in another container ',props);
    return (<div>
        {props.children[0]}
    </div>);
}
export default function Container(props)
{
    let {message} = props;
    console.log('Child ',props.children);
    return(<div >
        Container
        {props.children}
        <Greeting name={message}/>
        <AnotherContainer {...props}/>
    </div>);
}