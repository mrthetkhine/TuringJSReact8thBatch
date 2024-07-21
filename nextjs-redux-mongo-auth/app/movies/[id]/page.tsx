export default function Page({ params }: { params: { id: string } })
{
    return (<div>
        movie details {params.id}
    </div>);
}