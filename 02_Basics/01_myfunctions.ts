function addTwo(num: number){
    
    return num + 2;
    // return "Hello"
}

function getUpper(val: string){
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean){
    console.log(` ${name}, ${email}, ${isPaid}`);
    
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

let myValue = addTwo(5)
console.log(myValue);

getUpper("Dewanand")

signUpUser("Dewanand", "Dewa@lco.dev", false)
loginUser("d", "d@d.com" )


// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }


const getHello = ( s: string): string => {
    return ""
}

// const heros = ["thor", "spiderman", "ironman"]
const heros = [1, 2, 3]

heros.map(hero => {                     // automatically switchs heros parameter types string/number => check hover hero in  map.
    return `hero is ${hero}`
})


function consoleError(errmsg: string): void{   // not want return any other datatype
    console.log(errmsg);
    
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);    
}



export {}