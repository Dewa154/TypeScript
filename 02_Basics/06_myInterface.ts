interface User {    
    readonly dbId: number,        // interface is like form of class/method/basic protocall
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}


const Dewanand: User = { dbId: 22, email: "d@dewa.com",         // compulsory value data of interface parameter
userId: 2211,
startTrail: () => {
    return "Trail started"
},
getCoupon: (name: "dewanand10", off: 10) => {
    return 10
}
}

Dewanand.email = "Dewa@dewa.com"
// Dewanand.dbId = 33       // not allowed because dbId is readonly.