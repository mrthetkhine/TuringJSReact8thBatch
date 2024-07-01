type Animal = {
  name: string;
}

type Bear = Animal & { 
  honey: boolean;
}

const bear: Bear = {
    name: "Bear 1",
    honey:true,
}
console.log(bear);