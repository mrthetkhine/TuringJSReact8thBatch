
function Parent({data})
{
    return (<div>
        Parent
        <Child data={data}/>
    </div>);
}
function Child({data})
{
    return (<div>
         Child
        <ChildLevel2 data={data}/>
    </div>);
}
function ChildLevel2({data})
{
    return (<div>
        Level 2 Child {data}
    </div>);
}
export default function ContextProblem()
{
    const data ="Hello";

    return (<div>
        Context Problem
        <Parent data={data}/>
    </div>);
}