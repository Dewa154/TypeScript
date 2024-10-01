var score = 33;
score = 44;
// score = "55";
var Dewanand = { name: "Dewannad", id: 334 };
// Dewanand = { username: "dc", id: 334 };
// function getDbId(id: number | string){
//     // making some API calls
//     console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
