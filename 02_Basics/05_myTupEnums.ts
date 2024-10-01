// const user: (string | number)[] = [1, "dc"]

let tUser: [string, number, boolean]

tUser = ["dewanand", 25, true]      // in Tuple all value should be ordered value by given dataType. 

let rgb: [number, number, number]  = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "example@google.com" ]

// newUser[1] = 1   // invalid value of [1] position
newUser[1] = "hh@hc.com"        

// newUser.push(true)    // boolean parameter not have


export {}