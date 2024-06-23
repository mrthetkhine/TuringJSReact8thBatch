import { Suspense } from 'react';
import ShowUser from "./hook/ShowUser";
function Loading()
{
    return (<h1>Loading</h1>);
}

export default function SuspendDemo()
{
    return (<div>
        <Suspense fallback={<Loading />}>
            <ShowUser/>
        </Suspense>
    </div>);
}