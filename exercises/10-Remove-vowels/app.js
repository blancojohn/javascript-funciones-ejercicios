// Your code goes here
const rapid= (string)=> {for (let i= 0; string.length; i++){
    let notVocals= string.replace(/[aeiou]/g, "").toUpperCase()
    return notVocals
}};


// Work above this line; do not change code below
let str = "Pamela";
console.log(rapid(str));
