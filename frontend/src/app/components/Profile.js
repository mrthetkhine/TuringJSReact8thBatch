export default function Profile({profile})
{
    let imageStyle={
        borderRadius:'50%',
    }
    return (<div>
        <h3>{profile.name}</h3>
        <img style={imageStyle} src={profile.imageUrl}/>

    </div>);
}
