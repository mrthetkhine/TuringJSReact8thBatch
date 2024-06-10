export default function JsxDemo()
{
    let person = {
        name : 'TK',
        age :39,
    }
    let myStyle = {
        backgroundColor: 'black',
        color: 'pink'
    }
    return(
        <div>
            <div>One</div>
            <div>Two</div>
            <ol>
                <li>One</li>
                <li>Two</li>
            </ol>
            Hello {name}
            {person.name}
            <ul style={myStyle}>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>

    );
}