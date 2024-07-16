import {Metadata} from "next";

async function getData()
{
    return new Promise<number>((resolve,reject)=>{
       setTimeout(()=>resolve(1000),3000);
    });
}
export default function Page()
{
    const data = getData();
    return(<div>
        <h1>Movie dashboard {data}</h1>
    </div>);
}
export const metadata: Metadata = {
    title: "Movie Dashboard",
};
