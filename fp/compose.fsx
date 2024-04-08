let toUpper (str:string) = str.ToUpper()
let appendHi (str:string) =  str + " Hi"
let third = toUpper >> appendHi
printfn "%s " (third "Hello World from F#!!")

let fourth str = str |> toUpper |> appendHi
printfn "%s " (fourth "test")