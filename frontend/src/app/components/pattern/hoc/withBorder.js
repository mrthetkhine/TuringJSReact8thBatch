export default function withBorder(Element)
{
    return (props) => <div className={"border"}>
        <Element {...props}/>
    </div>;
}