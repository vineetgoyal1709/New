// JS -> loosely typed language -> strict action X 
// JS -> env--> browser 
// 'use strict'
// let drivingLicense=false;
// let passTest=true;

// if(passTest){
//     drivingLicens=true;
// }

// if(drivingLicense){
//     console.log("You can drive");
// }
// else{
//     console.log("You can't drive");
// }

// js-> Functions -> block a code to perform a task
// code -> likh diya -> reuse

// let greeting="Jai Shree Ram"
// function Logger(){
//     // block scope
//     let message="hello"
//     return message;
// }

// // global scope
// const output=Logger()
//  console.log(output)
//  console.log(greeting)

// 1. Parameters to recieve
// 2. output return

// function fruitProcessor(apples, oranges) {
//     console.log(`${apples} apples and ${oranges} oranges`)

//     const juice = `Juice with ${apples} apples and ${oranges} oranges`

//     return juice;
// }
// const glass = fruitProcessor(2, 3)
// console.log(glass)
// console.log(fruitProcessor(4, 5));

// const applejuice = fruitProcessor(5, 0)
// console.log(applejuice)

// function declaration vs function expression

// console.log(calAge1(2000))
// let age1=calAge1(2001)
// console.log(age1);

// function calAge1(birthYear){
//     return 2024-birthYear;
// }

// const age2=calAge2(2001)
// console.log(age2)

// console.log(calAge2(2000));

// const calAge2=function(birthYear){
//     return 2024-birthYear
// }

// const glass=function(apples, oranges) {
//         console.log(`${apples} apples and ${oranges} oranges`)
    
//         const juice = `Juice with ${apples} apples and ${oranges} oranges`
    
//         return juice;
//     }
    
//     const applejuice=glass(5,0)
//     console.log(applejuice)

// function expression vs arrow function/callback function

// const calAge2=function(birthYear){
//     return 2024-birthYear

// }
// console.log(calAge2(2000));

// const calAge3=(birthYear,name) => 2024-birthYear
// console.log(calAge3(2002))

// const retirement=(birthYear,name) => {
//     let age= 2024-birthYear
//     let remainingYearToRetire=65-age
//     return `${name} age is ${age}  and years to retire is ${remainingYearToRetire}`
// }
//     console.log(retirement(2000,"vineet"))

// Function calling inside a function => higher order function

// function cutPieces(fruit){
//     return fruit*4
// }
// function fruitProcessor(apples, oranges) {
//     let applePieces=cutPieces(apples)
//     let orangePieces=cutPieces(oranges)
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`
    
//         return juice;
//     }
//     const glass = fruitProcessor(2, 3)
//     console.log(glass)

// const calcAverage=function(s1,s2,s3) => {
//     console.log((s1+s2+s3)/3);

// }
// con (Team1=calcAverage(44,23,71)
// const Team2=calcAverage(85,54,41)

// const checkWinner=functi (Team1,Team2) =>{
//      (Team1>=Team2*2){
//         console.log(`Dolphins win  (Team1} vs ${Team2})`);
//     }
//     if(avgKoala (Team1*2){
//         console.log(`Koalas win (${Team2} vs (Team1})`);
//     }
// }

// const calcAverage=function(s1,s2,s3) => {
//     return(s1+s2+s3)/3;

// }
// const avgDolphins=calcAverage(44,23,71)
// const avgKoala=calcAverage(85,54,41)

// const checkWinner (Team1,Team2) =>{
//      (Team1>=Team2*2){
//         console.log(`Dolphins win  (Team1} vs ${Team2})`);
//     }
//     else if(avgKoala (Team1*2){
//         console.log(`Koalas win (${Team2} vs (Team1})`);
//     }
//     else{
//         console.log("no one wins");
//     }
// }

//Loops

//for,while,do while
//find even number btw 1 to 20 range

// for(let i=1;i<=20;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// let user1=25;
// let user2;
// let attempt=0;
// while(true){
//     user2=Number(prompt("enter your guessed value"))
//     attempt++;

//     if(user2>user1){
//         console.log("Enter value is greater than original");
//     }
//     else if(user2<user1){
//         console.log("Enter value is lesser than original");
//     }
//     else{
//         console.log("congo!!!!!");
//         break;
//     }
    
// }

//do while

// let kamai=0;
// let customerStatus
// do{
//     kamai=kamai+50;
//     customerStatus=prompt("enter customer status yes/no");
//     }while(customerStatus=='yes')

//         console.log("aaj kee din kee kamai" , kamai);

// for of , for in , foreach
// for of-> strings, array

// let str="Javascript"
// let size=0
// for(let val of str){
//     console.log("val=",val);
//     size++;
// }
// console.log("size of your string is ", size);

// for in -> used for objects

// let student={
//     name:'chotu',
//     age:50,
//     cgpa:7.1,
//     isPass:true,
// };

// for(let key in student){
//     console.log(key + " : "+ student[key]);
// }
// const sampleData1={
//     id:123,
//     name:"vineet",
// }
// let sampleData=[{id:123,name:"vineet"},
// id:321,name:"goyal"},
// id:456,name:"vineetji"},
// id:654,name:"goyalji"},



