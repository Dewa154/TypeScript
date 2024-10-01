interface User {    
    readonly dbId: number,        // interface is like form of class/method/basic protocall
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const Dewanand: Admin = { dbId: 22, email: "d@dewa.com",         // compulsory value data of interface parameter   // replaced User to Admin
userId: 2211,
role: "admin",
githubToken: "github",
startTrail: () => {
    return "Trail started"
},
getCoupon: (name: "dewanand10", off: 10) => {
    return 10
}
}

Dewanand.email = "Dewa@dewa.com"
// Dewanand.dbId = 33       // not allowed because dbId is readonly.