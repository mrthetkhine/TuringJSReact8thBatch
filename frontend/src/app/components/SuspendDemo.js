import { Suspense } from 'react';

export function Loading()
{
    return (<h1>Loading</h1>);
}
async function getData()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello");
        },2000);
    });
}
export function SuspendChild()
{
    const data = getData();
    return (<h3>Data {data} </h3>);
}
export default  function SuspendDemo()
{
    return (<div>
        <Suspense fallback={<Loading />}>
            <SuspendChild/>
        </Suspense>
    </div>);
}