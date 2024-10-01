let score: number | string = 33

score = 44

score = "55"


type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let Dewanand: User | Admin = {name: "Dewannad", id: 334}

Dewanand = {username: "dc", id: 334}

// function getDbId(id: number | string){
//     // making some API calls
//     console.log(`DB id is: ${id}`);
// }

getDbId(3)
getDbId("3")


function getDbId(id: string | number){
    if (typeof id === "string") {
        id.toLowerCase()
    }

}


export {}





