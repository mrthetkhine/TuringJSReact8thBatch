type Pair<T,U> ={
    first:T,
    second: U,
    getFirst():T,
    getSecond():U,
}
let pair: Pair<string,number> ={
    first:"Hello",
    second: 122,
    getFirst() {
        return this.first;
    },
    getSecond() {
        return this.second;
    },
}