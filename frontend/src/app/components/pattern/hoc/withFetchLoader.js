import useFetch from "../../hook/useFetch";

export default function withFetchLoader(Element,url)
{
    return (props)=>{
        const [data,error,loading] = useFetch(url);
        if(loading)
        {
            return <h3>Loading</h3>;
        }
        else {
            return <Element {...props} data={data}/>;
        }
    }
}