interface Human
{
    readonly name: string;
    age : number;
    readonly address: {
        city: string;
        township:string;
    }
}
let h: Human = {
    name : 'TK',
    age : 39,
    address: {
        city:'Ygn',
        township:"Somewhere"
    }
}
//h.name = "Something";
/*h.address = {

}*/
h.address.city = "Chnage";