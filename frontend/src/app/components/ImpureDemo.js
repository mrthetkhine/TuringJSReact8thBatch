let guest = 0;

function Cup({guest}) {
    // Bad: changing a preexisting variable!
    //guest = guest + 1;
    console.log('Render cup ',guest);
    return <h2>Tea cup for guest #{guest}</h2>;
}
export default function ImpureDemo()
{

    return(<div>
        <Cup guest={1}/>
        <Cup guest={2}/>
        <Cup guest={1}/>
    </div>)
}