interface Box
{
    content: string;
}
interface Box2
{
    content:any;
}
let data :Box2 ;
data ={
    content: "Hello"
};
data  = {
    content : 321
}
interface Box3<Type>
{
    content:Type;
}
let data2: Box3<string> ;
data2 = {
    content:"Hello"
};
