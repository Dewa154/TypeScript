// const User = {
//     name: "Dewanand",
//     email: "Dewanand@lco.dev",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){

// }

// let newUser = {name: "dewanand", isPaid: false, email: "d@d.com"}

// createUser(newUser)




function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399}
}


// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})



type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean
    creditcardDetails?: "number"        // Optional 
}

let myUser: User = {
    _id: "12345",
    name: "h",
    email: "h@lco.dev",
    isActive: false 
}


type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "h@gmail.com"
// myUser._id = "asa"    // Cannot asign readonly properties.

export {}