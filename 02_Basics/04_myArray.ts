// array

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
// const data3: string[] | number[] = ["1", "2", "3"]       // valid
const data3: (string | number | boolean)[] = ["1", "2", 3, true]          // also valid


let pi: 3.14 = 3.14
// pi = 3.145      // not allowed


let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"           // not allowed



export {}