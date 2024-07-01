interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear:Bear = {
    name: "Bear 1",
    honey:true,
}
console.log(bear);
