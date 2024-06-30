

function ListUI({render})
{
    const items = ["one","two","three"];
    return (<div>
        {
            render(items)
        }
    </div>);
}
export default function RenderPropertyDemo()
{
    const renderList=(items)=>{
        return(<ol>
            {
                items.map((item, index) => <li key={index}>{item}</li>)
            }
        </ol>);

    }
    const renderDiv=(items)=>{
        return(<div>
            {
                items.map((item, index) => <div key={index}>{item}</div>)
            }
        </div>);

    }
    return (<div>
        Render property
        <ListUI render={renderDiv}/>
    </div>);
}