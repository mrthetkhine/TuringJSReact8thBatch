export default function FragmentDemo()
{
    let data = ["one","two","three"];
    return (
        <>
            {
                data.map(item=><div>{item}</div>)
            }
        </>
        );
}