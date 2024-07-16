"use client";
export default function Page({ params }: { params: { slug: string[] } })
{
    console.log("Slug ",params.slug);
    return(<div>
        Movie details
    </div>);
}