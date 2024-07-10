// lexical scope

// let greetings="welcome";
// function someFunc(){
//     let username="pankaj"      

//     function PrintName(){
        
//         console.log(username)
//     }
    
//     PrintName();

// }

// someFunc()

//closure

// let greetings="welcome";
// function someFunc(){
//     let username="pankaj"

//     function PrintName(){
//         console.log(username)
//     }
    
//     return PrintName

// }

// let result=someFunc()
// result();


//lexical Scope
// let greetings="Namaste"

// function someFunc(){
// let username="Vineet";

// function PrintName(){
//     console.log(username);
// }
// PrintName();
// }

// someFunc();

// console.log(greetings);

//Closure
let greetings="Namaste"

function someFunc(){
let username="Vineet";

function PrintName(){
    console.log(username);
}
return PrintName;
}

let result=someFunc();
result();
console.log(greetings);

